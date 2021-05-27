import React from 'react';

import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__list__item">
        <a
          className="nav__list__item__link"
          href="#hero"
        >
          Accueil
        </a>
      </li>
      <li className="nav__list__item">
        <a
          className="nav__list__item__link"
          href="#services"
        >
          Services
        </a>
      </li>
      <li className="nav__list__item">
        <a
          className="nav__list__item__link"
          href="#contact"
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
