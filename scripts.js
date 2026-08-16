// ==================== HAMBURGER MENU ====================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Tutup menu saat salah satu link diklik (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==================== ACTIVE NAV ON SCROLL ====================
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function setActiveNav() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navItems.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveNav);

// ==================== DOWNLOAD CV ====================
function downloadCV() {
  const link = document.createElement("a");
  link.href = "CV Hapid Triansyah_IT.pdf";
  link.download = "CV Hapid Triansyah_IT.pdf";
  link.click();
}

// ==================== CONTACT FORM ====================
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector("button[type='submit']");
  btn.innerHTML = '<i class="fas fa-check"></i> Pesan Terkirim!';
  btn.style.background = "#22c55e";
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = 'Kirim Pesan <i class="fas fa-paper-plane"></i>';
    btn.style.background = "";
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}

// ==================== SCROLL REVEAL ANIMATION ====================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".skill-category, .project-card, .timeline-item, .contact-item").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
