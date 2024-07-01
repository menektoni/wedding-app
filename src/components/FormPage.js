import React from 'react';

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
            <img src="/images/basilica.jpg" alt="Imagen de la Basilica" />
          </div>

        </section>
      </section>
    </main>
    </div>
  );
};

export default FormPage;
