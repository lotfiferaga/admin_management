import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
        
    <div className="App">
      
      <header  
           style={{backgroundColor: '#20232a',
                   color: '#ffffff',
                   position: 'fixed',
                   zIndex: '1',
                   width: '100%',
                   height:'60px',
                    top: '0',
                   left: '0',}}>
                     <a aria-current="page" className="LogoPlacer" href="\" >
                      <object data='.\img\logo.png' type="image/svg+xml"
                      style={{
                        float: 'left',
                        paddingLeft:'10px'
                      }}></object>
                       <span 
                       style={{color: '#61dafb',
                       marginLeft: '10px',
                       marginTop: '14px',
                       float: 'right',
                       fontWeight: '700',
                       fontSize: '20px',
                       lineHeight:'35px',
                       paddingLeft:'10px',
                       paddingRight:'10px'
                       }} >Esi Manager</span>
                     </a>
                     <nav style={{ 
                       fontWeight: '200',
                       display: 'flex',
                       WebkitBoxOrient: 'horizontal',
                       WebkitBoxDirection: 'normal',
                       WebkitFlexDirection: 'raw',
                       WebkitBoxAlign: 'center',
                       WebkitAlignItems:'stretch',
                       height: '100%',
                       paddingLeft: '40px',
                       paddingRight: '40px',
                       overflowX:'hidden',
                       overflowY: 'hidden',
                       WebkitFlex: '1',
                       fontSize: '20px',
                       marginTop: '17px',
                       float: 'center'
                       
                     }}>
                       <a href="#"
                        style={{
                         paddingRight:'10px',
                         paddingLeft:'10px',
                       }}>Acceuil</a>
                       <a href="#"
                        style ={{
                         paddingRight:'10px',
                         paddingLeft:'10px',
                       }}>Login</a>
                       <a></a>

                     </nav>

      </header>
     <body style={{
        width: '1350px',
        WebkitOverflowScrolling:'touch'
      }} >
       
    <div class="jumbotron" style={{textAlign: 'center', backgroundColor: 'white',alignContent:'center',marginTop:'10%'}}>
   
    <h1 class="display-4" >Bienvenue à Esi Manager</h1>
    <br/>
    <br/>
    <h3 class="display-5" style={{color:'#088A85'}}>Gestion De Scolarité</h3>
  
    <p class="lead">Plateforme de gestion de scolarité à L'école Nationale Superieure d'Informatique ESI Ex INI.</p>
    <hr/>
    <p>Connectez-vous en tant que Administrateur ou Enseignant ou Etudiant pour utiliser Esi Manager.</p>

    <p class="lead">
    <span> 
        <a class="btn btn-lg" href="#" value="" name="connecter" role="button" style={{backgroundColor: '#088A85'}}>Connecter</a>
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

export default App;
