import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Street Fighter 6 Battle Hub | Guías, Combos y Meta SEO</title>
        <meta
          name="description"
          content="Portal oficial de estrategias de Street Fighter 6. Domina el sistema Drive, revisa frame data, tier lists y noticias del World Tour."
        />
        <meta name="keywords" content="Street Fighter 6, SF6, Drive Impact, combos, frame data, Next.js SEO" />
        {/* Open Graph / Redes Sociales */}
        <meta property="og:title" content="Street Fighter 6 Battle Hub - Domina las Calles" />
        <meta
          property="og:description"
          content="Entra al Battle Hub de SF6: guías competitivas, análisis de luchadores y optimización web."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="sf6-hero">
        <span className="sf6-badge">CAPCOM PRO TOUR // TEMPORADA ACTUAL</span>
        <h1 className="sf6-title">Bienvenido al Battle Hub de Street Fighter 6</h1>
        <p className="sf6-subtitle">
          Prepárate para el combate definitivo en Metro City. Explora guías técnicas del sistema
          Drive, estrategias de personajes y recursos optimizados con Next.js SEO.
        </p>

        <div className="drive-gauge">
          <div className="drive-bar"></div>
          <div className="drive-bar"></div>
          <div className="drive-bar"></div>
          <div className="drive-bar"></div>
          <div className="drive-bar"></div>
          <div className="drive-bar"></div>
        </div>

        <Link href="/blog" className="sf6-btn">
          Explorar Guías de Combate →
        </Link>
      </section>

      <section className="sf6-card" style={{ textAlign: "center" }}>
        <h3>Banner Oficial Optimizado (next/image WebP)</h3>
        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
          <Image
            src="/images/seo-image.png"
            width={800}
            height={400}
            alt="Street Fighter 6 Arena Battle Hub"
            style={{ maxWidth: "100%", height: "auto", border: "2px solid #00f0ff" }}
            priority
          />
        </div>
      </section>
    </>
  );
}