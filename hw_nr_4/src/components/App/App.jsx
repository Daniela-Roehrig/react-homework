
import { useState } from 'react';
import CitiesData from '../CitiesData/CitiesData';
import CityCard from '../CityCard/CityCard';
import MathQuiz from '../MathQuiz/MathQuiz';
import './App.css';


function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (cityName) => {
    const city = CitiesData.find((city) => city.name === cityName);
    setSelectedCity(city);
  };

  return (
    <>
      <h1 className="cityHeader">City Card</h1>
      <div className="App">
        <CityCard city={selectedCity} cities={CitiesData} onCitySelect={handleCitySelect} />
      </div>
      <div className='math-app'>
        <MathQuiz />
      </div>
    </>
  );
}

export default App;



