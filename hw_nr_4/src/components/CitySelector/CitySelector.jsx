import './CitySelector.css';
import citiesData from './citiesData'; 

const CitySelector = ({ onCitySelect }) => {
  return (
    <div className='selectorBox'>
      <h2 className='selectHeader'>Choose a city:</h2>
      <select className='selectCity' onChange={(e) => onCitySelect(e.target.value)} defaultValue="">
        <option value="" disabled>City</option>
        {citiesData.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
