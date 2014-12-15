---
layout: page
permalink: "/atualizacoes/"
stylesheets: [signup]

lang: pt
title: "Inscreva-se!"
subtitle: "Receba atualizações de meu site!!"
---
<h3>Inscreva-se por feed (RSS, Atom, etc.)</h3>
<div id="signup_feed">
Use <a href="/feeds/feed-{{page.lang}}.xml">este link</a> com sua aplicação de feed preferida.
</div>

<h3>Inscreva-se por email</h3>
<div id="signup_email">
{% include mailchimp-signup.html %}
</div>