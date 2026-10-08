document.addEventListener("DOMContentLoaded", () => {
  const propertyGrid = document.querySelector("#properties-grid") || document.querySelector("#property-grid") || document.querySelector(".properties-grid");
  const filterForm = document.querySelector("#property-filters");
  const resultsCount = document.querySelector("#results-count");

  if (!propertyGrid || !filterForm) {
    console.error("Properties page container or filter form not found.");
    return;
  }

  const getSelectedValue = (selector) => document.querySelector(selector)?.value || "all";

  function renderPropertyCard(property) {
    return `
      <article class="property-card" data-reveal>
        <div class="property-media image-mask">
          <img src="${property.image}" alt="${property.title} property exterior" loading="lazy" />
          <span class="property-badge">${property.status}</span>
        </div>
        <div class="property-body">
          <div class="property-topline">
            <span>${property.type}</span>
            <span>${property.featuredLabel || property.status}</span>
          </div>
          <h3 class="property-name">${property.title}</h3>
          <div class="property-location">${property.location}</div>
          <div class="property-price">${property.price}</div>
          <div class="property-details">
            <span>${property.bedrooms} Beds</span>
            <span>${property.bathrooms} Baths</span>
            <span>${property.area}</span>
          </div>
          <p class="property-description">${property.shortDescription}</p>
          <div class="property-actions">
            <a class="button" href="property.html?id=${property.id}">View Property</a>
            <a class="button-ghost" href="contact.html?intent=buy">Enquire</a>
          </div>
        </div>
      </article>
    `;
  }

  function filterProperties() {
    const selectedLocation = getSelectedValue("#location-filter");
    const selectedType = getSelectedValue("#type-filter");
    const selectedPrice = getSelectedValue("#price-filter");
    const selectedBedrooms = getSelectedValue("#bedroom-filter");
    const selectedStatus = getSelectedValue("#status-filter");

    const filtered = propertyDatabase.filter((property) => {
      const matchesLocation = selectedLocation === "all" || property.country === selectedLocation || property.city === selectedLocation;
      const matchesType = selectedType === "all" || property.type === selectedType || property.propertyType === selectedType;

      let matchesPrice = true;
      if (selectedPrice !== "all") {
        if (selectedPrice === "under-1m") matchesPrice = property.priceValue < 1000000;
        if (selectedPrice === "1m-3m") matchesPrice = property.priceValue >= 1000000 && property.priceValue <= 3000000;
        if (selectedPrice === "3m-5m") matchesPrice = property.priceValue > 3000000 && property.priceValue <= 5000000;
        if (selectedPrice === "5m-plus") matchesPrice = property.priceValue > 5000000;
      }

      let matchesBedrooms = true;
      if (selectedBedrooms !== "any") {
        const minBedrooms = Number(selectedBedrooms.replace("+", ""));
        matchesBedrooms = property.bedrooms >= minBedrooms;
      }

      const matchesStatus = selectedStatus === "all" || property.status === selectedStatus || property.featuredLabel === selectedStatus;

      return matchesLocation && matchesType && matchesPrice && matchesBedrooms && matchesStatus;
    });

    propertyGrid.innerHTML = filtered.map(renderPropertyCard).join("");
    resultsCount.textContent = `${filtered.length} properties found`;
  }

  [
    "#location-filter",
    "#type-filter",
    "#price-filter",
    "#bedroom-filter",
    "#status-filter"
  ].forEach((selector) => {
    const element = document.querySelector(selector);
    element?.addEventListener("change", filterProperties);
  });

  propertyGrid.innerHTML = propertyDatabase.map(renderPropertyCard).join("");
  resultsCount.textContent = `${propertyDatabase.length} properties found`;
});
