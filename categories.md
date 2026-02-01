---
layout: page
title: Categories
subtitle: Browse posts by category
permalink: /categories/
---

<div class="categories-list">
{% for category in site.categories %}
  <div class="category-item">
    <h2><a href="{{ '/categories/' | append: category[0] | slugify | relative_url }}">{{ category[0] }}</a></h2>
    <p class="category-count">{{ category[1].size }} post{% if category[1].size != 1 %}s{% endif %}</p>
    <ul class="category-posts">
      {% for post in category[1] limit: 3 %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  </div>
{% endfor %}
</div>

<style>
.categories-list {
  display: grid;
  gap: 2rem;
}
.category-item {
  padding: 1.5rem;
  background: var(--color-bg-alt);
  border-radius: var(--radius-lg);
}
.category-item h2 {
  font-size: var(--text-xl);
  margin-bottom: 0.5rem;
}
.category-item h2 a {
  color: var(--color-text);
}
.category-count {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  margin-bottom: 1rem;
}
.category-posts {
  list-style: disc;
  padding-left: 1.5rem;
}
.category-posts li {
  margin-bottom: 0.5rem;
}
</style>
