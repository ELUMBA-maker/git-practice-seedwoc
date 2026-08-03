import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <section class="page-shell">
      <div class="hero-card">
        <p class="eyebrow">Built for early-stage founders</p>
        <h1>Make every new idea easier to evaluate.</h1>
        <p class="hero-copy">
          Legit helps you map out startup costs, revenue potential, and the first launch steps in one clear place so your next idea feels less risky.
        </p>
        <div class="pill-row">
          <span class="pill">Revenue forecasting</span>
          <span class="pill">Launch planning</span>
          <span class="pill">Profit clarity</span>
        </div>
      </div>

      <div class="stats-grid">
        <article class="stat-card">
          <h3>Start with confidence</h3>
          <p>Estimate your opening spend before you commit to tools, branding, or a first batch of inventory.</p>
        </article>
        <article class="stat-card">
          <h3>See the upside</h3>
          <p>Compare monthly revenue and profit with a simple framework that highlights what could scale quickly.</p>
        </article>
        <article class="stat-card">
          <h3>Plan the launch</h3>
          <p>Turn research into a focused rollout with milestones for validation, outreach, and first sales.</p>
        </article>
      </div>

      <div class="feature-grid">
        <article class="feature-card">
          <h2>Idea validation</h2>
          <p>Test your concept with a customer-first lens. Define the problem, target audience, and the reason your offer stands out.</p>
          <ul>
            <li>Clarify the core pain point</li>
            <li>Shape a simple customer profile</li>
            <li>Measure early signals of demand</li>
          </ul>
        </article>
        <article class="feature-card">
          <h2>Profit breakdown</h2>
          <p>Understand your cash needs and expected margins without needing a finance background or an expensive spreadsheet.</p>
          <ul>
            <li>Estimate startup cost</li>
            <li>Model recurring revenue</li>
            <li>Spot your payback window</li>
          </ul>
        </article>
        <article class="feature-card">
          <h2>Launch roadmap</h2>
          <p>Move from idea to first execution with a practical sequence for content, outreach, and customer engagement.</p>
          <ul>
            <li>Choose one offer to test first</li>
            <li>Prepare your launch assets</li>
            <li>Collect feedback and iterate</li>
          </ul>
        </article>
      </div>

      <div class="timeline-card">
        <h2>What a strong first week looks like</h2>
        <ol>
          <li><strong>Define the offer</strong> — pick one clear promise that solves a meaningful problem.</li>
          <li><strong>Build a simple landing page</strong> — share the benefit, the audience, and the next step.</li>
          <li><strong>Talk to real people</strong> — collect feedback quickly and refine before spending more.</li>
        </ol>
      </div>
    </section>
  `,
  styles: [
    `.page-shell { display: grid; gap: 1.5rem; }`,
    `.hero-card, .stat-card, .feature-card, .timeline-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 24px; padding: 2rem; box-shadow: 0 12px 40px rgba(15, 23, 42, 0.06); }`,
    `.hero-card { background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%); }`,
    `.eyebrow { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #2563eb; margin-bottom: 0.5rem; }`,
    `h1, h2, h3 { margin-top: 0; color: #0f172a; }`,
    `.hero-copy { color: #475569; line-height: 1.7; max-width: 720px; }`,
    `.pill-row { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1rem; }`,
    `.pill { background: #dbeafe; color: #1d4ed8; padding: 0.45rem 0.8rem; border-radius: 999px; font-size: 0.9rem; font-weight: 600; }`,
    `.stats-grid, .feature-grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }`,
    `.stat-card p, .feature-card p, .timeline-card li { color: #475569; line-height: 1.7; }`,
    `.feature-card ul { padding-left: 1.1rem; color: #334155; }`,
    `.timeline-card ol { padding-left: 1.2rem; display: grid; gap: 0.8rem; }`,
    `.timeline-card strong { color: #1d4ed8; }`
  ]
})
export class FeaturesComponent {}
