import { useState } from 'react';
import citiesData from '../CitySelector/citiesData'; 
import CityCard from '../CityCard/CityCard';
import CitySelector from '../CitySelector/CitySelector';
import MathQuiz from '../MathQuiz/MathQuiz';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (cityName) => {
    const city = citiesData.find((city) => city.name === cityName);
    setSelectedCity(city);
  };

  return (
    <>
      <h1 className="cityHeader">City Card</h1>
      <div className="App">
        <CitySelector onCitySelect={handleCitySelect} />
        <CityCard city={selectedCity} />
      </div>
      <div className="mathApp">
        <MathQuiz />
      </div>
    </>
  );
}

export default App;
