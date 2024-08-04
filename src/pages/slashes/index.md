---
title: Slashes
layout: page.njk
permalink: "/slashes/"
eleventyExcludeFromCollections: true
---

Idea taken from: [https://slashpages.net/](https://slashpages.net/) .

<ul>
{%- for page in collections.slashes | sort(attribute = "page.data.title") -%}
<li><a href="{{page.url}}">{{ page.data.title }}</a> - {{page.data.description}}</li>
{%- endfor -%}
</ul>
