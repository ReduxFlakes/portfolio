---
title: Slashes
permalink: "/slashes/"
---

Idea taken from: [https://slashpages.net/](https://slashpages.net/) .

<ul>
{%- for page in collections.slashes | sort(attribute = "page.data.title") -%}
{%- if not page.data.draft -%}
<li><a href="{{page.url}}">{{ page.data.title }}</a> - {{page.data.description}}</li>
{%- endif %}
{%- endfor -%}

</ul>
