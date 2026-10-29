---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 3
page_class: no-title
publication_filters: true
---

<section class="publication-page" aria-labelledby="publications-heading" data-publications-page>
<header class="publication-page-header">
  <h1 id="publications-heading">Publications</h1>
</header>

{% include publication_filters.liquid %}

<div class="publications" id="publication-list" data-publication-list>

<p class="author-note">
  <sup>*</sup> denotes equal contribution. <sup>†</sup> denotes equal advising.
</p>

{% bibliography %}

</div>

<p class="publication-no-results" data-publication-empty hidden>No papers match these filters. Try another topic or clear the filters.</p>
</section>
