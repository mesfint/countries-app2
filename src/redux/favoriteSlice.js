import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const initialState = {
    favorites:localStorage.getItem("favorite-countries")?JSON.parse(localStorage.getItem("favorite-countries")):[],
    favoriteQuantity:0,

}

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    ADD_TO_FAVORITE(state, action) {
    
        const favoriteIndex = state.favorites.findIndex((f) => f.name.common === action.payload.name.common);
        if (favoriteIndex === -1) {
          state.favorites.push(action.payload);
         
          toast.success(`${action.payload.name.common}  added to Favorite!!!`,{
            position: toast.POSITION.TOP_RIGHT
          })
          
          
          localStorage.setItem("favorite-countries", JSON.stringify(state.favorites));
        
        } else {
          state.favorites.splice(favoriteIndex, 1);
          toast.error(`${action.payload.name.common}  removed from Favorite!!!`)
          localStorage.setItem("favorite-countries", JSON.stringify(state.favorites));
      
        
          
      
    }
   
    },
    CALCULATE_FAVORITE_QUANTITY(state){
        state.favoriteQuantity = state.favorites.length;
        //console.log("Calculate_favorite=>",state.favoriteQuantity)

    },
    REMOVE_FROM_FAVORITE(state,action){
        const favoriteIndex = state.favorites.findIndex((f)=> f.name.common === action.payload.name.common);
        state.favorites.splice(favoriteIndex,1);
        toast.error(`${action.payload.name.common}  removed from Favorite!!!`)
        localStorage.setItem("favorite-countries",JSON.stringify(state.favorites));
    },
    CLEAR_ALL_FAVORITE(state,action){
       const favoriteIndex = state.favorites.findIndex((f)=> f.name.common === action.payload.name.common);
        state.favorites = [];
        localStorage.setItem("favorite-countries",JSON.stringify(state.favorites));
        state.favorites.splice(favoriteIndex,1);
        toast.error("Your Favorite cart is cleared")
        localStorage.setItem("favorite-countries",JSON.stringify(state.favorites));

    },



    
  }
});

export const {ADD_TO_FAVORITE,CALCULATE_FAVORITE_QUANTITY,REMOVE_FROM_FAVORITE,CLEAR_ALL_FAVORITE} = favoriteSlice.actions
export const selectFavoritesCountries = (state) => state.favorite.favorites
export const selectFavoriteQuantity = (state) => state.favorite.favoriteQuantity

export default favoriteSlice.reducer