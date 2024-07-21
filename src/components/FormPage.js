import React from 'react';
import basilicaImage from '../images/basilica.jpg';
import cortijoImage from '../images/cortijo.jpeg'

const FormPage = () => {
  return (
    <div className="container">
    <main className="main-content">
      <section>
        <div className="top-title">
          <h1>Información General</h1>
          <p>Toda la información que necesitas saber para la boda.</p>
        </div>
        <section className="ceremonia">
          <div className="text-left">
            <h1>Ceremonia</h1>
            <p>13.30h Basílica Pontificia de San Miguel</p>
            <a href="https://maps.app.goo.gl/uspLPsrZ3BKosDZ27">C. de San Justo, 4, Centro, 28005 Madrid</a>
          </div>
          <div className="image-right">
            <img src={basilicaImage} alt="Imagen de la Basilica" />
          </div>
        </section>

        <section className="celebracion">
          <div className="image-left">
            <img src={cortijoImage} alt="Imagen del Cortijo" />
          </div>
          <div className="text-right">
            <h1>Celebración</h1>
            <p>Cortijo de Mónico</p>
            <a href="https://maps.app.goo.gl/XmHeuwxpRgu3Pyro9">Carretera de Villanueva del Pardillo M-851, Km. 1.5.<br />28222 Majadahonda, Madrid</a>
          </div>
        </section>

        <div className="grid-wrapper">
        <div className="grid-container">
            <div className="column">
            <h1 className="column-title">Autobuses</h1>
              <div className="grid-item">
                <h2>Horario</h2>
                  <p>Ida: a la salida de los novios</p> <br></br>
                  <p>Vuelta: <br></br>
                    Al final de la boda (00:30) salida de los 3 autobuses.
                    </p>
              </div>
              <div className="grid-item">
              <h2>Paradas</h2>
              <p>A la vuelta los autobuses pararán en: <br></br>
              <ol>
                <li>Bernabéu</li>
                <li>Cibeles</li>
                </ol>
                </p>
              </div>
          </div>
          <div className="column">
            <h1 className="column-title">Dónde aparcar</h1>
            <div className="grid-item">
              <h2>Basílica Pontificia de San Miguel</h2>
              <p><ul>
                  <li>Plaza de Oriente, 1 (a 7 mins andando)</li>
                  <li>Felipe III, 11 (a 7 mins andando)</li>
                  <li> Plaza de las Descalzas, s/n (a 10 mins andando)</li>
                </ul></p>
            </div>
            <div className="grid-item">
              <h2>Cortijo de Mónico</h2>
              <p>Dentro de la finca hay un parking con capacidad para 300 vehículos</p>
            </div>
          </div>
        </div>
        <div className="single-grid-item">
          <p>Nuestro mejor regalo es vuestra compañía. <br /> Pero si además queréis colaborar en <br /> el proyecto de vida que vamos a empezar, <br />
          podéis hacerlo a través de la siguiente cuenta:
            <br></br>ES77 0182 5322 2502 0848 4978 <br></br>
            ¡Muchísimas Gracias!
          </p>
        </div>
        </div>

    </section>
    </main>
    </div>
  );
};

export default FormPage;
