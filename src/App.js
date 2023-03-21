import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import RoutesTree from './Components/RoutesTree';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import Hero from './Components/Hero';
import { Stack } from '@mui/system';
import DropOffPoints from './Components/Pages/DropOffPoints';
import RecyclingCompanies from './Components/Pages/RecyclingCompanies';
import Shop from './Components/Pages/Shop';
import Navigation from './Components/Navigation';
import FeaturedPost from './Components/Pages/FeaturedPost';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ResponsiveAppBar />
      <Hero />
      <FeaturedPost />
      <Shop />
      <DropOffPoints />
      <RecyclingCompanies />
      <Stack
       direction={{ xs: 'column', sm: 'row' }}
       spacing={{ xs: 1, sm: 2, md:4 }}
       >
      </Stack>
      <Footer /> 
      <RoutesTree />    
    </div>
  );
}


export default App;
