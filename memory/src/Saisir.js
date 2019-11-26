import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Login from './Login';
import Home from './Home';
import Ajouter from './Ajouter';
 

class Saisir extends Component {
render() {
  return (
      
    <div className="Saisir">

    <body style={{ width: '1350px' }} >
        <div style={{marginTop:'2%'}}>
        <div class="container-fluid bg " >
        <div class="row">  
        <div class="col-md-4 col-sm-4 col-xs-8"></div>
    
        <div class="col-md-4 col-sm-4 col-xs-8">
        <Form style={{margintop: '-40%',border:'3px',borderStyle:'solid' , borderColor:'#20232a', padding: '20px', }}>
        <h1 align="center"style={{color: '#088A85'}}> Saisir Les Notes de L'étudiant  </h1 > 
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

        <Form.Group controlId="groupe">
        <Form.Label>Groupe</Form.Label>
        <Form.Control as="select" >
        <option>Choisir...</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        </Form.Control>
        </Form.Group>
        <h3>Modules :</h3>
        <hr/>
        <Form.Group controlId="analyse">
        <Form.Label>Analyse :</Form.Label>
        <Form.Control type="username" placeholder="Note Sur 20" />
        </Form.Group>

        <Form.Group controlId="algo">
        <Form.Label>ALSDS :</Form.Label>
        <Form.Control type="username" placeholder="Note Sur 20" />
        </Form.Group>

        <Form.Group controlId="igl">
        <Form.Label> IGL :</Form.Label>
        <Form.Control type="username" placeholder="Note Sur 20" />
        </Form.Group>

        <Form.Group controlId="allgo">
        <Form.Label>ALSDD :</Form.Label>
        <Form.Control type="username" placeholder="Note Sur 20" />
        </Form.Group>

        <Form.Group controlId="moyenne">
        <Form.Label>Moyenne :</Form.Label>
        <Form.Control type="username" placeholder="Note Sur 20" />
        </Form.Group>

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
export default Saisir;
