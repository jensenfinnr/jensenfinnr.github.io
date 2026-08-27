/* ==========================================================================
   Finn Jensen — portfolio behavior
   Reads assets/js/media.js, builds thumbnails + galleries, runs the lightbox.
   No build step, no dependencies.
   ========================================================================== */

(function () {
  "use strict";

  var MEDIA = window.PROJECT_MEDIA || {};
  var ROOT = document.body.getAttribute("data-root") || "./";

  function imgPath(slug, file) {
    return ROOT + "assets/images/" + slug + "/" + file;
  }

  function shots(slug) {
    var list = MEDIA[slug];
    return Array.isArray(list) ? list.filter(function (s) { return s && s.file; }) : [];
  }

  /* ---- empty state: tells you exactly what to do to fill it ------------- */

  function slotNode(slug, note) {
    var el = document.createElement("div");
    el.className = "slot";
    el.innerHTML =
      "<strong>No photos yet</strong>" +
      "<span>Add files to <code>assets/images/" + slug + "/</code>, then list them in " +
      "<code>assets/js/media.js</code>.</span>" +
      (note ? "<span>" + note + "</span>" : "");
    return el;
  }

  /* ---- home page thumbnails -------------------------------------------- */

  function buildThumbs() {
    var slots = document.querySelectorAll("[data-thumb]");
    Array.prototype.forEach.call(slots, function (box) {
      var slug = box.getAttribute("data-thumb");
      var list = shots(slug);
      if (!list.length) {
        box.appendChild(slotNode(slug));
        return;
      }
      var first = list[0];
      var img = document.createElement("img");
      img.src = imgPath(slug, first.file);
      img.alt = first.alt || first.caption || box.getAttribute("data-alt") || "";
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", function () {
        img.remove();
        box.appendChild(slotNode(slug, "Looking for: " + first.file));
      });
      box.appendChild(img);
    });
  }

  /* ---- project page galleries ------------------------------------------ */

  function buildGalleries() {
    var grids = document.querySelectorAll("[data-gallery]");
    Array.prototype.forEach.call(grids, function (grid) {
      var slug = grid.getAttribute("data-gallery");
      var list = shots(slug);

      if (!list.length) {
        var empty = document.createElement("figure");
        empty.className = "shot shot--wide";
        empty.appendChild(slotNode(slug));
        grid.appendChild(empty);
        return;
      }

      list.forEach(function (shot, i) {
        var fig = document.createElement("figure");
        fig.className = "shot" + (shot.wide ? " shot--wide" : "");

        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "shot__btn";
        btn.setAttribute("aria-label", "Open larger view: " + (shot.caption || shot.file));

        var img = document.createElement("img");
        img.src = imgPath(slug, shot.file);
        img.alt = shot.alt || shot.caption || "";
        img.loading = i > 1 ? "lazy" : "eager";
        img.decoding = "async";
        img.addEventListener("error", function () {
          fig.innerHTML = "";
          fig.appendChild(slotNode(slug, "Looking for: " + shot.file));
        });

        btn.appendChild(img);
        btn.addEventListener("click", function () {
          openLightbox(slug, list, i);
        });
        fig.appendChild(btn);

        if (shot.caption) {
          var cap = document.createElement("figcaption");
          cap.textContent = shot.caption;
          fig.appendChild(cap);
        }
        grid.appendChild(fig);
      });
    });
  }

  /* ---- lightbox -------------------------------------------------------- */

  var box, boxImg, boxCap, state = { list: [], i: 0, slug: "", opener: null };

  function ensureLightbox() {
    if (box) return box;
    box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Photo viewer");
    box.innerHTML =
      '<button type="button" class="lightbox__close" aria-label="Close viewer">&times;</button>' +
      '<button type="button" class="lightbox__nav lightbox__nav--prev" aria-label="Previous photo">&#8249;</button>' +
      '<button type="button" class="lightbox__nav lightbox__nav--next" aria-label="Next photo">&#8250;</button>' +
      '<figure class="lightbox__figure"><img alt=""><figcaption class="lightbox__cap"></figcaption></figure>';
    document.body.appendChild(box);

    boxImg = box.querySelector("img");
    boxCap = box.querySelector(".lightbox__cap");

    box.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
    box.querySelector(".lightbox__nav--prev").addEventListener("click", function () { step(-1); });
    box.querySelector(".lightbox__nav--next").addEventListener("click", function () { step(1); });
    box.addEventListener("click", function (e) { if (e.target === box) closeLightbox(); });
    return box;
  }

  function paint() {
    var shot = state.list[state.i];
    if (!shot) return;
    boxImg.src = imgPath(state.slug, shot.file);
    boxImg.alt = shot.alt || shot.caption || "";
    boxCap.textContent = shot.caption || "";
    var many = state.list.length > 1;
    box.querySelector(".lightbox__nav--prev").hidden = !many;
    box.querySelector(".lightbox__nav--next").hidden = !many;
  }

  function step(d) {
    state.i = (state.i + d + state.list.length) % state.list.length;
    paint();
  }

  function openLightbox(slug, list, i) {
    ensureLightbox();
    state = { list: list, i: i, slug: slug, opener: document.activeElement };
    paint();
    box.classList.add("is-open");
    document.body.style.overflow = "hidden";
    box.querySelector(".lightbox__close").focus();
  }

  function closeLightbox() {
    if (!box) return;
    box.classList.remove("is-open");
    document.body.style.overflow = "";
    if (state.opener && state.opener.focus) state.opener.focus();
  }

  document.addEventListener("keydown", function (e) {
    if (!box || !box.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  /* ---- scroll reveal --------------------------------------------------- */

  function reveals() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, function (el) { el.classList.add("is-in"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.06 });
    Array.prototype.forEach.call(items, function (el) { obs.observe(el); });
  }

  /* ---- misc ------------------------------------------------------------ */

  function year() {
    var slots = document.querySelectorAll("[data-year]");
    Array.prototype.forEach.call(slots, function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  buildThumbs();
  buildGalleries();
  reveals();
  year();
})();
