document.addEventListener("DOMContentLoaded", () => {
  const detailContainer = document.querySelector("#property-detail");
  if (!detailContainer) return;

  const params = new URLSearchParams(window.location.search);
  const propertyId = params.get("id") || "greenwood-estate";
  const property = propertyDatabase.find((entry) => entry.id === propertyId);

  if (!property) {
    detailContainer.innerHTML = `
      <div class="not-found-panel">
        <span class="eyebrow">Properties</span>
        <h1>Property not found.</h1>
        <p>The residence you’re looking for is not available in this collection, but our team can source similar opportunities.</p>
        <div class="form-actions" style="justify-content: flex-start; margin-top: 22px;">
          <a class="button" href="properties.html">View all properties</a>
        </div>
      </div>
    `;
    document.title = "Property not found | Verdant Estates";
    return;
  }

  const detailMarkup = `
    <section class="property-detail-hero">
      <img src="${property.image}" alt="${property.title} residence" />
      <a class="button-secondary property-back-button" href="properties.html">← Back to Properties</a>
      <div class="property-detail-content">
        <span class="eyebrow">${property.featuredLabel || property.status}</span>
        <h1 class="detail-headline">${property.title}</h1>
        <div class="detail-location">${property.location}</div>
        <div class="detail-specs">
          <span>${property.bedrooms} Bedrooms</span>
          <span>${property.bathrooms} Bathrooms</span>
          <span>${property.area}</span>
          <span>${property.yearBuilt}</span>
        </div>
      </div>
    </section>

    <section class="container property-overview">
      <div class="overview-copy" data-reveal>
        <span class="eyebrow">Overview</span>
        <h2>${property.propertyType}</h2>
        <p>${property.description}</p>
        <div class="investment-grid">
          <div class="info-card">
            <h3>Architectural highlights</h3>
            <p>${property.highlights.join(" • ")}</p>
          </div>
          <div class="info-card">
            <h3>Amenities</h3>
            <p>${property.amenities.join(" • ")}</p>
          </div>
        </div>
      </div>
      <aside class="overview-aside" data-reveal>
        <div class="overview-price">${property.price}</div>
        <ul class="overview-list">
          <li><strong>Status:</strong> ${property.status}</li>
          <li><strong>Property Type:</strong> ${property.type}</li>
          <li><strong>Bedrooms:</strong> ${property.bedrooms}</li>
          <li><strong>Bathrooms:</strong> ${property.bathrooms}</li>
          <li><strong>Area:</strong> ${property.area}</li>
          <li><strong>Year Built:</strong> ${property.yearBuilt}</li>
        </ul>
        <div style="margin-top: 20px;">
          <a class="button" href="contact.html?intent=buy">Request a private consultation</a>
        </div>
      </aside>
    </section>

    <section class="container gallery-section" data-reveal>
      <h2>Gallery</h2>
      <div class="gallery-grid">
        ${property.gallery
          .map(
            (image, index) => `
            <figure class="gallery-item ${index === 0 ? "wide" : ""}" data-index="${index}">
              <img src="${image}" alt="${property.title} gallery image ${index + 1}" loading="lazy" />
            </figure>
          `
          )
          .join("")}
      </div>
    </section>

    <section class="container investment-block" data-reveal>
      <h2>Investment Information</h2>
      <div class="investment-grid">
        <div class="info-card">
          <h3>Location</h3>
          <p>${property.location}</p>
        </div>
        <div class="info-card">
          <h3>Investment Profile</h3>
          <p>${property.investment}</p>
        </div>
      </div>
    </section>

    <section class="container" data-reveal>
      <div class="section-head">
        <h2>Related Properties</h2>
      </div>
      <div class="related-grid">
        ${propertyDatabase
          .filter((item) => item.id !== property.id)
          .slice(0, 3)
          .map(
            (related) => `
            <article class="property-card">
              <div class="property-media image-mask">
                <img src="${related.image}" alt="${related.title}" loading="lazy" />
                <span class="property-badge">${related.status}</span>
              </div>
              <div class="property-body">
                <div class="property-topline"><span>${related.type}</span><span>${related.status}</span></div>
                <h3 class="property-name">${related.title}</h3>
                <div class="property-location">${related.location}</div>
                <div class="property-price">${related.price}</div>
                <div class="property-actions">
                  <a class="button" href="property.html?id=${related.id}">View Property</a>
                </div>
              </div>
            </article>
          `
          )
          .join("")}
      </div>
    </section>
  `;

  detailContainer.innerHTML = detailMarkup;

  const title = `${property.title} | Verdant Estates`;
  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", `${property.title} in ${property.location}. Luxury residential opportunity curated by Verdant Estates.`);

  const lightbox = document.createElement("div");
  lightbox.className = "gallery-lightbox";
  lightbox.innerHTML = `
    <div class="gallery-lightbox-inner">
      <button class="gallery-close" aria-label="Close gallery">×</button>
      <button class="gallery-nav prev" aria-label="Previous image">←</button>
      <img src="${property.gallery[0]}" alt="${property.title} gallery view" />
      <button class="gallery-nav next" aria-label="Next image">→</button>
    </div>
  `;
  document.body.appendChild(lightbox);

  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightboxImg = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector(".gallery-close");
  const prevButton = lightbox.querySelector(".gallery-nav.prev");
  const nextButton = lightbox.querySelector(".gallery-nav.next");
  let activeIndex = 0;

  const openGallery = (index) => {
    activeIndex = index;
    lightboxImg.src = property.gallery[index];
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => openGallery(Number(item.dataset.index)));
  });

  closeButton.addEventListener("click", closeGallery);
  prevButton.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + property.gallery.length) % property.gallery.length;
    lightboxImg.src = property.gallery[activeIndex];
  });
  nextButton.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % property.gallery.length;
    lightboxImg.src = property.gallery[activeIndex];
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeGallery();
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeGallery();
    if (event.key === "ArrowRight") nextButton.click();
    if (event.key === "ArrowLeft") prevButton.click();
  });
});
