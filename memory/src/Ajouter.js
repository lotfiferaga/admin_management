import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Ajouter extends Component {
render() {
  return (

    <div className='Ajouter'>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
     <img alt="" src="" width="30" height="30" className="d-inline-block align-top"/>{' '}
      Esi Manager 
    </Navbar.Brand>
    </Navbar>

    <body style={{ width: '1350px' }} >
        <div style={{marginTop:'2%'}}>
        <div class="container-fluid bg " >
        <div class="row">  
        <div class="col-md-4 col-sm-4 col-xs-8"></div>
    
        <div class="col-md-4 col-sm-4 col-xs-8">
        <Form style={{margintop: '-40%',border:'3px',borderStyle:'solid' , borderColor:'#20232a', padding: '20px', }}>
        <h1 align="center"style={{color: '#088A85'}}> Introduire les Informations de L'étudiant  </h1 > 
        <hr/>
        <Form.Row>
        <Form.Group  controlId="name">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="username" placeholder="Mark" />
        </Form.Group>

        <Form.Group  controlId="prename">
        <Form.Label>Prénom</Form.Label>
        <Form.Control type="username" placeholder="Otto" />
        </Form.Group>
        </Form.Row>

        <Form.Group controlId="mail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="passwd">
        <Form.Label>Mot De Passe</Form.Label>
        <Form.Control type="password" placeholder="Mot De Passe" />
        </Form.Group>

        <Form.Row>
        <Form.Group controlId="matricule">
        <Form.Label> Matricule</Form.Label>
        <Form.Control type="username" placeholder="12345" />
        </Form.Group>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <Form.Group  controlId="annee">
        <Form.Label>Année D'étude</Form.Label>
        <Form.Control as="select">
        <option>Choisir...</option>
        <option>1CP</option>
        <option>2CP</option>
        <option>1CS</option>
        <option>2CS</option>
        <option>3CS</option>
        <Form.Control />
        </Form.Control>
        </Form.Group>
        </Form.Row>

        <Button variant="dark" type="submit" style={{ marginLeft:"120px"}}>
           Sauvegarder
        </Button>
        </Form>
        <br/>
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
    </div>
    
  );
}
}
export default Ajouter;
