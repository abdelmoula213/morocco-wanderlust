const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/microsoft_excel";
const FILE_PATH = "SK Morocco Bookings.xlsx"; // in OneDrive root
const TABLE_NAME = "Bookings";

interface BookingPayload {
  name?: string;
  phone?: string;
  tour?: string;
  preferred_date?: string | null;
  guests?: string | null;
  message?: string | null;
  total?: number | null;
  price?: string | null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const MICROSOFT_EXCEL_API_KEY = Deno.env.get("MICROSOFT_EXCEL_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    if (!MICROSOFT_EXCEL_API_KEY) throw new Error("MICROSOFT_EXCEL_API_KEY is not configured");

    const body = (await req.json()) as BookingPayload;
    const name = (body.name ?? "").toString().slice(0, 200);
    const phone = (body.phone ?? "").toString().slice(0, 50);
    const tour = (body.tour ?? "").toString().slice(0, 300);
    const preferredDate = (body.preferred_date ?? "").toString().slice(0, 50);
    const guests = (body.guests ?? "").toString().slice(0, 20);
    const message = (body.message ?? "").toString().slice(0, 2000);
    const total = typeof body.total === "number" && isFinite(body.total) ? body.total : 0;
    const price = (body.price ?? "").toString().slice(0, 500);

    if (!name || !phone || !tour) {
      return new Response(JSON.stringify({ error: "name, phone, tour are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const submittedAt = new Date().toISOString().replace("T", " ").slice(0, 19);
    const headers = {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": MICROSOFT_EXCEL_API_KEY,
      "Content-Type": "application/json",
    };

    const encodedPath = encodeURIComponent(FILE_PATH);
    const url = `${GATEWAY_URL}/me/drive/root:/${encodedPath}:/workbook/tables/${encodeURIComponent(TABLE_NAME)}/rows/add`;

    const resp = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        values: [[submittedAt, name, phone, tour, preferredDate, guests, message, "New", total, price]],
      }),
    });

    const text = await resp.text();
    if (!resp.ok) {
      console.error("Excel append failed", resp.status, text);
      throw new Error(`Excel append failed [${resp.status}]: ${text}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("excel-append-booking error:", msg);
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
