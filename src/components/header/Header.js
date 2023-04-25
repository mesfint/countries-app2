import React, { useEffect } from 'react'
import styles from "./Header.module.css"
import { Link,NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoImg from "../../assets/logo64.png"
import { BsFillHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { CALCULATE_FAVORITE_QUANTITY, selectFavoriteQuantity } from '../../redux/favoriteSlice';


//const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");
const activeLink = ({ isActive }) => (isActive ? styles.active : "");


const Header = () => {

  const dispatch = useDispatch();
  const favoriteQuantity = useSelector(selectFavoriteQuantity);


  useEffect(() => {
    dispatch(CALCULATE_FAVORITE_QUANTITY());
  }, [dispatch ]);

  return (
    <>
    <ToastContainer />
    <header>
    

      <div className={styles['header-container']}>
      <div className={styles.logo } >
        <Link to="/" >
            <img src={logoImg} alt="logo" style={{width:"60px", margin:"0 30rem"}} />
        </Link>

      </div>
        
            <nav>
                <ul className='--list-style-none ' >
               
                    <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
                    <li><NavLink to="/countries-list" className={activeLink}>Countries</NavLink></li>
                    <li><NavLink to="/favorite" className={activeLink}>
                    <Link to="/favorite">Favorite</Link>
                    
                    {favoriteQuantity > 0 && <BsFillHeartFill size={30} color={"orangered"} className={styles.heart} />}
                    </NavLink><span className={styles.favCount}>{favoriteQuantity}</span></li>

              
                </ul>
            </nav>
            <div>
                ===
            </div>
              

            

    </div>

          </header>
    </>
  )
}

export default Header