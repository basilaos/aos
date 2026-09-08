"use client";

import { FormEvent, useMemo, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";
type ScenarioPayload = Record<string, string>;

const scenarioApiUrl = process.env.NEXT_PUBLIC_SCENARIO_API_URL ?? "";
const supportEmail = "support@basilos.ai";

function buildMailtoHref(payload: ScenarioPayload) {
  const subject = payload.scenarioTitle ? `AOS Work scenario: ${payload.scenarioTitle}` : "AOS Work scenario submission";
  const body = [
    "New AOS Work scenario submission",
    "",
    `Name: ${payload.name || "-"}`,
    `Email: ${payload.email || "-"}`,
    `Department: ${payload.department || "-"}`,
    `Role: ${payload.role || "-"}`,
    "",
    "Scenario Title:",
    payload.scenarioTitle || "-",
    "",
    "Scenario Description:",
    payload.scenarioDescription || "-",
    "",
    "Expected Outcome:",
    payload.expectedOutcome || "-",
  ].join("\n");

  return `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ScenarioForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const isConfigured = useMemo(() => scenarioApiUrl.trim().length > 0, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured) {
      setStatus("error");
      setMessage("Submission service is not configured yet. We opened an email draft for support@basilos.ai.");
      window.location.href = buildMailtoHref({});
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
    ) as ScenarioPayload;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 8000);

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch(scenarioApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message ?? "Could not submit the scenario.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks. Your scenario has been sent to the BasilOS team.");
    } catch (error) {
      window.location.href = buildMailtoHref(payload);
      setStatus("error");
      setMessage(
        error instanceof Error
          ? `${error.message} We opened an email draft to support@basilos.ai with your submission.`
          : "Could not submit the scenario. We opened an email draft to support@basilos.ai with your submission.",
      );
    } finally {
      window.clearTimeout(timeoutId);
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
