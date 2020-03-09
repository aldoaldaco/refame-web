import React from 'react';
import '../styles/index.css';
import '../styles/products.css';
import Volks from '../images/brands/volkswagen.png';
import Seat from '../images/brands/seat.png';
import Honda from '../images/brands/honda.png';
import Cadillac from '../images/brands/cadillac.png';
import Chevrolet from '../images/brands/chevrolet.png';
import Gmc from '../images/brands/gmc.png';
import Pontiac from '../images/brands/pontiac.png';
import Saab from '../images/brands/saab.png';
import Buick from '../images/brands/buick.png';
import Hummer from '../images/brands/hummer.png';
import Audi from '../images/brands/audi.png';
import Bmw from '../images/brands/bmw.png';
import Mercedes from '../images/brands/mercedes.png';

class RefameProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          "name": "Producto1",
          "href": "https://articulo.mercadolibre.com.mx/MLM-585736964-boton-kit-perilla-control-velocidades-sonic-1216-automatico-_JM",
          "description": "Botón Kit Perilla Control Velocidades Sonic 12/16 Automático",
          "image": require("../images/products/Diapositiva01.png"),
          "price": "627",
          "brand": "GM",
          "part": "42423234"
        },
        {
          "name": "Producto2",
          "href": "https://articulo.mercadolibre.com.mx/MLM-585736964-boton-kit-perilla-control-velocidades-sonic-1216-automatico-_JM",
          "description": "Visera Parasol Izquierda Sonic 12/17, Spark 11/17 Gm",
          "image": require("../images/products/Diapositiva02.png"),
          "price": "413",
          "brand": "GM",
          "part": "95327489"
        },
        {
          "name": "Producto3",
          "href": "https://articulo.mercadolibre.com.mx/MLM-594964380-visera-parasol-derecha-sonic-1217-spark-1117-gm-_JM",
          "description": "Visera Parasol Derecha Sonic 12/17, Spark 11/17 Gm",
          "image": require("../images/products/Diapositiva03.png"),
          "price": "469",
          "brand": "GM",
          "part": "95369117"
        },
        {
          "name": "Producto4",
          "href": "https://articulo.mercadolibre.com.mx/MLM-591265564-resonador-ducto-aire-optra-2005-al-2009-original-gm-_JM",
          "description": "Resonador Ducto Aire Optra 2005 Al 2009 Original Gm",
          "image": require("../images/products/Diapositiva04.png"),
          "price": "1985",
          "brand": "GM",
          "part": "96553488"
        },
        {
          "name": "Producto5",
          "href": "https://articulo.mercadolibre.com.mx/MLM-590519960-tapa-distribucion-juego-matiz-10-416-inferior-gm-parts-_JM",
          "description": "Tapa Distribución Juego Matiz 1.0 4/16 Inferior Gm Parts",
          "image": require("../images/products/Diapositiva05.png"),
          "price": "377",
          "brand": "GM",
          "part": "96325226-96325222"
        },
        {
          "name": "Producto6",
          "href": "https://articulo.mercadolibre.com.mx/MLM-575415469-juego-baleros-doble-rueda-delantera-matiz-0416-acdelco-_JM",
          "description": "Juego Baleros Doble Rueda Delantera Matiz 04/16 Acdelco",
          "image": require("../images/products/Diapositiva06.png"),
          "price": "470",
          "brand": "Acdelco",
          "part": "20F010MX/96496903/96316762"
        },
        {
          "name": "Producto7",
          "href": "https://articulo.mercadolibre.com.mx/MLM-575027734-bobina-encendido-sonic-16-1217-trax-18-1317-acdelco-_JM",
          "description": "Bobina Encendido Sonic 1.6 12/17, Trax 1.8 13/17 Acdelco",
          "image": require("../images/products/Diapositiva07.png"),
          "price": "1800",
          "brand": "Acdelco",
          "part": "19315518"
        },
        {
          "name": "Producto8",
          "href": "https://articulo.mercadolibre.com.mx/MLM-589354623-base-amortiguador-delantero-matiz-0416-gm-jgo-2-pzs-_JM",
          "description": "Base Amortiguador Delantero Matiz 04/16 Gm (jgo 2 Pzs)",
          "image": require("../images/products/Diapositiva08.png"),
          "price": "550",
          "brand": "GM",
          "part": "96535011"
        },
        {
          "name": "Producto9",
          "href": "https://articulo.mercadolibre.com.mx/MLM-576314233-soporte-barra-estabilizadora-matiz-0415-delante-izqder-gm-_JM",
          "description": "Estabilizadora Matiz 04/15 Delante Izq/der Gm",
          "image": require("../images/products/Diapositiva09.png"),
          "price": "1300",
          "brand": "GM",
          "part": "96599027-96599026"
        },
        {
          "name": "Producto10",
          "href": "https://articulo.mercadolibre.com.mx/MLM-575514684-enfriador-aceite-completo-sonic-cruze-original-gm-parts-_JM",
          "description": "Enfriador Aceite Completo Sonic Cruze Original Gm Parts",
          "image": require("../images/products/Diapositiva10.png"),
          "price": "3999",
          "brand": "GM",
          "part": "93186324"
        },
        {
          "name": "Producto11",
          "href": "https://articulo.mercadolibre.com.mx/MLM-585145432-amortiguador-delantero-spark-2011-al-2017-izq-y-der-acdelco-_JM",
          "description": "Amortiguador Delantero Spark 2011 Al 2017 Izq Y Der Acdelco",
          "image": require("../images/products/Diapositiva11.png"),
          "price": "2090",
          "brand": "Acdelco",
          "part": "19315700-19315701"
        },
        {
          "name": "Producto12",
          "href": "https://articulo.mercadolibre.com.mx/MLM-615556356-sensor-ciguenal-vectra-32-v6-2003-al-2005-bosch-_JM",
          "description": "Sensor Cigueñal Vectra 3.2 V6 2003 Al 2005 Bosch",
          "image": require("../images/products/Diapositiva12.png"),
          "price": "955",
          "brand": "Bosh",
          "part": "261210206"
        },
        {
          "name": "Producto13",
          "href": "https://articulo.mercadolibre.com.mx/MLM-576858471-amortiguador-chevrolet-optra-2006-al-2010-acdelco-4-pzs-_JM",
          "description": "Amortiguador Chevrolet Optra 2006 Al 2010 Acdelco 4 Pzs",
          "image": require("../images/products/Diapositiva13.png"),
          "price": "3880",
          "brand": "Acdelco",
          "part": "M5T11010/M5T11011/M5T11012/M5T11009"
        },
        {
          "name": "Producto14",
          "href": "https://articulo.mercadolibre.com.mx/MLM-573766448-palanca-velocidades-chevy-9412-todos-completa-gm-parts-_JM",
          "description": "Palanca Velocidades Chevy 94/12 (todos) Completa Gm Parts",
          "image": require("../images/products/Diapositiva14.png"),
          "price": "1420",
          "brand": "GM",
          "part": "94670337"
        },
        {
          "name": "Producto15",
          "href": "https://articulo.mercadolibre.com.mx/MLM-571648178-amortiguador-kit-4-spark-2011-al-2017-acdelco-nuevos-_JM",
          "description": "Amortiguador Kit 4 Spark 2011 Al 2017 Acdelco Nuevos",
          "image": require("../images/products/Diapositiva15.png"),
          "price": "3870",
          "brand": "Acdelco",
          "part": "19315700-19315701 - 19315702"
        },
        {
          "name": "Producto16",
          "href": "https://articulo.mercadolibre.com.mx/MLM-580952380-pastilla-encendido-colorado-canyon-original-gm-_JM",
          "description": "Pastilla Encendido Colorado Canyon Original Gm",
          "image": require("../images/products/Diapositiva16.png"),
          "price": "2100",
          "brand": "GM",
          "part": "15795321"
        },
        {
          "name": "Producto17",
          "href": "https://articulo.mercadolibre.com.mx/MLM-604028049-reparacion-buje-mecanismo-velocidades-tornado-1114-_JM",
          "description": "Reparación Buje Mecanismo Velocidades Tornado 11/14 Importado",
          "image": require("../images/products/Diapositiva17.png"),
          "price": "393",
          "brand": "Chevrolet",
          "part": "93347157NG"
        },
        {
          "name": "Producto18",
          "href": "https://articulo.mercadolibre.com.mx/MLM-600913410-kit-base-pedal-frenos-y-pedal-clucth-matiz-2004-al-2017-gm-_JM",
          "description": "Kit Base Pedal Frenos Y Pedal Clucth Matiz 2004 Al 2017 Gm",
          "image": require("../images/products/Diapositiva18.png"),
          "price": "1374",
          "brand": "GM",
          "part": "96457249/96590811"
        },
        {
          "name": "Producto19",
          "href": "https://articulo.mercadolibre.com.mx/MLM-589353161-base-pedal-frenos-matiz-aplica-anos-2004-al-2016-original-gm-_JM",
          "description": "Base Pedal Frenos Matiz Aplica Años 2004 Al 2016 Original Gm",
          "image": require("../images/products/Diapositiva19.png"),
          "price": "1135",
          "brand": "GM",
          "part": "96457249"
        },
        {
          "name": "Producto20",
          "href": "https://articulo.mercadolibre.com.mx/MLM-588851205-filtro-de-aire-completo-matiz-2006-al-2017-original-gm-_JM",
          "description": "Filtro De Aire Completo Matiz 2006 Al 2017 Original Gm",
          "image": require("../images/products/Diapositiva20.png"),
          "price": "1195",
          "brand": "GM",
          "part": "42390023"
        }
      ]
    };
  }
  render() {
    return (
        <div id="sectionProductos" className="section-productos">
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img width="100px" height="90px" src={Seat} alt="seat"/>
              </div>
              <div className="slide">
                <img width="100px" height="100px" src={Volks} alt="volkswagen"/>
              </div>
              <div className="slide">
                <img width="110px" height="100px" src={Honda} alt="honda"/>
              </div>
              <div className="slide">
                <img width="110px" height="100px" src={Cadillac} alt="cadillac"/>
              </div>
              <div className="slide">
                <img width="100px" height="100px" src={Chevrolet} alt="chevrolet"/>
              </div>
              <div className="slide">
                <img width="130px" height="100px" src={Saab} alt="saab"/>
              </div>
              <div className="slide">
                <img width="150px" height="100px" src={Pontiac} alt="pontiac"/>
              </div>
              <div className="slide">
                <img width="120px" height="90px" src={Gmc} alt="gmc"/>
              </div>
              <div className="slide">
                <img width="120px" height="100px" src={Hummer} alt="hummer"/>
              </div>
              <div className="slide">
                <img width="90px" height="90px" src={Buick} alt="buick"/>
              </div>
              <div className="slide">
                <img width="90px" height="90px" src={Audi} alt="audi"/>
              </div>
              <div className="slide">
                <img width="90px" height="90px" src={Bmw} alt="bmw"/>
              </div>
              <div className="slide">
                <img width="90px" height="90px" src={Mercedes} alt="mercedes"/>
              </div>
            </div>
          </div>
          <h2>NUESTROS PRODUCTOS</h2>
          <div className="products">
            {this.state.products.map((product, index)=> {
              return (
                <div className="product" key={index}>
                  <a href={product.href} target="_blank">
                    <div className="card">
                      <div className="pic-product">
                        <div className="pic">
                          <img className="pic-img" src={product.image}/>
                        </div>
                      </div>
                      <h4 className="h4-product">{product.name}</h4>
                      <div className="desc-product">
                        <p>
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
    );
  }
};

export default RefameProducts;
