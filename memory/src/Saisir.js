import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Login from './Login';
import Home from './Home';
import Ajouter from './Ajouter';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Saisir extends Component {
  /**
   * Constructeur de la classe 
   */
  /**
   * 
   * @param {String} nom      le nom de l'étudiant  
   * @param {String} prename  prénom de l'étudiant
   * @param {Number} groupe   numero de groupe
   * @param {Double} analyse  note d'analyse
   * @param {Double} algo   note d'alsds 
   * @param {String} igl  note d'igl
   * @param {String} dynam  note d'alsdd
   * @param {String} moyen  moyenne totale
   */
  constructor (props){
    super(props)
    this.state={
      nom:null,
      prename:null,
      groupe:null,
      analyse:null,
      algo:null,
      igl:null,
      dynam:null,
      moyen:null
      
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
 * renderer of the content 
 */
render() {
  /**
     * declaration des variables pour recupérer les données du formulaire
     */
    const {nom}=this.state    
    const {prename}=this.state 
    const {groupe}=this.state 
    const {analyse}=this.state 
    const {igl}=this.state 
    const {algo}=this.state 
    const {dynam}=this.state 
    const {moyen}=this.state 

  return (
      
    <div className="Saisir">
    <body style={{ width: '1350px' }} >
        <div style={{marginTop:'2%'}}>
        <div class="container-fluid bg " >
        <div class="row">  
        <div class="col-md-4 col-sm-4 col-xs-8"></div>
    
        <div class="col-md-4 col-sm-4 col-xs-8">
        <Form style={{margintop: '-40%',border:'3px',borderStyle:'solid' , borderColor:'#20232a', padding: '20px', }}
         onSubmit={this.handleSubmit}
        >
        <h1 align="center"style={{color: '#088A85'}}> Saisir Les Notes de L'étudiant  </h1 > 
        <hr/>
        <Form.Row>
        <Form.Group  controlId="name">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="username" placeholder="Mark" name="nom" onChange={this.handleInputChange} />
        </Form.Group>

        <Form.Group  controlId="prename">
        <Form.Label>Prénom</Form.Label>
        <Form.Control type="username" placeholder="Otto" name="prename" onChange={this.handleInputChange}/>
        </Form.Group>
        </Form.Row>

        <Form.Group controlId="groupe">
        <Form.Label>Groupe</Form.Label>
        <Form.Control as="select" name="groupe" onChange={this.handleInputChange}>
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
        <Form.Control type="username" placeholder="Note Sur 20" name="analyse" onChange={this.handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="algo">
        <Form.Label>ALSDS :</Form.Label>
        <Form.Control type="username" placeholder="Note Sur 20" name="algo" onChange={this.handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="igl">
        <Form.Label> IGL :</Form.Label>
        <Form.Control type="username" placeholder="Note Sur 20" name="igl" onChange={this.handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="allgo">
        <Form.Label>ALSDD :</Form.Label>
        <Form.Control type="username" placeholder="Note Sur 20" name="dynam" onChange={this.handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="moyenne">
        <Form.Label>Moyenne :</Form.Label>
        <Form.Control type="username" placeholder="Note Sur 20" name="moyen" onChange={this.handleInputChange}/>
        </Form.Group>

        <Button variant="dark" type="submit" style={{ marginLeft:"120px"}} onClick={this.submit}>
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
