import React, { useState } from 'react';
import  './Country.css';
import { Link, useNavigate } from 'react-router-dom';
import { ADD_TO_FAVORITE, CALCULATE_FAVORITE_QUANTITY } from '../../redux/favoriteSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Country = React.memo(({ country }) => {
 
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/countries/${country.name.common}`, {
      state: {
        flag: country.flags.png,
        story: country.flags.alt,
        language: Object.values(country.languages).join(', '),
        capital: country.capital,
        neighbors: country.borders,
      },
    });
  };

 
  //  check if country is in favorite
  // const isFavorite = () => {
  //   const favCountries = JSON.parse(localStorage.getItem('favCountries'));
  //   return favCountries !==null && favCountries.some((favCountry) => favCountry.name.common === country.name.common);
  // };
  
  

  const addToFavorite = (country) => {
 

    dispatch(ADD_TO_FAVORITE(country));
    dispatch(CALCULATE_FAVORITE_QUANTITY());
  
   
   
  };
 

  return (
    <div className="country --card" onClick={handleClick}>
      <div className="country-container">
        <img src={country.flags.png} alt={country.name.common} className="country-flag" />
        <div className="country-info --p">
          <h3>{country.name.common}</h3>
          <p>
            <strong>Population:</strong> {country.population}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
          {country.languages && (
            <p>
              <strong>Languages:</strong> {Object.values(country.languages).join(', ')}
            </p>
          )}
        </div>
        <button className="--btn --btn-danger --btn-block " onClick={() => addToFavorite(country)}>
              Add to favorite
            </button>
       
        {/* <>
          {countryIsFavorite ? (
            <button className="--btn --btn-danger --btn-block disabled " disabled>
              Add to favorite
            </button>
          ) : (
            <button className="--btn --btn-danger --btn-block " onClick={() => addToFavorite(country)}>
              Add to favorite
            </button>
          )}
        </> */}
      </div>
    </div>
  );
});

export default Country;
