(() => {
  const gallery = document.querySelector("[data-gallery]");
  if (!gallery) return;

  const cards = Array.from(gallery.querySelectorAll("[data-gallery-card]"));
  const filters = gallery.querySelector(".gallery-filters");
  const filterButtons = Array.from(gallery.querySelectorAll("[data-gallery-filter]"));
  const status = gallery.querySelector("[data-gallery-status]");
  const visibleCards = () => cards.filter((card) => !card.hidden);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.galleryFilter;
      filterButtons.forEach((filter) => filter.setAttribute("aria-pressed", String(filter === button)));
      cards.forEach((card) => {
        card.hidden = category !== "all" && card.dataset.category !== category;
      });
      const count = visibleCards().length;
      status.textContent = `${count} ${count === 1 ? "photo" : "photos"} shown${category === "all" ? "" : ` in ${category}`}.`;
    });
  });
  if (filters) filters.hidden = false;

  const dialog = gallery.querySelector("[data-gallery-dialog]");
  if (!dialog || typeof dialog.showModal !== "function") return;

  const image = dialog.querySelector("[data-gallery-image]");
  const title = dialog.querySelector("#gallery-lightbox-title");
  const caption = dialog.querySelector("#gallery-lightbox-caption");
  const meta = dialog.querySelector("[data-gallery-meta]");
  const counter = dialog.querySelector("[data-gallery-counter]");
  const original = dialog.querySelector("[data-gallery-original]");
  const previous = dialog.querySelector("[data-gallery-prev]");
  const next = dialog.querySelector("[data-gallery-next]");
  const close = dialog.querySelector("[data-gallery-close]");
  let selectedIndex = 0;
  let opener = null;

  function showPhoto(index) {
    const visible = visibleCards();
    selectedIndex = (index + visible.length) % visible.length;
    const card = visible[selectedIndex];
    const link = card.querySelector("[data-gallery-photo]");
    const thumbnail = link.querySelector("img");
    image.src = link.href;
    image.alt = thumbnail.alt;
    title.textContent = card.querySelector("[data-photo-title]").textContent;
    caption.textContent = card.querySelector("[data-photo-caption]")?.textContent || "";
    meta.textContent = card.querySelector("time")?.textContent || "";
    counter.textContent = `${selectedIndex + 1} / ${visible.length}`;
    original.href = link.href;
    previous.hidden = next.hidden = visible.length < 2;
  }

  cards.forEach((card) => {
    const link = card.querySelector("[data-gallery-photo]");
    link.addEventListener("click", (event) => {
      // Preserve the browser's normal open-in-new-tab/window gestures.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      opener = link;
      showPhoto(visibleCards().indexOf(card));
      dialog.showModal();
      document.body.classList.add("gallery-is-open");
      close.focus();
    });
  });

  previous.addEventListener("click", () => showPhoto(selectedIndex - 1));
  next.addEventListener("click", () => showPhoto(selectedIndex + 1));
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showPhoto(selectedIndex + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("gallery-is-open");
    image.removeAttribute("src");
    opener?.focus();
  });
})();
