/* You shouldn't need to edit this file. Edit projects.js instead. */

(function () {
  const $ = (id) => document.getElementById(id);

  /* ---------- helpers ---------- */

  // Turns "text with [a link](https://x.com)" into safe DOM nodes.
  function richText(text) {
    const frag = document.createDocumentFragment();
    const re = /\[([^\]]+)\]\(([^)]+)\)/g;
    let last = 0, m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) frag.append(text.slice(last, m.index));
      const a = document.createElement("a");
      a.href = m[2];
      a.textContent = m[1];
      if (/^https?:/.test(m[2])) a.rel = "noopener";
      frag.append(a);
      last = re.lastIndex;
    }
    if (last < text.length) frag.append(text.slice(last));
    return frag;
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  const labelFor = (key) => (CATEGORIES.find((c) => c.key === key) || {}).label || key;

  /* ---------- header ---------- */

  document.title = SITE.name + " – Journalist";
  $("site-name").textContent = SITE.name;
  SITE.bio.forEach((text) => {
    const p = el("p");
    p.append(richText(text));
    $("site-bio").append(p);
  });

  SITE.links.forEach((l) => {
    const li = el("li");
    const a = el("a", "", l.label);
    a.href = l.url;
    if (/^https?:/.test(l.url)) a.rel = "noopener";
    li.append(a);
    $("site-links").append(li);
  });
  $("footer-text").textContent = SITE.footer || "";

  /* ---------- filter ---------- */

  const filterBox = $("filter-buttons");
  const list = $("project-list");
  const note = $("filter-note");
  const buttons = {};

  const options = [{ key: "all", label: "everything", blurb: "" }].concat(CATEGORIES);

  options.forEach((opt) => {
    const count = opt.key === "all"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category === opt.key).length;
    if (opt.key !== "all" && count === 0) return; // hide empty categories

    const b = el("button", "filter-btn");
    b.type = "button";
    b.setAttribute("aria-pressed", "false");
    b.append(opt.label);
    b.append(el("span", "count", String(count)));
    b.addEventListener("click", () => select(opt.key, true));
    filterBox.append(b);
    buttons[opt.key] = b;
  });

  /* ---------- project list ---------- */

  function renderProject(p) {
    const li = el("li", "project");
    li.dataset.category = p.category;

    const link = el(p.url ? "a" : "div", "project-media");
    if (p.url) {
      link.href = p.url;
      link.rel = "noopener";
      link.setAttribute("aria-hidden", "true");
      link.tabIndex = -1;
    }
    if (p.image) {
      const img = document.createElement("img");
      img.src = p.image;
      img.alt = p.imageAlt || "";
      img.loading = "lazy";
      link.append(img);
    } else {
      link.classList.add("no-image");
      link.append(el("span", "placeholder", p.outlet));
    }

    const body = el("div", "project-body");
    const meta = el("p", "project-meta");
    meta.append(el("span", "kind", labelFor(p.category)));
    meta.append(el("span", "outlet", p.outlet));
    if (p.date) meta.append(el("span", "date", p.date));

    const h3 = el("h3", "project-title");
    if (p.url) {
      const titleLink = el("a", "", p.title);
      titleLink.href = p.url;
      titleLink.rel = "noopener";
      h3.append(titleLink);
    } else {
      h3.append(p.title);
    }

    body.append(meta, h3);
    if (p.description) body.append(el("p", "project-desc", p.description));
    if (p.role) {
      const role = el("p", "project-role");
      role.append(el("strong", "", "My role: "), p.role);
      body.append(role);
    }
    const extras = el("p", "project-extras");
    if (p.tools) extras.append(el("span", "", p.tools));
    if (p.github) {
      const g = el("a", "", "Code and data");
      g.href = p.github;
      g.rel = "noopener";
      extras.append(g);
    }
    if (extras.childNodes.length) body.append(extras);

    li.append(link, body);
    return li;
  }

  PROJECTS.forEach((p) => list.append(renderProject(p)));

  /* ---------- selection ---------- */

  function select(key, updateHash) {
    if (!buttons[key]) key = "all";
    Object.keys(buttons).forEach((k) => buttons[k].setAttribute("aria-pressed", String(k === key)));

    list.querySelectorAll(".project").forEach((li) => {
      li.hidden = !(key === "all" || li.dataset.category === key);
    });

    const cat = CATEGORIES.find((c) => c.key === key);
    note.textContent = cat ? cat.blurb : "";

    if (updateHash) {
      history.replaceState(null, "", key === "all" ? location.pathname : "#" + key);
    }
  }

  select(location.hash.replace("#", "") || "all", false);
})();
