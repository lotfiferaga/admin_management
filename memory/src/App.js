import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Login from './Login';
import Home from './Home';
import Ajouter from './Ajouter';
import Saisir from './Saisir';
import { Link } from 'react-router-dom';
import { Router, Route, Switch } from "react-router-dom";
import Footer from './Footer'; 
import Header from './Header';
function App(){
  return (
    
    <div ClassName='App'  style={{width:'full'}}>
    <Header/>
    <body style={{ width: '1350px'}} >
      
   <div class="jumbotron" style={{textAlign: 'center', backgroundColor: 'white',alignContent:'center',marginTop:'10%'}}>
  
   <h1 class="display-4" >Bienvenue à Esi Manager</h1>
   <br/>
   <br/>
   <h3 class="display-5" style={{color:'#088A85'}}>Gestion De Scolarité</h3>
 
   <p class="lead">Plateforme de gestion de scolarité à L'école Nationale Superieure d'Informatique ESI Ex INI.</p>
   <hr/>
   <p>Connectez-vous en tant que Administrateur ou Enseignant ou Etudiant pour utiliser Esi Manager.</p>

   <p class="lead">
   <span> 
       
       <Button onClick={Login()} name="connecter" size="lg" variant="dark">Connecter</Button>
       
   </span>
   </p>
   </div>
   
   
   </body>
   <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
     />

    <Footer/>  
   </div>
  );
}

export default App;
