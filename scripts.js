const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function downloadCV() {
  const link = document.createElement("a");
  link.href = "CV Hapid Triansyah_IT.pdf";
  link.download = "CV Hapid Triansyah_IT.pdf";
  link.click();
}
