
import './App.css'
import Cardheader from "./componentes/cardheader/Cardheader";
import Musica from "./componentes/musica/Musica";
import Regresiva from "./componentes/regresiva/Regresiva";
import Presentacion from "./componentes/presentacion/Presentacion";
import Galeria from "./componentes/galeria/Galeria";
import Eventos from "./componentes/eventos/Eventos";
import Detalles from "./componentes/detalles/Detalles";
import Rsvp from "./componentes/rsvp/Rsvp";
import Cierre from "./componentes/cierre/Cierre";
import RevealOnScroll from "./componentes/reveal/RevealOnScroll";

function App() {
  return (
<div>

<RevealOnScroll> 
         <Musica />
        <Cardheader />
        </RevealOnScroll>


<div className="secciones">
        <RevealOnScroll>  
        <Regresiva />
</RevealOnScroll>



<RevealOnScroll delay={100}>
        <Presentacion />
      </RevealOnScroll>
</div>

      <RevealOnScroll delay={120}>
        <Galeria />
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
        <Eventos />
      </RevealOnScroll>


      <RevealOnScroll delay={100}>
        <Detalles />
      </RevealOnScroll>


      <RevealOnScroll delay={100}>
        <Rsvp />
      </RevealOnScroll>


      <RevealOnScroll delay={100}>
        <Cierre />
      </RevealOnScroll>


        </div>
);
}
export default App;