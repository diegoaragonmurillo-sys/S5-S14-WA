export default async function handler(req, res) {
  // Detecta automáticamente si estás en localhost o en tu dominio real de Vercel
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;
  const BASE_URL = `${protocol}://${host}`;

  // 1. Rutas estáticas principales
  const staticPages = ["/", "/blog", "/contacto"];

  // 2. Consumimos nuestra API (simulando CMS/Base de Datos) para obtener rutas dinámicas
  const response = await fetch(`${BASE_URL}/api/posts`);
  const posts = await response.json();

  const dynamicPages = posts.map((post) => `/blog/${post.slug}`);

  // 3. Combinamos todas las rutas
  const allUrls = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
      .map(
        (url) => `
      <url>
        <loc>${BASE_URL}${url}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${url === "/" ? "1.0" : "0.8"}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}