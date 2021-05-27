/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import './nav.scss';
import classNames from 'classnames';

const Nav = ({ clicked, setClicked }) => {
  const cssClassNav = classNames('nav', { nav__open: clicked });
  const hamburgerClass = classNames('toggle', { toggle__switch: clicked });
  const switchNav = () => {
    setClicked((clicked) => !clicked);
  };

  return (
    <div>
      <i
        className={`fas fa-bars ${hamburgerClass}`}
        onClick={switchNav}
      />
      <nav className={cssClassNav}>
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
    </div>
  );
};

Nav.propTypes = {
  clicked: PropTypes.bool.isRequired,
  setClicked: PropTypes.func.isRequired,
};

export default Nav;
