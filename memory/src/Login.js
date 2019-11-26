import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

class Login extends Component {
    render() {
  return (

    <div className="Login" > 
    <body style={{ width: '1350px', WebkitOverflowScrolling:'touch' }} >
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

    </div>
  );
}
}

export default Login;
