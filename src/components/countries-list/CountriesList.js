import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, selectCountries, selectFilteredCountries, SEARCH_BY_NAME } from '../../redux/countrySlice';
import "./CountriesList.css";
import Country from '../country/Country';
import Regions from '../regions/Regions';
import Search from '../search/Search';
import CountryPagination from '../pagination/CountryPagination';

const CountriesList = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const filteredCountries = useSelector(selectFilteredCountries);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterCountries = () => {
    dispatch(SEARCH_BY_NAME({ countries, searchTerm }));
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    if (countries) {
      filterCountries();
    }
  }, [searchTerm, countries, dispatch]);

  const startIndex = (currentPage - 1) * 9;
  const endIndex = startIndex + 9;
  const currentCountries = filteredCountries.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className='container'>
      <section>
        <div className="--flex-between --py">
          <Search searchTerm={searchTerm} onFilter={handleSearch} />
          <Regions   />
        </div>
        <div className="countries-container container --grid-25 --py2">

          {currentCountries.length === 0 ? (
            <h3 className="--flex-center">No Country Found!!!</h3>
          ) : (

            currentCountries.map((country,index) => (
              <div className="countries" key={index}>
                <Country country={country} />
              </div>
            ))
          )}

        </div>
      </section>
          <CountryPagination
            count={filteredCountries.length}
            page={currentPage}
            onChange={handlePageChange}
          />
    </div>
  );
};

export default CountriesList;
