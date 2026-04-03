const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

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

    // Step 1: Find Place ID via Places API (New) text search
    const searchUrl = "https://places.googleapis.com/v1/places:searchText";
    const searchRes = await fetch(searchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.id,places.displayName",
      },
      body: JSON.stringify({
        textQuery: "SEE&KNOW Morocco Marrakech tours",
        locationBias: {
          circle: {
            center: { latitude: 31.6295, longitude: -7.9811 },
            radius: 50000,
          },
        },
      }),
    });

    const searchData = await searchRes.json();
    console.log("Search response:", JSON.stringify(searchData));

    let placeId: string | null = null;
    if (searchData.places && searchData.places.length > 0) {
      placeId = searchData.places[0].id;
    }

    if (!placeId) {
      return new Response(
        JSON.stringify({ error: "Could not find place", debug: searchData, reviews: [] }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Found place ID:", placeId);

    // Step 2: Get place details with reviews
    const detailsUrl = `https://places.googleapis.com/v1/places/${placeId}`;
    const detailsRes = await fetch(detailsUrl, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
      },
    });

    const details = await detailsRes.json();
    console.log("Details keys:", Object.keys(details));

    if (!detailsRes.ok) {
      console.error("Place details error:", JSON.stringify(details));
      return new Response(
        JSON.stringify({ error: "Failed to fetch reviews", reviews: [] }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const reviews = (details.reviews || []).map((r: any) => ({
      name: r.authorAttribution?.displayName || "Anonymous",
      avatar: r.authorAttribution?.photoUri || "",
      rating: r.rating || 5,
      text: r.text?.text || r.originalText?.text || "",
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
