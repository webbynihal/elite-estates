document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        nav.classList.add("is-scrolled");
      } else {
        nav.classList.remove("is-scrolled");
      }
    });
  }

  if (menuToggle && mobileMenu) {
    const setMenuState = (open) => {
      mobileMenu.classList.toggle("is-open", open);
      menuToggle.classList.toggle("is-active", open);
      document.body.classList.toggle("menu-open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.classList.contains("is-active");
      setMenuState(!isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuState(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) {
        setMenuState(false);
      }
    });
  }
});
