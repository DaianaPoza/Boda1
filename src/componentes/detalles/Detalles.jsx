import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Detalles.css";

function Detalles() {
  const [copiado, setCopiado] = useState(false);

  const copiarAlias = async () => {
    try {
      await navigator.clipboard.writeText("carlaynico");
      setCopiado(true);

      setTimeout(() => {
        setCopiado(false);
      }, 2000);
    } catch (error) {
      console.log("No se pudo copiar el alias", error);
    }
  };

  return (
    <section className="detalles">
      <h1 className="detalles__title">Acá te contamos todos los detalles…</h1>

      <Accordion className="detalles__acc" flush alwaysOpen={false}>
        <Accordion.Item eventKey="0" className="detalles__item">
          <Accordion.Header>Dress Code</Accordion.Header>
          <Accordion.Body>
            Elegante sport
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="detalles__item">
          <Accordion.Header>Regalo</Accordion.Header>
          <Accordion.Body>
            <p>
              Tu presencia es lo más importante. Si deseás regalarnos algo,
              podés hacerlo por alias:
            </p>

            <p className="alias-text">
              <b>ALIAS: carlaynico</b>
            </p>

            <button
              type="button"
              className="alias-boton"
              onClick={copiarAlias}
            >
              {copiado ? "Alias copiado ✓" : "Copiar alias"}
            </button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className="detalles__item">
          <Accordion.Header>Niños</Accordion.Header>
          <Accordion.Body>
            Celebramos en familia, ¡los más pequeños también son bienvenidos!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default Detalles;
