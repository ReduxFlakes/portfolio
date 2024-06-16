---
title: Home
layout: base.njk
style_slot: true
---

<section>

## Hey 👋,

my name is Redux (or reducc for close friends) and I'm a self-taught developer and designer from 🌍 Portugal, currently studying computer science.

I'm known for creating the [SurfScape](/projects#surfscape) project, a web portal for Neocities about the open web, and learning about building websites.

**TL:DR**: A privacy and security advocate with a passion of building minimal software related to the web. Or check my [about page](/about) for more information!

> **16/06/2024 Update**: The website is almost _finished_! New: [about](/about) and [projects](/projects) pages. (also some updates on [gear](/gear)).

### Latest posts

<div class="post-listing">
{%- for post in collections.blog | reverse -%}
<a class="post-listing__item" href="{{post.url}}">
<h2>{{post.data.title}}  - <small> <time datetime="{{ date }}">{{post.data.date | postDate }}</time></small></h2>
<p>{{post.data.description}}</p>
</a>
{%- endfor -%}
</div>

<a href="/blog">Check the blog!</a>

### Friends and sites I like :3 <small class="subtle">(contact me if you want to be added!)</small>

<div style="display:flex;gap:0.25em;flex-wrap:wrap;">
{%- for button in buttons.friendButtons -%}
    <a class="btn-link" href="{{button.url}}" title="{{button.title}}">
    <img src="/static/buttons/{{button.img}}" alt="{{button.title}}" width="88" height="31">
    </a>
{%- endfor -%}
</div>

More in the <a href="/bookmarks">bookmarks</a> page ;)

</section>

{% slot 'style_slot' %}

<style>
    .btn-link {
        padding: 0.25em;
image-rendering: pixelated;
    }
.btn-link:hover {
    outline: 2px dashed var(--primary);
    transform: scale(0.98);
}
</style>

{% endslot %}
