// Builds the timeline from ERAS (projects.js) and wires up the filter buttons.

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function link(href, text, className) {
  const a = el("a", className, text);
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener";
  return a;
}

function featuredCard(project) {
  const card = el("article", "card");
  const head = el("div", "card-head");
  head.append(el("h4", null, project.name));
  if (project.team) head.append(el("span", "badge", "Team"));
  card.append(head, el("p", null, project.description));

  const tech = el("ul", "tech");
  project.tech.forEach((t) => tech.append(el("li", null, t)));
  card.append(tech);

  const links = el("div", "card-links");
  if (project.live) links.append(link(project.live, "Live demo", "button primary small"));
  if (project.repo) links.append(link(project.repo, "Code", "button small"));
  if (project.privateNote) links.append(el("span", "private", project.privateNote));
  if (project.liveNote) links.append(el("span", "live-note", project.liveNote));
  card.append(links);
  return card;
}

function chip(project) {
  const li = el("li");
  li.append(project.repo ? link(project.repo, project.name, "chip") : el("span", "chip", project.name));
  return li;
}

function render() {
  const list = document.getElementById("eras");
  ERAS.forEach((era) => {
    const item = el("li", "era");
    item.append(el("p", "when", era.when));
    const body = el("div", "era-body");
    body.append(el("h3", null, era.title), el("p", "summary", era.summary));

    const featured = era.projects.filter((p) => p.featured);
    const exercises = era.projects.filter((p) => !p.featured);
    if (featured.length) {
      const cards = el("div", "cards");
      featured.forEach((p) => cards.append(featuredCard(p)));
      body.append(cards);
    } else {
      item.classList.add("only-exercises");
    }
    if (exercises.length) {
      const chips = el("ul", "chips");
      chips.setAttribute("aria-label", "Labs and exercises");
      exercises.forEach((p) => chips.append(chip(p)));
      body.append(chips);
    }
    item.append(body);
    list.append(item);
  });

  const all = ERAS.flatMap((e) => e.projects);
  const stats = [
    [all.length, "projects"],
    [all.filter((p) => p.featured).length, "featured builds"],
    [new Date().getFullYear() - 2023, "years coding"],
  ];
  const dl = document.getElementById("stats");
  stats.forEach(([value, label]) => {
    const div = el("div");
    div.append(el("dt", null, label), el("dd", null, String(value)));
    dl.append(div);
  });
}

function setupFilter() {
  const buttons = document.querySelectorAll("[data-filter]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
      document.body.classList.toggle("featured-only", button.dataset.filter === "featured");
    });
  });
}

render();
setupFilter();
