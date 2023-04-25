import './App.css';
import CountriesList from './components/countries-list/CountriesList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountryDetail from './components/country-details/CountryDetail';
import Favorite from './components/favorite/Favorite';
import Home from './components/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <div>
     <BrowserRouter>
     <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries-list" element={<CountriesList />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/countries/:name" element={<CountryDetail />} />
    </Routes>
    <Footer />
  </BrowserRouter>

  
    </div>
  );
}

export default App;
