import React from 'react';
import Carousel from './carousel/carousel';
import IndicatorDots from './carousel/indicator-dots'
import '../styles/index.css';
import '../styles/inicio.css';
import Logo from '../images/logo.png';
import Bandas from '../images/stock/bandas.png';
import Bateria from '../images/stock/bateria.png';
import Discos from '../images/stock/discos.png';
import Bujias from '../images/stock/bujias.png';
import Filtros from '../images/stock/filtros.png';

const _handleClick = (event) => {
  event.preventDefault();
  event.stopPropagation();
  const option = event.target ? event.target.id : event.currentTarget.id;
  if(option && option !== 'logo') {
    _cleanLinks(event);
  }
  _doNavigation(event);
};

const _cleanLinks = (event) => {
    const links = document.querySelectorAll('.enlace');
    links.forEach(link => link.classList.remove('active'));
    event.currentTarget.classList.add('active');
};

const _doNavigation = (event) => {
  const option = event.target ? event.target.id : event.currentTarget.id;
  //TODO: map is not support for NoleList, but ES6 not support forEach
  switch(option) {
    case 'logo':
      document.querySelector('#sectionInicio').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      break;
    case 'inicio':
      document.querySelector('#sectionInicio').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      break;
    case 'contacto':
      document.querySelector('#sectionContacto').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      break;
    case 'productos':
      document.querySelector('#sectionProductos').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      break;
    case 'nosotros':
      document.querySelector('#sectionNosotros').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      break;
  }
};

const RefameInicio = () => {
  return(
    <div id="sectionInicio" className="section-inicio">
      <header className="header-inicio">
        <div id="logo" onClick={_handleClick} role="button" className="logo">
          <img  onClick={_handleClick} width="200px" height="70px" src={Logo} alt="Logo" />
        </div>
        <div className="menu">
          <nav>
            <ul>
              <li id="inicio" className="enlace" onClick={_handleClick}>Inicio</li>
              <li id="productos" className="enlace" onClick={_handleClick}>Productos</li>
              <li id="nosotros" className="enlace" onClick={_handleClick}>Nosotros</li>
              <li id="contacto" className="enlace" onClick={_handleClick}>Contacto</li>
            </ul>
          </nav>
        </div>
      </header>
      <Carousel auto loop widgets={[IndicatorDots]}>
        <div className="wall-1">
          <div className="section-car">
            <div className="left-side">
              <img src={Bandas} alt="bandas"/>
            </div>
            <div className="right-side">
              <h4>Bandas de hule sintetico EPDM</h4>
              <h6>Eleva la resistencia de tu motor</h6>
              <a target="_blank" href="https://listado.mercadolibre.com.mx/_CustId_63672910">
                <button>
                  Comprar ahora
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="wall-2">
          <div className="section-car">
            <div className="left-side">
              <img src={Bateria} alt="bandas"/>
            </div>
            <div className="right-side">
              <h4>Bateria para tu auto</h4>
              <h6>Aquí tenemos la bateria que buscas</h6>
              <a target="_blank" href="https://listado.mercadolibre.com.mx/_CustId_63672910">
                <button>
                  Comprar ahora
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="wall-3">
          <div className="section-car">
            <div className="left-side">
              <img src={Discos} alt="bandas"/>
            </div>
            <div className="right-side">
              <h4>Discos de freno</h4>
              <h6>Garantiza la reducción de la velocidad</h6>
              <a target="_blank" href="https://listado.mercadolibre.com.mx/_CustId_63672910">
                <button>
                  Comprar ahora
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="wall-4">
          <div className="section-car">
            <div className="left-side">
              <img src={Bujias} alt="bandas"/>
            </div>
            <div className="right-side">
              <h4>Las mejores Bujias</h4>
              <h6>La bujía es una de las piezas que más daño sufre</h6>
              <a target="_blank" href="https://listado.mercadolibre.com.mx/_CustId_63672910">
                <button>
                  Comprar ahora
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="wall-5">
          <div className="section-car">
            <div className="left-side">
              <img src={Filtros} alt="bandas"/>
            </div>
            <div className="right-side">
              <h4>Filtros de aire y combustible</h4>
              <h6>Atrapa los contaminantes dañinos y protege tu motor</h6>
              <a target="_blank" href="https://listado.mercadolibre.com.mx/_CustId_63672910">
                <button>
                  Comprar ahora
                </button>
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default RefameInicio;
