import Head from "next/head";
import Link from "next/link";
import { sf6Posts } from "../api/posts";

export default function PostDetail({ post }) {
  if (!post) return <p>Artículo no encontrado</p>;

  return (
    <>
      <Head>
        <title>{`${post.title} | SF6 Battle Hub`}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>

      <article className="sf6-hero">
        <span className="sf6-badge">PERSONAJES: {post.character} | {post.date}</span>
        <h1 className="sf6-title">{post.title}</h1>
        <p className="sf6-subtitle" style={{ marginBottom: "2rem" }}>
          {post.excerpt}
        </p>
        <Link href="/blog" className="sf6-btn">
          ← Volver a las Guías
        </Link>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = sf6Posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = sf6Posts.find((p) => p.slug === params.slug);
  return { props: { post } };
}