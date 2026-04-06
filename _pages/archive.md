---
layout: page
title: Archive
permalink: /archive/
---

<section class="page-section">
  <h1>Article Archive</h1>
  <p class="section-lead">A complete list of published posts in chronological order.</p>

  <ul class="archive-list">
    {% for post in site.posts %}
    <li>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
  </ul>
</section>
