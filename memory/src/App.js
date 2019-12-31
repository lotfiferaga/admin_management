import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Ajouter from './Ajouter';
import Login from './Login';
import Footer from './Footer';
import Profile from './Profile';

 class App extends Component
 {
   render()  {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Footer/>

    </div>
  );
}  
}

export default App;