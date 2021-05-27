import React from 'react';

import './contact.scss';

const Contact = () => (
  <section id="contact" className="contact">
    <h2 className="contact__hh2">Contact</h2>
    <div className="contact__box">
      <div className="contact__box__visit">
        <h3 className="contact__box__visit__hh3">Nous rendre visite</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10834.774466889903!2d6.0206376!3d47.2421386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ab85a815aeece3b!2sLes%20Nouveaux%20Cordonniers!5e0!3m2!1sfr!2sfr!4v1622119503410!5m2!1sfr!2sfr"
          width="400"
          height="300"
          style={{
            border: 0,
          }}
          allowFullScreen=""
          loading="lazy"
          title="map"
          className="contact__box__visit__map"
        />
      </div>
      <div className="contact__box__infos">
        <div className="contact__box__infos__hor">
          <h3 className="contact__box__infos__hor__ouv">Horaires d'ouverture</h3>
          <ul className="contact__box__infos__hor__u">
            <li className="contact__box__infos__hor__u__l">Du lundi au vendredi: 09:00 - 16:30</li>
            <li className="contact__box__infos__hor__u__l">Le samedi: 09:00 - 12:00</li>
          </ul>
        </div>
        <div className="contact__box__infos__tel">
          <h3 className="contact__box__infos__tel__hhh3">Pour nous joindre :</h3>
          <p className="contact__box__infos__tel__num">03.80.00.00.00</p>
        </div>
      </div>
    </div>
  </section>

);

export default Contact;
