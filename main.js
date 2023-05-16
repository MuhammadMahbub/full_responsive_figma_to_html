const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      nav.classList.add("scrolled");
      mobileNav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
      mobileNav.classList.remove("scrolled");
    }
  });