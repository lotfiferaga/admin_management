import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
class Profile extends Component {
  render() {
  return (

    <div ClassName="Profile" style={{width:'full'}}>     
     <body>
       
    <div class="jumbotron" style={{textAlign: 'center', backgroundColor: 'white',alignContent:'center',marginTop:'10%'}}>
   
    <h1 class="display-4" >Bienvenue à Votre Profile</h1>
    <br/>
    <h3 class="display-5" style={{color:'#088A85'}}>Gestion De Scolarité</h3>
  
    <p class="lead">Vous Pouvez Ajouter Un Etudiant Ou Bien Saisir Les Notes D'Un Etudiant.</p>
    <hr/>
    <p class="lead">
    <span> 
        <Button href=""  name="connecter" size="lg" variant="dark">Ajouter Etudiant</Button>
        <br/>
        <br/>
        <Button href=""  name="connecter" size="lg" variant="dark">Saisir Notes    </Button>
    </span>
    </p>
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
export default Profile;
