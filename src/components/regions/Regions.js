import React from 'react'
import "./Regions.css"
import { selectCountries,SEARCH_BY_REGION } from '../../redux/countrySlice';
import { useSelector,useDispatch } from 'react-redux';


const Regions = () => {

  const dispatch = useDispatch();

const countries = useSelector(selectCountries);
const allRegions = ['All', ...new Set(countries.map((country) => country.region))];

  const onFilterRegion = (region) => {
    if (region === 'All') {
      dispatch(SEARCH_BY_REGION(countries));
    
    } else {
      dispatch(SEARCH_BY_REGION(countries.filter((country) =>country.region === region)));
          }
        };

  return (
    <div className="--flex-center buttons">
        {allRegions.map((region,index)=>(
            <button onClick={()=>onFilterRegion(region)} key={index} type="button" className='--btn --btn-foreground'>{region}</button>
        ))}
    </div>
  )
}

export default Regions