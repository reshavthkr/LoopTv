import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar'
import Homepage from './pages/Homepage'
import Details from './pages/Details'
import Footer from './components/footer/Footer'
import { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state={
      query: ''
    }
  }
  
  render(){
    return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path ='/' component={Homepage}/>
          <Route path = '/details/:id' component={Details}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }
  
}

export default App;