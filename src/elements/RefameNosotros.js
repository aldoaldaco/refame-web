import React from 'react';
import face from '../images/facebook.svg';
import gmail from '../images/gmail.svg';
import whats from '../images/whatsapp.svg';
import phone from '../images/phone.svg';
import '../styles/index.css';
import '../styles/nosotros.css';
const RefameNosotros = () => {
  return(
      <div id="sectionNosotros" className="section-nosotros">
        <h2>NOSOTROS</h2>
        <div className="left-section">
          <p>
            Somos una empresa líder comprometida con brindar servicios y productos de calidad a mercados
            locales y extranjeros. Sobre la base de la austeridad, el esfuerzo, la transparencia y la unión,
            buscamos crecer y sobrepasar nuestras metas para la satisfacción de todos nuestros clientes y públicos interesados.
          </p>
        </div>
        <div className="right-section">
          <div>
            <img width="45px" height="45px" src={face} alt=""/>
            <h5><a href="https://www.facebook.com/Refacciones-Refame-343543792688612/" target="_blank">Ir a facebook</a></h5>
          </div>
          <div>
            <img width="50px" height="50px" src={gmail} alt=""/>
            <h5><a href="" target="_blank">ventas@refame.com.mx</a></h5>
          </div>
          <div>
            <img width="50px" height="50px" src={whats} alt=""/>
            <h5><a href="" target="_blank">5528888288</a></h5>
          </div>
          <div>
            <img width="40px" height="40px" src={phone} alt=""/>
            <h5><a href="" target="_blank">5565846141</a></h5>
          </div>
        </div>
      </div>
  );
};

export default RefameNosotros;
