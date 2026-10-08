document.addEventListener("DOMContentLoaded", () => {
  const articleGrid = document.querySelector("#journal-grid");
  if (!articleGrid) return;

  articleGrid.innerHTML = articleDatabase
    .map(
      (article) => `
        <article class="article-card" data-reveal>
          <div class="article-image image-mask">
            <img src="${article.image}" alt="${article.title}" loading="lazy" />
          </div>
          <div class="article-body">
            <div class="article-meta">
              <span>${article.category}</span>
              <span>${article.readTime}</span>
            </div>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <a class="ghost-link" href="article.html?id=${article.id}">Read article</a>
          </div>
        </article>
      `
    )
    .join("");
});
