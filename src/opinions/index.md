---
title: Opinions
layout: list.njk
description: My opinion on hot topics.
---

{%- for post in collections.opinions | reverse -%}
{%- if post.data.date -%}
<a class="post-listing__item" href="{{post.url}}">

<h2>{{post.data.title}} - <small> <time datetime="{{ date }}">{{post.data.date | postDate }}</time></small></h2>
<p>{{post.data.description}}</p>
</a>    
{%- else -%}
<p>No posts were found with the collection: <code>opinions</code> :(</p>
{%- endif -%}
{%- endfor -%}
