const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const PLACE_CID = "1612132695717590420";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("GOOGLE_PLACES_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "GOOGLE_PLACES_API_KEY not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Step 1: Find Place ID from CID using textsearch
    const searchUrl = `https://places.googleapis.com/v1/places:searchText`;
    const searchRes = await fetch(searchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.id,places.displayName",
      },
      body: JSON.stringify({
        textQuery: `cid:${PLACE_CID}`,
      }),
    });

    let placeId: string | null = null;

    if (searchRes.ok) {
      const searchData = await searchRes.json();
      if (searchData.places && searchData.places.length > 0) {
        placeId = searchData.places[0].id;
      }
    }

    // Fallback: try the textQuery with business name
    if (!placeId) {
      const fallbackRes = await fetch(searchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "places.id,places.displayName",
        },
        body: JSON.stringify({
          textQuery: "SEE&KNOW Morocco tours Marrakech",
        }),
      });

      if (fallbackRes.ok) {
        const fallbackData = await fallbackRes.json();
        if (fallbackData.places && fallbackData.places.length > 0) {
          placeId = fallbackData.places[0].id;
        }
      } else {
        await fallbackRes.text();
      }
    }

    if (!placeId) {
      return new Response(
        JSON.stringify({ error: "Could not find place", reviews: [] }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Step 2: Fetch place details with reviews
    const detailsUrl = `https://places.googleapis.com/v1/places/${placeId}`;
    const detailsRes = await fetch(detailsUrl, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
      },
    });

    if (!detailsRes.ok) {
      const errText = await detailsRes.text();
      console.error("Places API error:", errText);
      return new Response(
        JSON.stringify({ error: "Failed to fetch place details", reviews: [] }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const details = await detailsRes.json();

    const reviews = (details.reviews || []).map((r: any) => ({
      name: r.authorAttribution?.displayName || "Anonymous",
      avatar: r.authorAttribution?.photoUri || "",
      rating: r.rating || 5,
      text: r.text?.text || "",
      date: r.relativePublishTimeDescription || "",
      profileUrl: r.authorAttribution?.uri || "",
    }));

    return new Response(
      JSON.stringify({
        placeName: details.displayName?.text || "SEE&KNOW Morocco",
        rating: details.rating || 0,
        totalReviews: details.userRatingCount || 0,
        reviews,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: msg, reviews: [] }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
