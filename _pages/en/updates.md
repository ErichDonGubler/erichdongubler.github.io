---
layout: page
permalink: "/updates/"
stylesheets: [signup]

title: "Sign up!"
subtitle: "Get updates from my site!"
---
<h3>Subscribe via feed (RSS, Atom, etc.)</h3>
<div id="signup_feed">
Use <a href="/feeds/feed-{{page.lang}}.xml">this link</a> and put it into your favorite feed application.
</div>

<h3>Subscribe via email</h3>
<div id="signup_email">
{% include mailchimp-signup.html %}
</div>