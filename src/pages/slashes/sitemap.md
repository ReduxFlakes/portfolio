---
title: NavStar
description: My "advanced" sitemap
---

<h1>NavStar</h1>
<p>Advanced Sitemap Navigation System</p>

<p>Our workers are still counting the dates, meaning we can't show dates yet, give us some time and we'll sort it out!</p>

<table>
    <thead>
        <tr>
            <th>Title/URL</th>
            <th>Created in</th>
            <th>Last update</th>
        </tr>
    </thead>
    <tbody>
        {% for page in collections.all | sort(attribute = "data.title") %}
            {% if not page.data.draft %}
                <tr>
                    <td>
                        <a href="{{ page.url | url }}">{{page.data.title}}</a>
                    </td>
                    <td>
                        {{ page.data.created }}
                    </td>
                    <td>{{ page.data.modified }}</td>
                </tr>
            {% endif %}
        {% endfor %}
    </tbody>
</table>
