---
title: Home
layout: base.njk
style_slot: true
---

<div class="hero">
<section class="hero-intro">
<h2>Introduction</h2>
<p>Welcome to my website, my name is ReduxFlakes! In this site you can find all kinds of stuff, it's my archive of sorts, from games, blog posts, music tastes, and projects I've worked on. GO explore!!</p>
</section>
<section class="hero-updates">
<h2>Updates</h2>
{%- include "updates.njk" -%}
</section>
</div>

<article>

![Under Construction](/static/images/under_construction.gif)

## Website in construction

I've recently made this new website and so much of it's content is missing. Please wait unitl I get things tidy!

## Favourite music <small>as of 09/03/2024</small>

> Johan Lindell - Ghost Dancing ([External Link](https://redirect.invidious.io/watch?v=MH-PxeKrM7Q"))

<div class="video-embed-wrapper">
  <iframe
      src="https://invidio.us/embed/MH-PxeKrM7Q"
      class="video-embed"
      title="Invidious YT video player"
      allow="autoplay;encrypted-media;web-share"
      allowfullscreen
    ></iframe>
</div>
</article>

{% slot 'style_slot' %}

<style>
.hero {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  margin-bottom: 1em;
  overflow: hidden;
}

.hero section {
  padding: 1rem;
}
.hero-intro {
color: #7d46aa;
background: #d3afe1;
}
.hero-updates {
  color: #6a8b65;
  background: #c8d4bf;
  max-height: 257.44px;
  overflow: auto;
}

ul.updates-list {
  display: block;
  margin-top: 1em;
  margin-left: 1.25rem;
}
.updates-list li::marker {
  content: '➤ ';
  font-size: 1em;
}
</style>

{% endslot %}
