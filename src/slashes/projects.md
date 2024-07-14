---
title: Projects
layout: page.njk
description: All of the projects I've created/worked on/contributed to.
---

<ul class="cat-list">
{%- for project in projects.projects -%}
    <li class="cat-list-item">
        <a class="cat-list-item__link" href="{{ project.link }}">
            {%- if project.logo -%}
            <img src="{{ project.logo }}" alt="{{ project.title }} logo" width="72" height="72">
            {%- endif -%}
            <p class="cat-list-item__meta"><strong>{{ project.title }}</strong>{{ project.description }}</p>
        </a>
    </li>
{%- endfor -%}
</ul>
