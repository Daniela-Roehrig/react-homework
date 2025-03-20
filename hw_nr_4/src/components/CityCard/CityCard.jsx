import './CityCard.css';
import CitySelector from '../CitySelector/CitySelector'; 
const CityCard = ({ city }) => {
  if (!city) {
    return (
      <div className="cityCard">
        <p>Please choose a city!.</p>
      </div>
    );
  }

  return (
    <div className="cityCard">
      <h2>{city.name}</h2>
      <img className="cardPicture" src={city.imageUrl} alt={city.name} />
      <p className="cardPara">{city.description}</p>
      <ul className="cardUl">
        {city.facts && city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityCard;
