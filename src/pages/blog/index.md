---
title: Archive
layout: page.njk
description: My blog of ramblings, programming, privacy, and lifestyle.
permalink: "/posts/"
---

<ul>
    {%- for post in collections.blog | reverse -%}
        <li>
            <a href="{{post.url}}">{{post.data.title}}</a> | <time datetime="{{post.date}}">{{post.date | formatPostDate }}</time>
            <p>{{post.data.description}}</p>
        </li>
    {%- endfor -%}
</ul>
