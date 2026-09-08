# Scenario Intake Worker

This Cloudflare Worker receives the Solve It form submission and sends it to the support inbox through Resend.

## Required Cloudflare secrets

Set this as a Worker secret:

```bash
npx wrangler secret put RESEND_API_KEY
```

## Worker vars

These are already defined in `wrangler.toml`:

```toml
SUPPORT_EMAIL = "support@basilos.ai"
FROM_EMAIL = "AOS Work Playbook <onboarding@resend.dev>"
ALLOWED_ORIGINS = "https://basilaos.github.io,http://localhost:3000,http://127.0.0.1:3000"
```

For production, replace `FROM_EMAIL` with a verified sender such as:

```toml
FROM_EMAIL = "AOS Work Playbook <noreply@basilos.ai>"
```

That requires verifying `basilos.ai` in Resend and adding the DNS records Resend provides.

## Deploy

```bash
npx wrangler deploy
```

After deploy, copy the Worker URL and set it as a GitHub repository variable:

```bash
gh variable set NEXT_PUBLIC_SCENARIO_API_URL --repo basilaos/aos --body "https://your-worker-url.workers.dev"
```

Then rerun or push the GitHub Pages workflow so the static frontend is rebuilt with that URL.
