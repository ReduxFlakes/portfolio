---
title: Home
layout: home.njk
heading: zoned out in neocities :3
---

I created this website to showcase my talents (or lack of), by showing my projects, designs, and share some personal stuff, like things I enjoy, to music that I like.

I've always been fascinated by computers when I was young so I really needed a place to share that passion I have.

Since this is somewhat a recreation of my mind, some stuff might me broken, outdated or missing so you might be stuck here for awhile.

Anyways, you can explore now, either go trough the sidebar or the links spread across the homepage, it's up to you really, bye and thanks for checking my place! :3

## Latest post

<ul>
{% for post in collections.weblogPosts | reverse %}
    {% if loop.index0 < 1 %}
  <li>
  <a href="{{ post.url }}">{{ post.data.title }}</a><br>
  <time datetime="{{ post.data.date | dateToISOString }}" >{{ post.data.date | PostDate }}</time>
  </li>
  {% endif %}
{% endfor %}
</ul>

<a href="https://www.mabsland.com/Adoption.html"><img style="width:145px;margin:auto;" src="/static/images/web/censor_14b.gif" alt="Fa Teen: 14 Rating"></a>

<div class="flex--wrap">
<img src="/static/blinkies/kittencry.gif" alt="want kibbles">
<img src="/static/blinkies/time_blind.gif" alt="This user is time blind">
<img src="/static/blinkies/computer.gif" alt="be kind to your computer">
<img src="/static/blinkies/tinycats.gif" alt="my cat made me do it">
</div>

<a href="https://blinkies.neocities.org/" style="display:block;text-align:center;">get more blinkies!</a>
