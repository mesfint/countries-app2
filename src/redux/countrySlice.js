import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  filteredCountries: [],
};
//createAsyncThunk=> create an action creator that returns a promise
export const fetchCountries = createAsyncThunk(
  'country/fetchCountries',
  async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
   
    return response.data;
  }
);

 
const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
     SEARCH_BY_NAME(state, action) {
      const { countries, searchTerm } = action.payload;
      const tempCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      state.filteredCountries = tempCountries;
    },
    
     SEARCH_BY_REGION(state, action) {
      state.filteredCountries = action.payload;
    },
    
  },
  //extraReducers=> handle actions that are not created by createSlice
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.filteredCountries = action.payload;
    });
  },
});
export const { SEARCH_BY_NAME,SEARCH_BY_REGION } = countrySlice.actions;
export const selectCountries = (state) => state?.country?.countries;
export const selectFilteredCountries = (state) => state.country.filteredCountries;

export default countrySlice.reducer;
