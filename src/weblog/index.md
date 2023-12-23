---
title: Weblog
description: Randoms posts about random stuff
layout: page.njk
---

<p style="text-align:center;">{{ description }}</p>

<ul style="list-style:none;">
{% for post in collections.weblogPosts %}
  <li>
  <a href="{{ post.url }}"><h2>{{ post.data.title }}</h2></a>
  <time datetime="{{ post.data.date | dateToISOString }}" >{{ post.data.date | PostDate }}</time>
  </li>
{% endfor %}
</ul>
