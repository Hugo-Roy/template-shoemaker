// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';
import Nav from 'src/components/Nav';
import Hero from 'src/components/Hero';
import Services from 'src/components/Services';
import Contact from 'src/components/Contact';

// == Composant
const App = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="app">
      <header>
        <Hero />
        <Nav clicked={clicked} setClicked={setClicked} />
      </header>
      <main>
        <Services />
        <Contact />
      </main>
    </div>
  );
};
// == Export
export default App;
