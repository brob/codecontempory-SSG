---
title: Teaching Modern Development and Design Practices
subtitle: Code Contemporary uses a combination of free online content, online courses and in-person workshops to make sure that the design and development communities are using the best, most up-to-date code they can. We strive to make every technologist the most efficient they can be.
layout: layouts/base.html
aside: 
  title: Practical CSS Grid
  preTitle: Featured Course
  description: You’ve heard about CSS Grid layout, but if you haven’t gotten started with it, let me walk you through all its features in a simple, practical approach. By the end of this course, you’ll understand Grid and have practical examples to put into production right away!
  link: /
  linkText: Sign Up Now
---



From this point we should already have:

- [Eleventy](https://11ty.io) with a skeleton site
- A date format filter for Nunjucks
- Sass pipeline
- JS pipeline
- JS [search index](/search.json) generator
- Serverless (FaaS) development pipeline with Netlify Functions for Lambda


## Post pages

The pages found in in the posts

<ul class="listing">
{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay }}</time>
  </li>
{%- endfor -%}
</ul>