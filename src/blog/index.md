---
title: Blog
layout: list.njk
description: Ramblings, lifestyle and programming.
---

{%- for post in collections.blog | reverse -%}
<a class="post-listing__item" href="{{post.url}}">

<h2>{{post.data.title}} - <small> <time datetime="{{ date }}">{{post.data.date | postDate }}</time></small></h2>
<p>{{post.data.description}}</p>
</a>
{%- endfor -%}
