const navbarCollapsed = document.querySelector(".collapsed-navbar");
const navbarLinks = document.querySelector(".nav-links");

navbarCollapsed.addEventListener("click", () => {
  navbarLinks.classList.toggle("nav-links-active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) navbarLinks.classList.remove("nav-links-active");
});
