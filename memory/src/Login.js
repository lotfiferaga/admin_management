import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
class Login extends Component {
  /**
   * Login 
   * @example
   * const Login=new Login({
   * email:"equipe_igl@emits.dz"
   * passwd:"*********"
   * })
   */
  /**
   * 
   * @param {String} email l'email d'utilisateur  
   * @param {String} passwd  mot de passe d'utilisateur
   */
  constructor (props){
    super(props)
    this.state={
      email:null,
      passwd:null
      
    }
  }
  

  /**
   * méthode de prévention d'évenement par défaut 
   */
  /**
   * 
   * @param {Object} data contient les données récupérer du formulaire  
   * 
   */
    handleSubmit=(event)=>{
        event.preventDefault()
        const data=this.state
        console.log(data)
    }
  /**
   * méthode pour sauvgarder les données 
   */  
  handleInputChange=(event)=>{
    event.preventDefault()
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]:event.target.value,
      [event.target.name]:event.target.value
    })
  }
  
      
    render() {  
    /**
     * declaration des variables pour recupérer les données du formulaire
     */
    const {email}=this.state
    const {passwd}=this.state
  return (
   /**
    * Formulaire d'authentification 
    */
    
    <div className="Login" > 
    <body style={{ width: '1350px', WebkitOverflowScrolling:'touch' }} >
    <div class="jumbotron" style={{textAlign: 'center', backgroundColor: 'white',alignContent:'center',marginTop:'2%',}}>
    <div class="container-fluid bg " >
    <div class="row">  
    <div class="col-md-4 col-sm-4 col-xs-8"></div>
    
    <div class="col-md-4 col-sm-4 col-xs-8">

    <Form style={{margintop: '-40%',border:'3px',borderStyle:'solid' , borderColor:'#20232a', padding: '20px', }}
      onSubmit={this.handleSubmit} 
    >
    <h3 style={{ textAlign: 'center', color: '#088A85',}}>Connexion</h3>
    <hr/>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Adresse Email</Form.Label>
    <Form.Control type="email" placeholder="Entrer email" name="email" onChange={this.handleInputChange} />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
    <Form.Label>Mot De Passe</Form.Label>
    <Form.Control type="password" placeholder="Password" name="passwd" onChange={this.handleInputChange}/>
    </Form.Group>
    
    <br/>
    <Button variant="dark"  type="submit">
    <Link to="/profile">
        Se Connecter
    </Link>
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
