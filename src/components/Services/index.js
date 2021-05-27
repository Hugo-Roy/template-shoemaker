import React from 'react';

import './services.scss';

const Services = () => (
  <section className="services">
    <h2 className="services__h2">Nos Services</h2>
    <div className="services__blocks">
      <ul className="services__blocks__ul">
        <li className="services__blocks__ul__li">
          <h3 className="services__blocks__ul__li__h3">Réparation Chaussures</h3>
          <i className="fas fa-shoe-prints services__blocks__ul__li__icon" />
          <p className="services__blocks__ul__li__pServ">
            Nous réparons toutes sortes de chaussures!
          </p>
        </li>
        <li className="services__blocks__ul__li">
          <h3 className="services__blocks__ul__li__h3">Clés et Sécurité</h3>
          <i className="fas fa-key services__blocks__ul__li__icon" />
          <p className="services__blocks__ul__li__pServ">
            Nous réparons toutes sortes de chaussures!
          </p>
        </li>
        <li className="services__blocks__ul__li">
          <h3 className="services__blocks__ul__li__h3">Gravure</h3>
          <i className="fas fa-sign services__blocks__ul__li__icon" />
          <p className="services__blocks__ul__li__pServ">
            Nous réparons toutes sortes de chaussures!
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Services;
