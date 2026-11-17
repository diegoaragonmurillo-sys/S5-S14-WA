import "../styles/globals.css";
import Link from "next/link";
import { Chakra_Petch } from "next/font/google";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={chakra.className}>
      <nav className="sf6-nav">
        <span className="sf6-logo">SF6 // BATTLE HUB SEO</span>
        <div className="sf6-links">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog & Guías</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      </nav>
      <main className="sf6-container">
        <Component {...pageProps} />
      </main>
    </div>
  );
}