// Simulación de datos provenientes de un CMS / Base de Datos de Street Fighter 6
export const sf6Posts = [
  {
    slug: "guia-drive-impact-street-fighter-6",
    title: "Guía Maestra del Drive Impact y Drive Parry en SF6",
    excerpt: "Domina el sistema Drive Gauge, aprende a contraatacar el Drive Impact en esquina y gestiona tu barra sin caer en Burnout.",
    character: "Luke / Ryu",
    date: "2026-11-15",
  },
  {
    slug: "tier-list-temporada-street-fighter-6",
    title: "Tier List Competitiva SF6: Los Mejores Luchadores del Torneo",
    excerpt: "Análisis frame-data de los personajes más dominantes en el circuito competitivo actual: Ken, Akuma, Cammy y Juri.",
    character: "Akuma / Ken",
    date: "2026-11-16",
  },
  {
    slug: "controles-clasicos-vs-modernos-sf6",
    title: "Controles Clásicos vs Modernos: ¿Cuál Elegir en Ranked?",
    excerpt: "Comparativa técnica de daño, velocidad de reacción en antiaéreos y acceso a combos óptimos en ambos esquemas.",
    character: "Marisa / Chun-Li",
    date: "2026-11-17",
  },
];

export default function handler(req, res) {
  res.status(200).json(sf6Posts);
}