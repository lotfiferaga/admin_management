import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Router, Route, Switch } from "react-router-dom";

class Footer extends Component {
    render(){
  return (
    
   <footer class="page-footer font-small unique-color-dark pt-0" style={{backgroundColor:'#20232a',color:'#ffffff',marginBottom:'0px'}}>

   <div style={{backgroundColor: '#088A85',}}>
       <div class="container">
           
           <div class="row py-4 d-flex align-items-center" >
           </div>
           
       </div>
   </div>
 
   <div class="container mt-5 mb-4 text-center text-md-left">
       <div class="row mt-3">
  
           <div class="col-md-3 col-lg-4 col-xl-3 mb-4">
               <h6 class="text-uppercase font-weight-bold">
                   <strong>Descriptiion</strong>
                   <hr/>
           </h6>
               <p>Plateforme de gestion de scolarité à L'école Nationale Superieure d'Informatique ESI Ex INI.</p>
           </div>
           
           <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
               <h6 class="text-uppercase font-weight-bold">
                   <strong>Liens utiles</strong>
                   <hr/>
               </h6>
                <p>
                   <a href="#" target="_blank">Acceuil</a>
               </p>
               <p>
                   <a href="#" target="_blank">Login</a>
               </p>
               <p>
                   <a href="http://www.esi.dz/" target="_blank">Esi</a>
               </p>
            
           
           </div>
           <div class="col-md-4 col-lg-3 col-xl-3">
               <h6 class="text-uppercase font-weight-bold">
                   <strong>Contact</strong>
                   <hr/>
               </h6>
               <p>
                   <i class="fa fa-home mr-3"></i> Oued Smar, El harrach</p>
               <p>
                   <i class="fa fa-envelope mr-3"></i> Equipe_igl@esi.dz</p>
           </div>
           
       </div>
   </div>

   <div class="footer-copyright py-3 text-center">
       © 2019 Copyright
   </div>
  
   </footer>    
   
  );
}
}
export default Footer;