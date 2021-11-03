import React from 'react';

import Home from './components/Home/Home';
import Contacto from './components/Body/Contacto';
import Imagenes from './components/Body/Imagenes';




function App() {
  

  return (
    <React.Fragment>

        <main>
          
          <Home />          
          <Imagenes />
        </main>
          
        <Contacto />

    </React.Fragment>
 
  );
}

export default App;
