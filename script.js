

function setActiveNav() {
  const path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
}

function wireQuickExit() {
  const btn = document.getElementById("quickExit");
  if (!btn) return;
  btn.addEventListener("click", () => {
    
    window.location.href = "https://weather.com/";
  });
}

function wireMythFactToggles() {
  document.querySelectorAll("[data-toggle='reveal']").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const target = document.getElementById(targetId);
      if (!target) return;

      const isHidden = target.getAttribute("data-hidden") === "true";
      target.style.display = isHidden ? "block" : "none";
      target.setAttribute("data-hidden", isHidden ? "false" : "true");
      btn.textContent = isHidden ? "Hide answer" : "Reveal answer";
    });
  });
}

function wireChecklist() {
  const box = document.getElementById("checklist");
  const out = document.getElementById("checkedCount");
  if (!box || !out) return;

  const update = () => {
    const checked = box.querySelectorAll("input[type='checkbox']:checked").length;
    const total = box.querySelectorAll("input[type='checkbox']").length;
    out.textContent = `${checked}/${total} steps selected`;
  };

  box.addEventListener("change", update);
  update();
}

function wireContactForm() {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");
  if (!form || !msg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (document.getElementById("name")?.value || "").trim();
    const topic = (document.getElementById("topic")?.value || "").trim();

    msg.style.display = "block";
    msg.innerHTML = `<strong>Message received.</strong> Thank you, ${name || "friend"} — we’ll respond about <em>${topic || "your message"}</em> as soon as possible.`;

    
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  wireQuickExit();
  wireMythFactToggles();
  wireChecklist();
  wireContactForm();

  
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
