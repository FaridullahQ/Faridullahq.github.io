---
layout: default
title: Home
---

<section class="hero-banner">
  <div class="hero-overlay">
    <div class="hero-content">
      <p class="hero-kicker">Cybersecurity Portfolio · SOC Analyst Path</p>
      <h1>Professional Cybersecurity Learning Journal</h1>
      <p class="hero-subtitle">
        A polished personal blog focused on cybersecurity growth, practical labs, and a structured path from software engineering into security operations.
      </p>
      <p class="hero-description">
        This site documents the full journey: foundations, networking, Linux, SOC workflows, security monitoring, packet analysis, and hands-on practice. It is designed as a strong public portfolio and a professional long-term learning space.
      </p>

      <div class="hero-actions">
        <a class="btn-primary" href="{{ '/about/' | relative_url }}">About This Journey</a>
        <a class="btn-secondary" href="{{ '/labs/' | relative_url }}">Explore Labs</a>
      </div>
    </div>
  </div>
</section>

<section class="home-section">
  <h2 class="section-title">Why this site matters</h2>
  <p class="section-lead">
    A cybersecurity blog becomes much stronger when it works as both a knowledge base and a professional portfolio. This final version highlights roadmap, focus areas, recent writing, and practical lab direction in a clean GitHub Pages structure.
  </p>

  <div class="hero-metrics">
    <div class="metric-card">
      <div class="metric-value">6</div>
      <div class="metric-label">Core roadmap stages</div>
    </div>
    <div class="metric-card">
      <div class="metric-value">5+</div>
      <div class="metric-label">Starter articles published</div>
    </div>
    <div class="metric-card">
      <div class="metric-value">100%</div>
      <div class="metric-label">GitHub Pages ready structure</div>
    </div>
    <div class="metric-card">
      <div class="metric-value">Pro</div>
      <div class="metric-label">Portfolio-first presentation</div>
    </div>
  </div>
</section>

<section class="home-section">
  <h2 class="section-title">Journey roadmap</h2>
  <p class="section-lead">The site is organized around a realistic cybersecurity progression that is clear for both readers and future employers.</p>
  <div class="roadmap-grid">
    <div class="glass-card roadmap-card">
      <span class="step-badge">01</span>
      <h3>Foundation</h3>
      <p>Core cybersecurity concepts, CIA triad, threats, risk, and defensive thinking.</p>
    </div>

    <div class="glass-card roadmap-card">
      <span class="step-badge">02</span>
      <h3>Networking</h3>
      <p>IP, DNS, HTTP, HTTPS, ports, protocols, packet flow, and network visibility.</p>
    </div>

    <div class="glass-card roadmap-card">
      <span class="step-badge">03</span>
      <h3>Systems</h3>
      <p>Linux, Windows, permissions, services, logs, and system-level security awareness.</p>
    </div>

    <div class="glass-card roadmap-card">
      <span class="step-badge">04</span>
      <h3>SOC Skills</h3>
      <p>Monitoring, alert triage, event analysis, escalation, and incident workflow fundamentals.</p>
    </div>

    <div class="glass-card roadmap-card">
      <span class="step-badge">05</span>
      <h3>Practical Tools</h3>
      <p>Wireshark, Nmap, SIEM platforms, host logs, packet analysis, and investigation habits.</p>
    </div>

    <div class="glass-card roadmap-card">
      <span class="step-badge">06</span>
      <h3>Portfolio Growth</h3>
      <p>Labs, technical writing, case studies, and a public record of professional progress.</p>
    </div>
  </div>
</section>

<section class="home-section">
  <h2 class="section-title">Core focus areas</h2>
  <div class="feature-grid">
    <div class="glass-card feature-card">
      <h3>Networking</h3>
      <p>Protocols, DNS, ports, traffic flow, packet capture, and analysis-ready understanding.</p>
    </div>
    <div class="glass-card feature-card">
      <h3>Linux &amp; Windows</h3>
      <p>Terminal basics, permissions, event logs, host investigation, and secure system usage.</p>
    </div>
    <div class="glass-card feature-card">
      <h3>SOC Operations</h3>
      <p>Alert monitoring, triage logic, event correlation, documentation, and escalation paths.</p>
    </div>
    <div class="glass-card feature-card">
      <h3>Hands-on Labs</h3>
      <p>Practice-driven learning through packet inspection, scans, logs, and investigation scenarios.</p>
    </div>
  </div>
</section>

<section class="home-section">
  <h2 class="section-title">Recent posts</h2>
  <p class="section-lead">Latest entries from the learning journal.</p>
  <div class="posts-grid">
    {% for post in site.posts limit:4 %}
    <article class="post-card">
      <span class="post-tag">Article</span>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
      <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
      <a class="btn-ghost" href="{{ post.url | relative_url }}">Read post</a>
    </article>
    {% endfor %}
  </div>
</section>

<section class="home-section">
  <div class="note-box">
    <h2 class="section-title">Next improvements already built into the structure</h2>
    <p>
      The current version now has a corrected navigation flow, relative asset paths for GitHub Pages, a stronger landing page, richer page content, archive support, better footer navigation, and a cleaner professional presentation for long-term updates.
    </p>
    <div class="inline-actions">
      <a class="btn-primary" href="{{ '/archive/' | relative_url }}">Open archive</a>
      <a class="btn-secondary" href="{{ '/labs/' | relative_url }}">View lab direction</a>
    </div>
  </div>
</section>
