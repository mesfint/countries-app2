import React from 'react'
import styles from "./Home.module.css"
import Slider from './slider/Slider'
import CountriesList from './countries-list/CountriesList'

const Home = () => {
    return (
  
    <div className='--center-all'>

    <Slider />
    <CountriesList />

    </div>

  )
}

export default Home