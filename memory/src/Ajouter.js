import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';  //import button
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Ajouter extends Component {
  /**
   * Ajouter 
   */
  /**
   * 
   * @param {String} nam      le nom de l'étudiant  
   * @param {String} prename  prénom de l'étudiant
   * @param {String} year   année d'étude
   * @param {Integer} matricule  matricule d'étudiant
   * @param {string} mail   l'adresse mail d'etudiant
   * @param {String} password  mot de passe de compte
   * 
   */
  
  constructor (props){
    super(props)
    this.state={
      nam:null,
      pren:null,
      mail:null,
      password:null,
      matricule:null,
      year:null
      
      
    }
  }
  

  /**
   * méthode de prévention d'évenement par défaut 
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
      [event.target.name]:event.target.value,
      [event.target.name]:event.target.value,
      [event.target.name]:event.target.value,
      [event.target.name]:event.target.value,
      [event.target.name]:event.target.value,
      [event.target.name]:event.target.value,
      [event.target.name]:event.target.value
    })
  }
/**
 * Alert 
 */
submit = () => {
  confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => alert('Click Yes')
      },
      {
        label: 'No',
        onClick: () => alert('Click No')
      }
    ]
  });
};
/**
 * rederer of the content wrapped
 */
render() {
  /**
     * declaration des variables pour recupérer les données du formulaire
     */
    const {nam}=this.state    
    const {pren}=this.state 
    const {year}=this.state 
    const {matricule}=this.state 
    const {mail}=this.state 
    const {password}=this.state 
   
  return (

    <div className='Ajouter'>
    <body style={{ width: '1350px' }} >
        <div style={{marginTop:'2%'}}>
        <div class="container-fluid bg " >
        <div class="row">  
        <div class="col-md-4 col-sm-4 col-xs-8"></div>
    
        <div class="col-md-4 col-sm-4 col-xs-8">
        <Form  style={{margintop: '-40%',border:'3px',borderStyle:'solid' , borderColor:'#20232a', padding: '20px', }}
         onSubmit={this.handleSubmit}
        >
        <h1 align="center"style={{color: '#088A85'}}> Introduire les Informations de L'étudiant  </h1 > 
        <hr/>
        <Form.Row>
        <Form.Group  controlId="name">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="username" placeholder="Mark" name="nam" onChange={this.handleInputChange}/>
        </Form.Group>

        <Form.Group  controlId="prename">
        <Form.Label>Prénom</Form.Label>
        <Form.Control type="username" placeholder="Otto" name="pren" onChange={this.handleInputChange} />
        </Form.Group>
        </Form.Row>

        <Form.Group controlId="mail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name="mail" onChange={this.handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="passwd">
        <Form.Label>Mot De Passe</Form.Label>
        <Form.Control type="password" placeholder="Mot De Passe" name="password" onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Row>
        <Form.Group controlId="matricule">
        <Form.Label> Matricule</Form.Label>
        <Form.Control type="username" placeholder="12345" name="matricule" onChange={this.handleInputChange} />
        </Form.Group>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <Form.Group  controlId="annee">
        <Form.Label>Année D'étude</Form.Label>
        <Form.Control as="select" name="year" onChange={this.handleInputChange}>
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

        <Button variant="dark" type="submit" style={{ marginLeft:"120px"}} onClick={this.submit} >
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
