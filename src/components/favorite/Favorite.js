import React from 'react'
import styles from "./Favorite.module.scss"
import { CALCULATE_FAVORITE_QUANTITY, CLEAR_ALL_FAVORITE, REMOVE_FROM_FAVORITE } from '../../redux/favoriteSlice'
import { useSelector, useDispatch } from 'react-redux'
import { selectFavoritesCountries } from '../../redux/favoriteSlice'
import { FaTrashAlt } from "react-icons/fa"
import { Link,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';



const Favorite = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const favCountries = useSelector(selectFavoritesCountries)

  const handleClick = (country) => {
    navigate(`/countries/${country.name.common}`, {
      state: { 
        flag: country.flags.png,
        alt: country.flags.alt,
        language: Object.values(country.languages).join(", "), 
        capital: country.capital, 
        neighbors: country.borders 
      }
    });
  }


  const removeFromFavorite = (country) => {
    dispatch(REMOVE_FROM_FAVORITE(country));
    dispatch(CALCULATE_FAVORITE_QUANTITY());
   
  }

  const clearAllFavorite = () => {
    dispatch(CLEAR_ALL_FAVORITE());
    dispatch(CALCULATE_FAVORITE_QUANTITY());
  }
  const backToHome = () => {
    window.location.href = "/";

  }

  return (
    <section>
      <div className={`container ${styles.table}`}>
        <h2>Favorite Country</h2>
        {favCountries.length === 0 ? (
          <>
            <p>Your fav cart is empty</p>
            <br />
            <div>
              <Link to="/countries-list">&larr; add country to your fav</Link>
            </div>
          </>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Country</th>
                  <th>Population</th>
                  <th>Region</th>
                  <th>Capital</th>
                  <th>Languages</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {favCountries.map((country, index) => {

                  return (

                    <tr key={country.name.common}>
                      <td>{index + 1}</td>
                      <td>                      
                          <p>
                            <b>{country.name.common}</b>
                          </p>

                          <img src={country.flags.png} style={{ width: "100px" }} alt={country.name.common} onClick={()=>handleClick(country)} />                       

                      </td>
                      <td>{country.population}</td>
                      <td>{country.region}</td>
                      <td>{country.capital}</td>
                      <td>{country.languages && Object.values(country.languages).join(", ") || "No Language is Provided!!!"}</td>
                      <td className={styles.icons}>
                        <FaTrashAlt size={18} color='red' onClick={() => removeFromFavorite(country)} />
                      </td>

                    </tr>

                  )
                })}

              </tbody>
            </table>
            {favCountries.length === 0 ?  (
              <>
                <p>Your fav cart is empty</p>
                <br />
                <div>
                  <Link to="/#countries-list">&larr; add country to your fav</Link>
                </div>
              </>


            ) : (
              <div className={styles.report}>
              <div>
                <button onClick={clearAllFavorite} className='--btn --btn-danger'>CLEAR ALL</button>
              </div>
              <div>
                <p>you have {favCountries.length} countries in your fav cart</p>
                <br />
                <div>
                  <button className='--btn --btn-primary' onClick={backToHome}>&larr; add more country to your fav</button>
                </div>

              </div>

              </div>

            )}
          </>
        )}
      </div>
    </section>

  )
}

export default Favorite
