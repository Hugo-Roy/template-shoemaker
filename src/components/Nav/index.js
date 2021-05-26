import React from 'react';

import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__list__item">
        <a
          className="nav__list__item__link"
          href="#"
        >
          Accueil
        </a>
      </li>
      <li className="nav__list__item">
        <a
          className="nav__list__item__link"
          href="#"
        >
          Services
        </a>
      </li>
      <li className="nav__list__item">
        <a
          className="nav__list__item__link"
          href="#"
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
