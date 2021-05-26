// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Nav from 'src/components/Nav';
import Hero from 'src/components/Hero';

// == Composant
const App = () => (
  <div className="app">
    <header>
      <Hero />
      <Nav />
    </header>
  </div>
);

// == Export
export default App;
