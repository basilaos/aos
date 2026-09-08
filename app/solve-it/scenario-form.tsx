"use client";

import { FormEvent, useMemo, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const scenarioApiUrl = process.env.NEXT_PUBLIC_SCENARIO_API_URL ?? "";

export function ScenarioForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const isConfigured = useMemo(() => scenarioApiUrl.trim().length > 0, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured) {
      setStatus("error");
      setMessage("Submission service is not configured yet. Please email support@basilos.ai directly.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch(scenarioApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message ?? "Could not submit the scenario.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks. Your scenario has been sent to the BasilOS team.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Could not submit the scenario.");
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <input aria-hidden="true" className="form-honeypot" name="companyWebsite" tabIndex={-1} />
      <div className="field-row">
        <label>
          Your Name
          <input name="name" placeholder="Your full name" required />
        </label>
        <label>
          Email
          <input name="email" placeholder="your.email@company.com" required type="email" />
        </label>
      </div>
      <div className="field-row">
        <label>
          Department
          <input name="department" placeholder="e.g., Operations, E-commerce" />
        </label>
        <label>
          Role
          <input name="role" placeholder="e.g., Amazon Operations Specialist" />
        </label>
      </div>
      <label>
        Scenario Title
        <input name="scenarioTitle" placeholder="One sentence describing your work scenario" required />
      </label>
      <label>
        Scenario Description
        <textarea
          name="scenarioDescription"
          placeholder="What scenario do you encounter? What problem are you trying to solve?"
          required
        />
      </label>
      <label>
        Expected Outcome
        <textarea name="expectedOutcome" placeholder="What should Workbench deliver? What does done look like?" />
      </label>
      <button disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Submitting..." : "Submit Scenario"}
      </button>
      {message ? (
        <p className={`form-status form-status-${status}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
