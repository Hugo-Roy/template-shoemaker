// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Nav from 'src/components/Nav';
import Hero from 'src/components/Hero';
import Services from 'src/components/Services';

// == Composant
const App = () => (
  <div className="app">
    <header>
      <Hero />
      <Nav />
    </header>
    <main>
      <Services />
    </main>
  </div>
);

// == Export
export default App;
