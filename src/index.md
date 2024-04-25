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

## Website in construction

I've recently revamped this website again and so much of it's content is missing. Please wait until I make things tidy!

## Favourite music <small>as of 18/04/2024</small>

> Danzig - Long Way Back From Hell ([External Link](https://redirect.invidious.io/watch?v=PkoFImDpx_M"))

<div class="video-embed-wrapper">
  <iframe
      src="https://invidio.us/embed/PkoFImDpx_M"
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
  border: 1px solid white;
  margin-bottom: 1em;
}

.hero section {
  padding: 1rem;
}
.hero-intro {
background: #1D267D;
}
.hero-updates {
  color: #afdba7;
  background: #1E5128;
  max-height: 100%;
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
