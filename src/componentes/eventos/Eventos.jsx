import "./Eventos.css";

function Evento({ icon, tipo, lugar, hora, direccion, ciudad, mapUrl }) {
  return (
    <div className="evento">
      <div className="evento__icon">{icon}</div>

      <p className="evento__tipo">{tipo}</p>
      <h2 className="evento__lugar">{lugar}</h2>

      <p className="evento__info">{hora}</p>
      <p className="evento__info">{direccion}</p>
      <p className="evento__info">{ciudad}</p>

      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="evento__btn"
      >
        Cómo llegar
      </a>
    </div>
  );
}

function Eventos() {
  return (
    <section className="eventos">
      <Evento
        tipo="Ceromonia"
        lugar="Basílica de María Auxiliadora"
        hora="18:00 hs"
        ciudad="CABA"
        mapUrl="https://www.google.com/maps/place/Bas%C3%ADlica+Mar%C3%ADa+Auxiliadora+y+San+Carlos/@-34.6143288,-58.4254907,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcca5bf5b9469d:0x41ff55ac78658d32!8m2!3d-34.6143332!4d-58.4229158!16s%2Fg%2F12lnj1965?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D"
      />

      <div className="eventos__divider" />

      <Evento
       
        tipo="Evento"
        lugar="Hotel Hilton Buenos Aires"
        hora="20:00 hs"
        mapUrl="https://www.google.com/maps/place/Hotel+Hilton+Buenos+Aires/@-34.605662,-58.3841159,14z/data=!3m2!4b1!5s0x95a3352ee7a49941:0x288c9bfe63bf2c97!4m9!3m8!1s0x95a335ef4809ceef:0x3945c8c351477a54!5m2!4m1!1i2!8m2!3d-34.605699!4d-58.3635592!16s%2Fm%2F064mb0g?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
      />
    </section>
  );
}

export default Eventos;

