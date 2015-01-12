---
layout: page
permalink: "/updates/"
stylesheets: [signup]

title: "Sign up!"
subtitle: "Get updates from my site!"
---
<div id="signup_feed" class="refbox">
<h3 class="refbox-header">Subscribe via feed (RSS, Atom, etc.)</h3>
<div class="refbox-content">
Use <a href="/feeds/feed-{{page.lang}}.xml">this link</a> and put it into your favorite feed application.
</div>
</div>

<div id="signup_email" class="refbox">
<h3 class="refbox-header">Subscribe via email</h3>
{% include mailchimp-signup.html %}
</div>