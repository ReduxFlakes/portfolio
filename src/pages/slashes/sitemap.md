---
title: Sitemap
description: Website sitemap
---

<p>Our workers are still counting the dates, meaning we can't show dates yet, give us some time and we'll sort it out!</p>

<table>
    <thead>
        <tr>
            <th>Title/URL</th>
        </tr>
    </thead>
    <tbody>
        {% for page in collections.all | sort(attribute = "data.title") %}
            {% if not page.data.draft %}
                <tr>
                    <td>
                        <a href="{{ page.url | url }}">{{page.data.title}}</a>
                    </td>
                </tr>
            {% endif %}
        {% endfor %}
    </tbody>
</table>
