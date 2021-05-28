/* eslint-disable max-len */
import React, { useRef } from 'react';

import './services.scss';

const Services = () => {
  const servColor = useRef(null);

  return (
    <section
      ref={servColor}
      id="services"
      className="services"
    >
      <h2 className="services__h2">Nos Services</h2>
      <div className="services__blocks">
        <ul className="services__blocks__ul">
          <li className="services__blocks__ul__li">
            <h3 className="services__blocks__ul__li__h3">Réparation Chaussures</h3>
            <i className="fas fa-shoe-prints services__blocks__ul__li__icon" />
            <p className="services__blocks__ul__li__pServ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </li>
          <li className="services__blocks__ul__li">
            <h3 className="services__blocks__ul__li__h3">Clés et Sécurité</h3>
            <i className="fas fa-key services__blocks__ul__li__icon" />
            <p className="services__blocks__ul__li__pServ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </li>
          <li className="services__blocks__ul__li">
            <h3 className="services__blocks__ul__li__h3">Gravure</h3>
            <i className="fas fa-sign services__blocks__ul__li__icon" />
            <p className="services__blocks__ul__li__pServ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </li>
        </ul>
      </div>
      <p className="services__ex">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </section>
  );
};
export default Services;
