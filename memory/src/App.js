import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Login from './Login';
import Saisir from './Saisir';
import Ajouter from './Ajouter';
import Profile from './Profile';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
 class App extends Component
 {
   render()  {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Route  path="/"  exact  render={ ()=>{ return ( <Home/> )  } } />
    <Route  path="/login"  exact  render={ ()=>{ return ( <Login/> )  } } />
    <Route  path="/saisir"  exact  render={ ()=>{ return ( <Saisir/> )  } } />
    <Route  path="/ajouter"  exact  render={ ()=>{ return ( <Ajouter/> )  } } />
    <Route  path="/profile"  exact  render={ ()=>{ return ( <Profile/> )  } } />

    <Footer/>
    </div>
    </Router>
  );
}  
}

export default App;