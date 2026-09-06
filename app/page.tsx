import type { Metadata } from "next";
import Link from "next/link";
import { playbookSections } from "./playbook-data";
import { assetPath } from "./site-paths";

export const metadata: Metadata = {
  title: "BasilAOS Workbench Playbook",
  description:
    "The official BasilAOS Workbench Playbook landing page and reading path.",
};

const firstPlaybookHref = `/bluebook/${playbookSections[0].id}`;

const tracks = [
  {
    icon: "01",
    part: "Part 01",
    count: "CH. 11",
    title: "Get Workbench Running",
    body: "Meet the interface, fire off your first task, plug in a Skill and a Connector, and find out exactly what this thing can and can't do.",
    tags: ["Best for beginners", "Finish one task first"],
  },
  {
    icon: "02",
    part: "Part 02",
    count: "CH. 10",
    title: "Office Work, Solved",
    body: "Email, docs, spreadsheets, reports, research, meetings: six real scenarios you'll recognize instantly.",
    tags: ["6 scenarios", "Task-driven"],
  },
  {
    icon: "03",
    part: "Part 03",
    count: "CH. 07",
    title: "Built for Your Role",
    body: "HR, Legal, Finance, Design, E-commerce, Marketing, Sales. Find your role, skip the rest.",
    tags: ["7 roles", "Find by role"],
  },
  {
    icon: "04",
    part: "Part 04",
    count: "CH. 06",
    title: "Chain It, Automate It",
    body: "From one-off runs to real automation, to Skills and workflows that are entirely yours: each level covers more ground.",
    tags: ["Advanced systems", "Reliable automation"],
  },
];

const quickPicks = [
  {
    icon: "Mail",
    title: "Email & Follow-ups",
    body: "Turn inbox chaos into a tracked, structured record.",
  },
  {
    icon: "Data",
    title: "Spreadsheets & Data",
    body: "Cross-file spreadsheets with thousands of rows and formulas, handled directly.",
  },
  {
    icon: "Todo",
    title: "Meetings & Action Items",
    body: "Notes in, action items out: owners and due dates included.",
  },
  {
    icon: "Deck",
    title: "Reports & Decks",
    body: "From analysis results to a PPT or HTML you can actually present.",
  },
  {
    icon: "Role",
    title: "Find by Role",
    body: "HR, Legal, Finance, Design, E-commerce, Marketing, Sales.",
  },
  {
    icon: "Auto",
    title: "Automation",
    body: "Add a trigger, and Monday morning's report is already there.",
  },
];

const levels = [
  {
    label: "Curious -> Interested",
    title: "Use it",
    body: "Run three scenarios a week. Prove to yourself this thing actually works.",
  },
  {
    label: "Habit -> Reliant",
    title: "Make it a habit",
    body: "General scenarios turn into daily moves. Stack your role-specific ones on top.",
  },
  {
    label: "Reliant -> Creative",
    title: "Chain it",
    body: "Connect two scenarios, add a trigger, and let it run without you.",
  },
  {
    label: "Creative -> Benchmark",
    title: "Make it stick",
    body: "Turn your know-how into a Skill. Build a workflow the whole team runs on.",
  },
];

export default function HomePage() {
  return (
    <main className="home-page">
      <header className="home-hero">
        <nav className="home-nav" aria-label="Primary navigation">
          <Link className="wordmark" href="/">
            <img src={assetPath("/brand/basil-wordmark.png")} alt="BasilAOS Work" />
            <img className="home-wordmark-symbol" src={assetPath("/brand/basil-icon.svg")} alt="" aria-hidden="true" />
          </Link>
          <div className="home-nav-spacer" />
          <Link href="/">Home</Link>
          <Link href={firstPlaybookHref}>Start Reading</Link>
          <button className="home-nav-button" type="button">
            Case Studies
          </button>
          <Link href="/solve-it">Solve It</Link>
          <div className="home-search" aria-label="Search placeholder">
            Search the playbook
            <span>CMD K</span>
          </div>
        </nav>

        <section className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="home-pill">Basil AgentOS / Playbook</p>
            <h1>Workbench Playbook</h1>
            <p>
              What can Workbench actually do for you? Real work, real plays,
              zero fluff. Go from 0 to 1, get it running today. Then 1 to 100,
              turn every win into a system your whole team keeps running.
            </p>
            <div className="home-actions">
              <Link className="home-primary" href={firstPlaybookHref}>
                Start Reading
              </Link>
              <a className="home-secondary" href="#tracks">
                See the 4 Tracks
              </a>
            </div>
            <small>No code, no jargon. Just tell it what you need.</small>
            <div className="home-stats" aria-label="Playbook stats">
              <span>
                <strong>29</strong>
                Chapters
              </span>
              <span>
                <strong>4</strong>
                Tracks
              </span>
            </div>
          </div>
        </section>
      </header>

      <section className="home-section home-section-light" id="tracks">
        <div className="home-section-head">
          <p>BasilAOS / Reading Path</p>
          <span>02</span>
        </div>
        <h2>Four Tracks</h2>
        <div className="track-grid">
          {tracks.map((track) => (
            <article className="track-card" key={track.title}>
              <div className="track-card-top">
                <span className="track-icon">{track.icon}</span>
                <small>{track.count}</small>
              </div>
              <p>{track.part}</p>
              <h3>{track.title}</h3>
              <p className="track-body">{track.body}</p>
              <div className="tag-row">
                {track.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-section-light home-quick">
        <div className="home-section-head">
          <p>BasilAOS / Quick Picks</p>
          <span>03</span>
        </div>
        <h2>What do you want it to help with right now?</h2>
        <p className="home-section-dek">
          Pick one real thing on your plate this week. Jump straight in, run it,
          then knock out the next one.
        </p>
        <div className="quick-grid">
          {quickPicks.map((pick) => (
            <article className="quick-card" key={pick.title}>
              <span>{pick.icon}</span>
              <h3>{pick.title}</h3>
              <p>{pick.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-section-dark">
        <div className="home-section-head">
          <p>BasilAOS / Four Levels</p>
          <span>04</span>
        </div>
        <h2>One win shouldn't only happen once.</h2>
        <p className="home-section-dek">
          Four tracks, four levels of skill. Level up, and the same hour covers
          a whole lot more ground.
        </p>
        <div className="level-grid">
          {levels.map((level, index) => (
            <article className="level-card" key={level.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{level.label}</p>
              <h3>{level.title}</h3>
              <p>{level.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-footer-cta">
        <div>
          <p>Continuously updated / Keep going</p>
          <h2>This playbook never stops growing.</h2>
          <span>
            New scenarios and techniques, always in the works. Got a real case
            worth covering? Tell us.
          </span>
        </div>
        <div className="footer-actions">
          <Link href={firstPlaybookHref}>Start Reading</Link>
          <Link href="/solve-it">Contribute</Link>
        </div>
      </section>

      <footer className="home-footer">
        <span>BasilAOS Work / Workbench Playbook v0.1</span>
        <span>2026-09 / support@basilos.ai</span>
      </footer>
    </main>
  );
}
