import React from 'react';
import basilicaImage from '../images/basilica.jpg';
import cortijoImage from '../images/cortijo.jpeg'

const FormPage = () => {
  return (
    <div className="container">
    <main className="main-content">
      <section>
        <h1>Información General</h1>
        <p>Toda la información que necesitas saber para la boda.</p>
        <section className="ceremonia">
          <div className="text-left">
            <h1>Ceremonia</h1>
            <p>13.30h Basílica Pontificia de San Miguel</p>
            <p>C. de San Justo, 4, Centro, 28005 Madrid</p>
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
            <p>Carretera de Villanueva del Pardillo M-851, Km. 1.5.<br />28222 Majadahonda, Madrid</p>
          </div>
        </section>


        <section className="single-info">
          
        </section>
      </section>
    </main>
    </div>
  );
};

export default FormPage;
