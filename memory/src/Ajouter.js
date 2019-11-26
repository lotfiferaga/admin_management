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
    <body style={{ width: '1350px' }} >
        <div style={{marginTop:'2%'}}>
        <div class="container-fluid bg " >
        <div class="row">  
        <div class="col-md-4 col-sm-4 col-xs-8"></div>
    
        <div class="col-md-4 col-sm-4 col-xs-8">
        <Form  style={{margintop: '-40%',border:'3px',borderStyle:'solid' , borderColor:'#20232a', padding: '20px', }}>
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

    </div>
    
  );
}
}
export default Ajouter;
