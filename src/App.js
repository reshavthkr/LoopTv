
import './App.css';
import Navbar from './components/navbar/Navbar'
import SearchBar from './components/searchbar/SearchBar'
import Hero from './components/hero/Hero'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <SearchBar/>
     <Card/>
     <Footer/>
    </div>
  );
}

export default App;