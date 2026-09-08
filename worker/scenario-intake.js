const RESEND_API_URL = "https://api.resend.com/emails";

function jsonResponse(body, init = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") ?? "";
  const allowedOrigins = (env.ALLOWED_ORIGINS ?? "https://basilaos.github.io,http://localhost:3000")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function clean(value) {
  return String(value ?? "").trim().slice(0, 4000);
}

function validate(payload) {
  const required = ["name", "email", "scenarioTitle", "scenarioDescription"];
  const missing = required.filter((field) => !clean(payload[field]));

  if (missing.length > 0) {
    return `Missing required fields: ${missing.join(", ")}`;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean(payload.email))) {
    return "Please enter a valid email address.";
  }

  return "";
}

function buildEmail(payload) {
  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Department", payload.department],
    ["Role", payload.role],
    ["Scenario Title", payload.scenarioTitle],
    ["Scenario Description", payload.scenarioDescription],
    ["Expected Outcome", payload.expectedOutcome],
  ];

  const text = rows.map(([label, value]) => `${label}:\n${clean(value) || "-"}`).join("\n\n");
  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <th align="left" style="padding:10px 12px;border:1px solid #d9d9d9;background:#f7f7f4;">${escapeHtml(label)}</th>
          <td style="padding:10px 12px;border:1px solid #d9d9d9;white-space:pre-wrap;">${escapeHtml(clean(value) || "-")}</td>
        </tr>`,
    )
    .join("");

  return {
    subject: `New AOS Work scenario: ${clean(payload.scenarioTitle).slice(0, 120)}`,
    text,
    html: `
      <h2>New AOS Work scenario submission</h2>
      <table cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
        ${htmlRows}
      </table>`,
  };
}

export default {
  async fetch(request, env) {
    const headers = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== "POST") {
      return jsonResponse({ message: "Method not allowed." }, { status: 405, headers });
    }

    if (!env.RESEND_API_KEY || !env.SUPPORT_EMAIL || !env.FROM_EMAIL) {
      return jsonResponse({ message: "Submission service is not configured." }, { status: 500, headers });
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse({ message: "Invalid JSON body." }, { status: 400, headers });
    }

    if (clean(payload.companyWebsite)) {
      return jsonResponse({ ok: true }, { status: 200, headers });
    }

    const validationError = validate(payload);
    if (validationError) {
      return jsonResponse({ message: validationError }, { status: 400, headers });
    }

    const email = buildEmail(payload);
    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.FROM_EMAIL,
        to: [env.SUPPORT_EMAIL],
        reply_to: clean(payload.email),
        subject: email.subject,
        text: email.text,
        html: email.html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend failed", errorText);
      return jsonResponse(
        { message: `Could not send the submission. Resend said: ${errorText.slice(0, 500)}` },
        { status: 502, headers },
      );
    }

    return jsonResponse({ ok: true, message: "Scenario submitted." }, { status: 200, headers });
  },
};
