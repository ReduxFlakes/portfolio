---
title: Bookmarks
update: 2023-12-18T02:04:00
description: Directory of sites that I found interesting while surfing the web.
---

<dl>
{% for bookmarks in bookmarks.bookmarks %}
    <dt style="color:var(--clr-heading);"><strong>{{ bookmarks.title }}</strong> - [<a href="{{ bookmarks.url }}">Access website</a>]</dt>
    <dd style="margin-bottom: 1rem;margin-left:1rem;">{{ bookmarks.description }}</dd>
{% endfor %}
</dl>
