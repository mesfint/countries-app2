import React from 'react'
import "./Search.css"


const Search = ({searchTerm, onFilter}) => {
  return (
    <div className='--form-control'>
    <form className='--form-control'>
        <input 
         type="text" 
        
         value={searchTerm}
         onChange={onFilter}
         placeholder="Search  a country ..." />

    </form>
    </div>
  )
}

export default Search