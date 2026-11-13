const grid = document.getElementById("projectGrid");
const dialog = document.getElementById("projectDialog");
const dlgBody = document.getElementById("dlgBody");

const LABELS = { professional: "Professional", personal: "Personal", school: "School" };

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function thumb(p) {
  if (p.screens && p.screens.length) {
    return `<div class="phones" style="--c:${esc(p.color || "#ccc")}">${p.screens
      .map((s, n) => `<img src="${esc(s)}" alt="${esc(p.title)} screen ${n + 1}" loading="lazy">`)
      .join("")}</div>`;
  }
  return p.image
    ? `<img src="${esc(p.image)}" alt="${esc(p.title)} preview" loading="lazy">`
    : `<div class="placeholder" style="--c:${esc(p.color || "#ccc")}"><span>${esc(p.title.charAt(0))}</span></div>`;
}

function render(filter) {
  const list = PROJECTS.filter((p) => filter === "all" || p.category === filter);
  grid.innerHTML = list
    .map((p) => {
      const i = PROJECTS.indexOf(p);
      return `
      <article class="card">
        <button class="card-btn" data-i="${i}" aria-label="Open ${esc(p.title)}">
          <div class="thumb">${thumb(p)}</div>
          <div class="card-text">
            <p class="meta">${esc(LABELS[p.category] || p.category)} · ${esc(p.year)}</p>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.summary)}</p>
          </div>
        </button>
      </article>`;
    })
    .join("") || `<p class="empty">Nothing here yet.</p>`;
}

function openProject(p) {
  const links = [
    p.links?.live && `<a class="btn" href="${esc(p.links.live)}" target="_blank" rel="noopener">View live</a>`,
    p.links?.code && `<a class="btn ghost" href="${esc(p.links.code)}" target="_blank" rel="noopener">View code</a>`,
  ].filter(Boolean).join("");
  dlgBody.innerHTML = `
    <div class="thumb big">${thumb(p)}</div>
    <p class="meta">${esc(LABELS[p.category] || p.category)} · ${esc(p.year)} · ${esc(p.role)}</p>
    <h2 id="dlgTitle">${esc(p.title)}</h2>
    <p>${esc(p.details)}</p>
    <ul class="tags">${p.tools.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    ${links ? `<div class="hero-actions">${links}</div>` : ""}`;
  dialog.showModal();
}

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".card-btn");
  if (btn) openProject(PROJECTS[btn.dataset.i]);
});
document.getElementById("dlgClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

document.querySelectorAll(".chip").forEach((chip) =>
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    render(chip.dataset.filter);
  })
);

// Dark mode toggle (remembers your choice)
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch {}
document.getElementById("themeToggle").addEventListener("click", () => {
  const dark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch {}
});

document.getElementById("year").textContent = new Date().getFullYear();
render("all");
