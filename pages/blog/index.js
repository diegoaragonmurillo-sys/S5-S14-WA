import Head from "next/head";
import Link from "next/link";
import { sf6Posts } from "../api/posts";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog y Guías Técnicas SF6 | Estrategias y Frame Data</title>
        <meta
          name="description"
          content="Artículos especializados de Street Fighter 6: guía de Drive Impact, Tier List competitiva y comparativa de controles Clásicos vs Modernos."
        />
        <meta property="og:title" content="Blog y Guías Técnicas - Street Fighter 6" />
        <meta
          property="og:description"
          content="Mejora tu rango en Ranked con nuestras guías detalladas de Street Fighter 6."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>

      <section className="sf6-hero">
        <span className="sf6-badge">ARCHIVOS DEL WORLD TOUR</span>
        <h1 className="sf6-title">Blog & Guías de Estrategia SF6</h1>
        <p className="sf6-subtitle">
          Contenido dinámico cargado desde nuestra API interna e indexado automáticamente en nuestro Sitemap XML.
        </p>
      </section>

      <div className="sf6-grid">
        {posts.map((post) => (
          <article key={post.slug} className="sf6-card">
            <span className="sf6-badge">{post.character}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="sf6-btn">
              Leer Guía Completa
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: sf6Posts,
    },
  };
}