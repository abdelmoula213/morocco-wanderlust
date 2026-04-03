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

    // Step 1: Find Place ID by searching business name
    const findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=SEE%26KNOW+Morocco+Marrakech&inputtype=textquery&fields=place_id&key=${apiKey}`;
    const findRes = await fetch(findUrl);
    const findData = await findRes.json();

    let placeId: string | null = null;
    if (findData.candidates && findData.candidates.length > 0) {
      placeId = findData.candidates[0].place_id;
    }

    // Fallback: try with CID via text search
    if (!placeId) {
      const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=SEE+KNOW+Morocco+tours&key=${apiKey}`;
      const searchRes = await fetch(searchUrl);
      const searchData = await searchRes.json();
      if (searchData.results && searchData.results.length > 0) {
        placeId = searchData.results[0].place_id;
      }
    }

    if (!placeId) {
      console.log("Find place response:", JSON.stringify(findData));
      return new Response(
        JSON.stringify({ error: "Could not find place", reviews: [] }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Found place ID:", placeId);

    // Step 2: Get place details with reviews
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&reviews_sort=newest&key=${apiKey}`;
    const detailsRes = await fetch(detailsUrl);
    const detailsData = await detailsRes.json();

    if (detailsData.status !== "OK") {
      console.error("Place details error:", JSON.stringify(detailsData));
      return new Response(
        JSON.stringify({ error: "Failed to fetch reviews", reviews: [] }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const result = detailsData.result;
    const reviews = (result.reviews || []).map((r: any) => ({
      name: r.author_name || "Anonymous",
      avatar: r.profile_photo_url || "",
      rating: r.rating || 5,
      text: r.text || "",
      date: r.relative_time_description || "",
      profileUrl: r.author_url || "",
    }));

    return new Response(
      JSON.stringify({
        placeName: result.name || "SEE&KNOW Morocco",
        rating: result.rating || 0,
        totalReviews: result.user_ratings_total || 0,
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
