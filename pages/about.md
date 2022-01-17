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

I am a 23 year Software Engineer in H&R Block. where I mostly work on core/advance part of .Net/Azure to implement robust framework that will be used my multiple teams. As a whole I am a full stack developer using AspNetCore for Backend, UI using Angular, Databse using both SQL and NoSQL, and have strong knowledge in deployment using Containerization/Kubernetes, also have worked on service mesh using Istio.

Contrary to the general reception, I was actually a fan of the Windows phone. It was what inspired me to learn to code as I felt the need to fill the gap of apps on the Windows Phone app store. Later, I started contributing to the Windows Community Toolkit open-source project and became a core member of the team. I have always had an affinity for Microsoft, and working for Microsoft would be a dream come true.

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

## Work Experience

<div class="row">
{% include about/workExperience.html %}
</div>

## Education

<div class="row">
{% include about/education.html %}
</div>