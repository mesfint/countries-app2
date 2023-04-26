import React, { useEffect, useState } from 'react'
import styles from "./Header.module.scss"
import { Link,NavLink } from 'react-router-dom'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoImg from "../../assets/logo64.png"
import { BsFillHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { CALCULATE_FAVORITE_QUANTITY, selectFavoriteQuantity } from '../../redux/favoriteSlice';




const activeLink = ({ isActive }) => (isActive ? styles.active : styles.default);


const Header = () => {
  const [showMenu, setShowMenu] = useState(true)

  const dispatch = useDispatch();
  const favoriteQuantity = useSelector(selectFavoriteQuantity);

  const handleShowMenu=()=>{
    setShowMenu(!showMenu)
  }
  const hideMenu=()=>{
    setShowMenu(false)
  }

  useEffect(() => {
    dispatch(CALCULATE_FAVORITE_QUANTITY());
  }, [dispatch ]);

  return (
    <>
    <ToastContainer />
    <header className={styles.fixed}>
    

      <div className={styles['header-container']}>
      <div className={styles.logo } >
        <Link to="/" >
            <img src={logoImg} alt="logo" style={{width:"60px"}} />
        </Link>

      </div>
        
            <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
            <div className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              }
              onClick={hideMenu}
              >
                </div>
            
                <ul onClick={hideMenu}>
               
                    <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
                    <li><NavLink to="/countries-list" className={activeLink}>Countries</NavLink></li>
                    <li><NavLink to="/favorite" className={activeLink}>
                    Favorite
                    
                    {favoriteQuantity > 0 && <BsFillHeartFill size={30} color={"orangered"} className={styles.heart} />}
                    </NavLink>
                    <span className={styles.favCount}>{favoriteQuantity}</span></li>

              
                </ul>
            
            </nav>
              <div className={styles["menu-icon"]}>
            {showMenu &&   <HiOutlineMenuAlt3 size={28} onClick={handleShowMenu} /> }           

              </div>
              
           


            

    </div>

          </header>
    </>
  )
}

export default Header