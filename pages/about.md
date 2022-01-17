---
layout: page
title: About
permalink: /about/
weight: 1
---

# About Me

<div class="card text-white bg-danger mb-3">
  <div class="card-header">IMPORTANT</div>
  <div class="card-body">
    <h5 class="card-title">Under construction</h5>
    <p class="card-text">This website in under construction. Information provided here is not accurate. In the meantime please visit my <a href="https://www.linkedin.com/in/vijay-nirmal/">linkedin profile</a> for details</p>
  </div>
</div>

Hi I am **{{ site.author.name }}** :wave:,<br><br>

I am a 23 year old Computer Science undergrad from Coimbatore, India. It all started when I got my first laptop at the age of nine and made my first website when I was 11 years old. What inspired me the most at the first place is the potential computer science has. To appease my curiosity, I strive to know how things work; I am determined to innovate in this field.

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>