import './App.css';
import Footer from './Components/Footer';
import RoutesTree from './Components/RoutesTree';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Hero />
      <Footer /> 
      <RoutesTree />    
    </div>
  );
}

export default App;
