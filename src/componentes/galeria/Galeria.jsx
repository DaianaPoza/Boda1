import { useEffect, useMemo, useState } from 'react';
import './Galeria.css';
import foto1 from '../../assets/carrusel1.jpeg';
import foto2 from '../../assets/carrusel2.jpeg';


const images = [
  {
    src: foto1,
    alt: 'Foto de la pareja',
  },
  {
    src: foto2,
    alt: 'Detalle romántico de la pareja',
  },
];

function Galeria() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(100);
  const maxIndex = images.length - 1;

  const updateSlideWidth = () => {
    setSlideWidth(window.innerWidth >= 1100 ? 60 : 100);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current === maxIndex ? 0 : current + 1));
  };

  const previousSlide = () => {
    setActiveIndex((current) => (current === 0 ? maxIndex : current - 1));
  };

  useEffect(() => {
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4200);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const trackStyle = useMemo(
    () => ({ transform: `translateX(-${activeIndex * slideWidth}%)` }),
    [activeIndex, slideWidth]
  );

  return (
    <section className='galeria-seccion'>
      <div className='galeria-header'>
        
        <div className='galeria-controls'>
          <button type='button' onClick={previousSlide} aria-label='Mostrar imagen anterior'>←</button>
          <button type='button' onClick={nextSlide} aria-label='Mostrar imagen siguiente'>→</button>
        </div>
      </div>

      <div className='galeria-slider'>
        <div className='galeria-track' style={trackStyle}>
          {images.map((image, index) => (
            <article className='galeria-card' key={index}>
              <img src={image.src} alt={image.alt} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galeria;
