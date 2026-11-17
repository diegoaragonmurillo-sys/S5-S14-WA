import Head from "next/head";
import { useState } from "react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <>
      <Head>
        <title>Contacto e Inscripción a Torneos SF6 | Battle Hub</title>
        <meta
          name="description"
          content="Contáctanos para inscribirte en los torneos semanales de Street Fighter 6, retas en el Battle Hub o consultas sobre frame data."
        />
        <meta property="og:title" content="Contacto - Torneos Street Fighter 6" />
        <meta
          property="og:description"
          content="Únete a la comunidad competitiva de Street Fighter 6 y participa en nuestros eventos."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="sf6-hero">
        <span className="sf6-badge">DESAFÍO ABIERTO</span>
        <h1 className="sf6-title">Contacto & Registro de Retadores</h1>
        <p className="sf6-subtitle">
          ¿Listo para demostrar tu nivel en el ring? Envía tu Capcom ID para unirte a los lobbies privados.
        </p>
      </section>

      <form onSubmit={handleSubmit} className="sf6-form">
        <div>
          <label>Capcom ID / Fighter Name:</label>
          <input className="sf6-input" type="text" placeholder="Ej. RyuMaster_PE" required />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input className="sf6-input" type="email" placeholder="retador@battlehub.com" required />
        </div>
        <div>
          <label>Personaje Principal (Main):</label>
          <input className="sf6-input" type="text" placeholder="Ej. Ken, Juri, Akuma..." required />
        </div>
        <button type="submit" className="sf6-btn">
          Enviar Desafío
        </button>
        {enviado && (
          <p style={{ color: "#00ff88", fontWeight: "bold" }}>
            ¡HERE COMES A NEW CHALLENGER! Tu registro fue enviado con éxito.
          </p>
        )}
      </form>
    </>
  );
}