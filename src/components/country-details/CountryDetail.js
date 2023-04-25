import { useParams, Link, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CountryDetail.module.css';

function CountryDetail() {
  const [weather, setWeather] = useState({
   
    temp: 0,
    pressure: "",
    humidity: "",
    description: "",
    icon: "",
    wind: "",
    visibility: "",
  });

    const { name } = useParams();
    const { state } = useLocation();
   

 useEffect(()=>{
  const fetchData = async () => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state.capital}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
    setWeather({
      temp: res.data.main.temp,
      pressure: res.data.main.pressure,
      humidity: res.data.main.humidity,
      description: res.data.weather[0].description,
      icon: res.data.weather[0].icon,
      wind: res.data.wind.speed,
      visibility: res.data.visibility,
    });
    //console.log(res.data);
  };
  
  fetchData();
  
  const timeoutId = setTimeout(() => {
    fetchData();
  }, 1000); // add a 1-second delay between API calls
  
  return () => clearTimeout(timeoutId);
},[]);
     


  // Fetch the country data using the name parameter
  if (!state) {
    // handle case where state is undefined
    return (
      <div className='container --flex-center --dir-column  --my2 '>
        <p>Error: No country data found</p>
        {/* <Link className='btn --btn-primary --px2 --p2' to="/"><BiArrowBack />Back to Countries</Link> */}
      </div>
    )
  }

  return (
    <div className={styles.details}>
    <div>
    <div>
        <img src={state.flag} alt={name} className={styles.flag} />

    </div>
       <div className='country-info --p'>
       <p>{state.story}</p>
       <h2>{name}</h2>
      <p><strong>Language:</strong> {state.language}</p>
      <p><strong>Capital:</strong> {state.capital}</p>
      {state.neighbors && <p><strong>Neighbours:</strong> {state.neighbors.join(", ")}</p>}
      </div>
     

    </div>
    <div className={styles.weather}>
        <h2>Weather in {state.capital}/{name}</h2>
        <div className={styles.weather__info}>
          <div className={styles.weather__info__temp}>
            <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather icon" />
            <p>{weather.temp}°C</p>

        </div>
        <Link to="/">
        <button className='--btn --btn-primary --px2 --p2'>
        <BiArrowBack />
        Back to Countries

      </button>

        </Link>
        
       
      </div>

    </div>
    </div>
  );
}

export default CountryDetail;