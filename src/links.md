---
title: Links
layout: page.njk
update: 2024-02-25T15:04:00
description: Directory of sites that I recommend everyone to visit!
---

<nav style="display: flex; flex-wrap: wrap">
    {% for friendButtons in buttons.friendButtons %}
      <a href="{{ friendButtons.url }}"
      ><img
        src="/static/buttons/{{ friendButtons.img }}"
        alt="{{ friendButtons.title }}"
/></a>
    {% endfor %}
  </nav>
