import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
        
    <div className="App">
      <link
         rel="stylesheet"
         href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
         crossorigin="anonymous"
      />
      <header  
           style={{backgroundColor: '#20232a',
                   color: '#ffffff',
                   position: 'fixed',
                   zIndex: '1',
                   width: '100%',
                   height:'70px',
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
                       float: 'left',
                       fontWeight: '700',
                       fontSize: '35px',
                       lineHeight:'35px',
                       paddingLeft:'0px'
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
                       fontSize: '35px',
                       marginTop: '0px',
                       
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
        backgroundColor: '#282c34',
        width: '1400px',
        height: '800px',
        WebkitOverflowScrolling: 'auto'
      }} >
        <div >
        This Contains The Representation 
          
        </div>
    
    </body>

        
    
     
      
    </div>
  );
}

export default App;
