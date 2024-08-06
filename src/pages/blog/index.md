---
title: Archive
layout: page.njk
description: My blog of ramblings, programming, privacy, and lifestyle.
permalink: "/posts/"
---

This blog contains <b><a href="/posts/tags/">tags</a></b> for easier search of information.

<ul>
    {%- for post in collections.blog | reverse -%}
        <li>
            <a href="{{post.url}}">{{post.data.title}}</a> | <time datetime="{{post.date}}">{{post.date | formatPostDate }}</time>
            <p>{{post.data.description}}</p>
        </li>
    {%- endfor -%}
</ul>
