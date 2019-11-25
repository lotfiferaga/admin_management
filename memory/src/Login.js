import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

class Login extends Component {
    render() {
  return (

    <div className="Login"> 
    <body style={{ width: '1350px', WebkitOverflowScrolling:'touch' }} >
    <Navbar bg="dark" variant="dark">
     <Navbar.Brand href="#home">
    <img alt="" src="" width="30"  height="30" className="d-inline-block align-top"/>{' '}Esi Manager 
     </Navbar.Brand>
     </Navbar>
    <div class="jumbotron" style={{textAlign: 'center', backgroundColor: 'white',alignContent:'center',marginTop:'2%',}}>
    <div class="container-fluid bg " >
    <div class="row">  
    <div class="col-md-4 col-sm-4 col-xs-8"></div>
    
    <div class="col-md-4 col-sm-4 col-xs-8">

    <Form style={{margintop: '-40%',border:'3px',borderStyle:'solid' , borderColor:'#20232a', padding: '20px', }}>
    <h3 style={{ textAlign: 'center', color: '#088A85',}}>Connexion</h3>
    <hr/>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Adresse Email</Form.Label>
    <Form.Control type="email" placeholder="Entrer email" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
    <Form.Label>Mot De Passe</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
    </Form.Group>
    <br/>
    <Button variant="dark"  type="submit">
        Se Connecter
    </Button>
    </Form>
    
    </div> 
    </div>
    </div>
    </div>
    
    
    </body>
    <link
         rel="stylesheet"
         href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
         crossorigin="anonymous"
      />

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
                    <a href="#">Login</a>
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
       
    </div>
  );
}
}

export default Login;
