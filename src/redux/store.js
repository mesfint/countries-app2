import { configureStore,combineReducers } from '@reduxjs/toolkit'
import countryReducer from './countrySlice'
import favoriteReducer from './favoriteSlice'



const rootReducer = combineReducers({
    // Add reducers here
    country: countryReducer,
    favorite: favoriteReducer,
 

});

 const store =  configureStore({
  reducer: rootReducer,
})

export default store;