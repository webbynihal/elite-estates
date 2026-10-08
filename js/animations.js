document.addEventListener("DOMContentLoaded", () => {
  const bindImageMaskHover = (element) => {
    if (!element || element.dataset.maskBound === "true") return;

    element.addEventListener("mouseenter", () => {
      element.classList.add("is-hovered");
    });

    element.addEventListener("mouseleave", () => {
      element.classList.remove("is-hovered");
    });

    element.dataset.maskBound = "true";
  };

  const observeRevealItems = () => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      revealItems.forEach((item) => {
        if (!item.dataset.revealBound) {
          observer.observe(item);
          item.dataset.revealBound = "true";
        }
      });

      return observer;
    }

    revealItems.forEach((item) => item.classList.add("is-visible"));
    return null;
  };

  const observer = observeRevealItems();
  document.querySelectorAll(".image-mask").forEach(bindImageMaskHover);

  const bindDynamicContent = () => {
    document.querySelectorAll(".image-mask").forEach(bindImageMaskHover);

    document.querySelectorAll("[data-reveal]").forEach((item) => {
      if (item.classList.contains("is-visible")) return;
      if (observer) {
        if (!item.dataset.revealBound) {
          observer.observe(item);
          item.dataset.revealBound = "true";
        }
      } else {
        item.classList.add("is-visible");
      }
    });
  };

  const mutationObserver = new MutationObserver(() => {
    bindDynamicContent();
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  const scrollProgress = document.querySelector(".reading-progress");
  if (scrollProgress) {
    const updateProgress = () => {
      const doc = document.documentElement;
      const scrollTop = window.pageYOffset || doc.scrollTop;
      const height = doc.scrollHeight - window.innerHeight;
      const percent = height > 0 ? (scrollTop / height) * 100 : 0;
      scrollProgress.style.transform = `scaleX(${Math.min(Math.max(percent / 100, 0), 1)})`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
  }
});
