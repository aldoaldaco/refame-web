import React from 'react';
import '../styles/index.css';
import '../styles/contacto.css';

const RefameContacto = () => {
  return(
      <div id="sectionContacto" className="contacto-">
        <h2>BUSCANOS O MARCANOS</h2>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.1620805937546!2d-99.14540898513148!3d19.705722486729762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f4d7a22cb8d1%3A0x60aa27000adcc17a!2sCentenario%20Himno%20Nacional%2042%2C%20Melchor%20Ocampo%2C%2054884%20Melchor%20Ocampo%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1583708589357!5m2!1ses-419!2smx"
            width="100%"
            height="250px"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            style={{border:0}}
            allowFullScreen>
        </iframe>
        <div className="footer-contacto">
          Copyright © 2018 by refame.com.mx made by Aldo Aldaco
        </div>
      </div>
  );
};

export default RefameContacto;
