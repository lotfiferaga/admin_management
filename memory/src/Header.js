import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Router, Route, Switch } from "react-router-dom";

class Header extends Component {
    render(){
  return (
    
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
     <img alt="" src="" width="30" height="30" className="d-inline-block align-top"/>{' '}
     Esi Manager
    </Navbar.Brand>
    </Navbar>
   
  );
}
}
export default Header;