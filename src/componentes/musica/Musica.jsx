import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import './Musica.css'
import miCancion from "../../assets/music/Until-I-Found-You.mp3";

function Musica() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (!playing) {
        await audio.play(); // ✅ requiere click del usuario
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch (e) {
      console.log("El navegador bloqueó la reproducción:", e);
    }
  };

  return (
    <>
      {/* Botón flotante fijo */}
      <Button
        
        className="music-fab"
        onClick={toggleMusic}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        title={playing ? "Pausar" : "Reproducir"}
      >
        {playing ? "❚❚" : "▶"}
      </Button>

      {/* Audio global */}
      <audio ref={audioRef} loop preload="none">
      <source
  src={miCancion}
  type="audio/mpeg"
/>
      
        </audio>
    </>
  );
}

export default Musica;
