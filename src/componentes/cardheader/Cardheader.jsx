import './Cardheader.css';
import Card from 'react-bootstrap/Card';
import header3 from '../../assets/header3.png';

function Cardheader() {
  return (
    <Card className="card-header-custom">
      <div className="card-header-img-wrapper">
        <Card.Img
          variant="top"
          src={header3}
          alt="Imagen del header"
          className="card-header-img"
        />

        <div className="card-header-overlay">
          <h1 className="cardtext">Carla & Nicolas</h1>
          <h2 className="cardtext">02 · 02 · 2027</h2>
        </div>
      </div>
    </Card>
  );
}

export default Cardheader;
