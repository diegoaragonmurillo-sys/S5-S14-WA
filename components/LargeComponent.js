export default function LargeComponent() {
  return (
    <div style={{ padding: "20px", border: "2px solid #0070f3", marginTop: "20px" }}>
      <h2>Componente Pesado Cargado con Lazy Loading</h2>
      <p>Este componente se cargó dinámicamente usando next/dynamic (ssr: false).</p>
    </div>
  );
}