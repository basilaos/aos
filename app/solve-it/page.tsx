import type { Metadata } from "next";
import Link from "next/link";
import { assetPath } from "../site-paths";
import { ThemeToggle } from "../theme-toggle";

export const metadata: Metadata = {
  title: "BasilAOS · Scenario Co-Creation",
  description:
    "Submit a real work scenario and explore the AOS Work Playbook.",
};

const steps = [
  {
    title: "Understand",
    body: "How you work now, where you are stuck, what inputs you have, and what result you want.",
  },
  {
    title: "Assess",
    body: "Map whether Workbench fits the scenario, and identify the Skills, permissions, and delivery route.",
  },
  {
    title: "Validate",
    body: "Confirm missing details and make sure the proposed approach matches the real work context.",
  },
  {
    title: "Co-Create",
    body: "Turn high-value scenarios into documented solutions that can be reused by the community.",
  },
];

const prompts = [
  "What role or task are you in when the problem occurs?",
  "What steps do you take today, and how long does it take?",
  "What systems, files, tables, emails, or assets are involved?",
  "What should Workbench ultimately deliver?",
  "Which data, account, or publishing boundaries should stay protected?",
];

export default function ScenarioCoCreationPage() {
  return (
    <main className="dark-page">
      <div className="dark-wrap">
        <nav className="dark-nav" aria-label="Primary">
          <Link className="wordmark" href="/">
            <img src={assetPath("/brand/basil-wordmark.png")} alt="BasilAOS Work" />
          </Link>
          <span className="nav-tag">Scenario Co-Creation</span>
          <div className="nav-spacer" />
          <Link href="/bluebook/">AOS Work Playbook</Link>
          <ThemeToggle />
        </nav>

        <section className="dark-hero">
          <p className="mono-kicker">SCENARIO CO-CREATION · 1:1 SUPPORT</p>
          <h1>
            Have a work scenario you want
            <br />
            to solve with BasilAOS?
          </h1>
          <p className="dark-dek">
            Tell us your real problem. We read every submission, assess whether
            BasilAOS Workbench can solve it, and turn broadly useful scenarios
            into co-created playbook cases.
          </p>
          <div className="dark-actions">
            <a href="#scenario-form">Submit Scenario</a>
            <Link href="/bluebook/">Read the Playbook</Link>
          </div>
        </section>

        <section className="dark-section">
          <h2>What happens after you submit</h2>
          <div className="dark-steps">
            {steps.map((step, index) => (
              <article className="dark-card" key={step.title}>
                <span className="num">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dark-section">
          <h2>How to describe your problem effectively</h2>
          <ul className="prepare-list">
            {prompts.map((prompt) => (
              <li key={prompt}>
                <strong>Check:</strong> {prompt}
              </li>
            ))}
          </ul>
        </section>

        <section className="dark-section" id="scenario-form">
          <h2>Submit your scenario</h2>
          <p className="form-dek">
            Use this as the first version of the intake page. The form is
            intentionally local-only for now, so no information is sent out.
          </p>
          <form className="form-card">
            <div className="field-row">
              <label>
                Your Name
                <input placeholder="Your full name" />
              </label>
              <label>
                Email
                <input placeholder="your.email@company.com" />
              </label>
            </div>
            <div className="field-row">
              <label>
                Department
                <input placeholder="e.g., Operations, E-commerce" />
              </label>
              <label>
                Role
                <input placeholder="e.g., Amazon Operations Specialist" />
              </label>
            </div>
            <label>
              Scenario Title
              <input placeholder="One sentence describing your work scenario" />
            </label>
            <label>
              Scenario Description
              <textarea placeholder="What scenario do you encounter? What problem are you trying to solve?" />
            </label>
            <label>
              Expected Outcome
              <textarea placeholder="What should Workbench deliver? What does done look like?" />
            </label>
            <button type="button">Submit Scenario</button>
          </form>
        </section>

        <section className="dark-cta">
          <h2>What's your Work?</h2>
          <p>
            One Skill solves one task. One Work solves an entire job. Share the
            daily task chain behind your role, and it can become a reusable
            Workbench case.
          </p>
          <Link href="/bluebook/">Explore the AOS Work Playbook</Link>
        </section>
      </div>
    </main>
  );
}
