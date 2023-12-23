---
title: Bookmarks
description: List of any kind of websites I like and recommend!
layout: page.njk
---

{% figure "/static/images/optimized/windows_xp_explorer_links_18122023.webp", "Windows XP with the Links folder open, with a shortcut for this site" %}

This page includes a list of sites that I have found while browsing the web that I've found interesting and recommend anyone checking them out!

<dl>
{% for bookmarks in bookmarks.bookmarks %}
    <dt>{{ bookmarks.title }} - [<a href="{{ bookmarks.url }}">Access website</a>]</dt>
    <dd>{{ bookmarks.description }}</dd>
{% endfor %}
</dl>
