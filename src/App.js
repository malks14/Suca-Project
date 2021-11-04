import React from 'react';

import Home from './components/Home/Home';
import Contacto from './components/Body/Contacto';

import ScrollToTop from './components/UI.js/ScrollToTop';
import ImagenesModal from './components/Body/ImagenesModal';




function App() {
  

  return (
    <React.Fragment>

        <main>
          
          <Home />          
          
          <ImagenesModal />
          <ScrollToTop />
        </main>
          
        <Contacto />

    </React.Fragment>
 
  );
}

export default App;
