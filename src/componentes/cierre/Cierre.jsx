import "./Cierre.css";
import videoCierre from "../../assets/videocierre.mp4";

function Cierre() {
  return (
    <section className="cierre">
      <video
        className="cierre__video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        src={videoCierre}
      />

      <div className="cierre__overlay">
        <h1 className="cierre__texto">
          ¡Nos vemos en el altar!
        </h1>
        <h2 className="cierre__firma">
          Carla & Nicolas
        </h2>
      </div>
    </section>
  );
}

export default Cierre;
