const WORKER_URL = "https://aos-scenario-intake.basilaos.workers.dev";

function corsHeaders(request) {
  const origin = request.headers.get("Origin") || "";
  const allowedOrigins = new Set([
    "https://basilaos.github.io",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ]);

  return {
    "Access-Control-Allow-Origin": allowedOrigins.has(origin) ? origin : "https://basilaos.github.io",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const headers = corsHeaders(request);

    if (url.pathname !== "/api/scenario") {
      return new Response("AOS scenario intake proxy", { status: 200 });
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== "POST") {
      return Response.json({ message: "Method not allowed." }, { status: 405, headers });
    }

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: await request.text(),
      });

      return new Response(await response.text(), {
        status: response.status,
        headers: {
          ...headers,
          "Content-Type": response.headers.get("Content-Type") || "application/json",
        },
      });
    } catch {
      return Response.json({ message: "Could not reach the submission service." }, { status: 502, headers });
    }
  },
};
