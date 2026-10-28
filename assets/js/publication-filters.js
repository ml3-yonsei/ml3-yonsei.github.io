(() => {
  const page = document.querySelector("[data-publications-page]");
  if (!page) return;
  const list = page.querySelector("[data-publication-list]");
  const controls = page.querySelector("[data-publication-filters]");
  if (!list || !controls) return;

  const normalize = (text) => (text || "").replace(/\s+/g, " ").trim().toLowerCase();
  const meaningful = (text) => {
    const value = normalize(text);
    return value && value !== "false" && value !== "none";
  };
  const papers = Array.from(list.querySelectorAll("[data-publication]")).map((entry) => {
    const highlight = normalize(entry.dataset.highlight);
    const award = meaningful(entry.dataset.award) || meaningful(entry.dataset.awardName) || /\b(award|prize)\b/.test(highlight);
    return {
      element: entry.closest("li") || entry,
      topics: new Set(Array.from(entry.querySelectorAll("[data-publication-topic]")).map((tag) => tag.dataset.publicationTopic)),
      highlights: Boolean(meaningful(highlight) || award),
      oral: /\boral\b/.test(highlight),
      spotlight: /\bspotlight\b/.test(highlight),
      award: Boolean(award),
      text: normalize(
        Array.from(entry.querySelectorAll(".title, .author, .periodical, .pub-highlight, .publication-topics"))
          .map((part) => part.textContent)
          .join(" ")
      ),
    };
  });

  const topicGroup = controls.querySelector("[data-topic-filters] .publication-filter-options");
  // Custom topic IDs also work before a display label is added to the YAML file.
  const knownTopics = new Set(Array.from(topicGroup.querySelectorAll("[data-topic-filter]")).map((button) => button.dataset.topicFilter));
  list.querySelectorAll("[data-publication-topic]").forEach((tag) => {
    const id = tag.dataset.publicationTopic;
    if (knownTopics.has(id)) return;
    knownTopics.add(id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "publication-filter-button";
    button.dataset.topicFilter = id;
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-controls", list.id);
    button.textContent = tag.textContent.trim();
    topicGroup.append(button);
  });

  const topicButtons = Array.from(controls.querySelectorAll("[data-topic-filter]"));
  const highlightButtons = Array.from(controls.querySelectorAll("[data-highlight-filter]"));
  const search = controls.querySelector("[data-publication-search]");
  const clear = controls.querySelector("[data-publication-clear]");
  const status = controls.querySelector("[data-publication-status]");
  const empty = page.querySelector("[data-publication-empty]");
  const groups = Array.from(list.querySelectorAll("ol.bibliography"));
  const yearHeadings = Array.from(list.querySelectorAll("h2.bibliography"));
  let topic = "all";
  let recognition = "all";

  function update() {
    const query = normalize(search.value);
    let count = 0;
    papers.forEach((paper) => {
      const matches =
        (topic === "all" || paper.topics.has(topic)) && (recognition === "all" || paper[recognition]) && (!query || paper.text.includes(query));
      paper.element.hidden = !matches;
      if (matches) count += 1;
    });
    groups.forEach((group) => {
      group.hidden = !Array.from(group.children).some((child) => child.tagName === "LI" && !child.hidden);
    });
    yearHeadings.forEach((heading) => {
      let next = heading.nextElementSibling;
      let hasVisiblePapers = false;
      while (next && !next.matches("h2.bibliography")) {
        if (next.matches("ol.bibliography") && !next.hidden) hasVisiblePapers = true;
        next = next.nextElementSibling;
      }
      heading.hidden = !hasVisiblePapers;
    });
    topicButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.topicFilter === topic)));
    highlightButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.highlightFilter === recognition)));
    const topicLabel = topicButtons.find((button) => button.dataset.topicFilter === topic).textContent.trim();
    const highlightLabel = highlightButtons.find((button) => button.dataset.highlightFilter === recognition).textContent.trim();
    const details = [
      topic !== "all" ? topicLabel : "",
      recognition !== "all" ? highlightLabel : "",
      query ? `Search: ${search.value.trim()}` : "",
    ].filter(Boolean);
    status.textContent = `${count} of ${papers.length} ${papers.length === 1 ? "paper" : "papers"}${
      details.length ? ` · ${details.join(" · ")}` : ""
    }`;
    empty.hidden = count > 0;
    clear.disabled = topic === "all" && recognition === "all" && !query;
  }

  topicButtons.forEach((button) =>
    button.addEventListener("click", () => {
      topic = button.dataset.topicFilter;
      update();
    })
  );
  highlightButtons.forEach((button) =>
    button.addEventListener("click", () => {
      recognition = button.dataset.highlightFilter;
      update();
    })
  );
  search.addEventListener("input", update);
  clear.addEventListener("click", () => {
    topic = "all";
    recognition = "all";
    search.value = "";
    update();
    search.focus();
  });
  update();
  controls.hidden = false;
})();
