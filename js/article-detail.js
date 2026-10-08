document.addEventListener("DOMContentLoaded", () => {
  const articleContainer = document.querySelector("#article-detail");
  if (!articleContainer) return;

  const params = new URLSearchParams(window.location.search);
  const articleId = params.get("id") || "architecture-and-value";
  const article = articleDatabase.find((entry) => entry.id === articleId);

  if (!article) {
    articleContainer.innerHTML = `
      <div class="not-found-panel">
        <span class="eyebrow">Journal</span>
        <h1>Article not found.</h1>
        <p>The story you requested is no longer available, but our journal still contains a wider collection of luxury property insights.</p>
        <div class="form-actions" style="justify-content: flex-start; margin-top: 22px;">
          <a class="button" href="journal.html">Browse journal</a>
        </div>
      </div>
    `;
    document.title = "Article not found | Verdant Estates";
    return;
  }

  const articleIndex = articleDatabase.findIndex((entry) => entry.id === article.id);
  const previousArticle = articleDatabase[(articleIndex - 1 + articleDatabase.length) % articleDatabase.length];
  const nextArticle = articleDatabase[(articleIndex + 1) % articleDatabase.length];

  articleContainer.innerHTML = `
    <div class="reading-progress" aria-hidden="true"></div>
    <section class="article-hero">
      <img src="${article.image}" alt="${article.title}" />
    </section>

    <div class="article-content-wrap">
      <article class="article-card-feature" data-reveal>
        <div class="article-kicker">${article.category}</div>
        <h1 class="article-title-large">${article.title}</h1>
        <div class="article-meta-row">
          <span>By ${article.author}</span>
          <span>${article.date}</span>
          <span>${article.readTime}</span>
        </div>
        <div class="article-text">
          ${article.content
            .map(
              (para, index) => {
                if (index === 1) return `<h3>Why detail matters</h3>${para}`;
                return `<p>${para}</p>`;
              }
            )
            .join("")}
          <blockquote class="pull-quote">${article.pullQuote}</blockquote>
          <p>${article.content[0]}</p>
        </div>
      </article>

      <div class="section-head" style="margin-top: 64px;">
        <h2>Related Journal</h2>
      </div>
      <div class="related-grid">
        ${articleDatabase
          .filter((entry) => entry.id !== article.id)
          .slice(0, 3)
          .map(
            (entry) => `
              <article class="article-card">
                <div class="article-image image-mask">
                  <img src="${entry.image}" alt="${entry.title}" loading="lazy" />
                </div>
                <div class="article-body">
                  <div class="article-meta"><span>${entry.category}</span><span>${entry.readTime}</span></div>
                  <h3>${entry.title}</h3>
                  <p>${entry.excerpt}</p>
                  <a class="ghost-link" href="article.html?id=${entry.id}">Read article</a>
                </div>
              </article>
            `
          )
          .join("")}
      </div>

      <div class="form-actions" style="margin-top: 40px; justify-content: space-between;">
        <a class="button-ghost" href="journal.html">Back to journal</a>
        <div class="form-nav">
          <a class="button-ghost" href="article.html?id=${previousArticle.id}">Previous</a>
          <a class="button" href="article.html?id=${nextArticle.id}">Next</a>
        </div>
      </div>
    </div>
  `;

  document.title = `${article.title} | Verdant Estates Journal`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", article.excerpt);
});
