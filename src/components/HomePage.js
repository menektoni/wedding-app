import React from 'react';

const HomePage = () => {
  return (
    <div className="container whole-page">
        <main className="main-content">
            <section class="body-position">
                <section class="body-characteristics">    
                    <h1>Boda 
                        <br class="small-spacing"></br>
                        Cata y Toni
                    </h1>

                    <p>23 de Noviembre 2024</p>
                </section>
            </section>

            <div className="footer-button-container">
                <button class="button-rellenar-formulario" href="https://docs.google.com/forms/d/e/1FAIpQLSfYdZvGtpAmY0NaVLHxMSEa2zTeTRG5HTqYgXPl-lvYf_c0eQ/viewform?usp=sf_link">
                    Rellenar Formulario
                </button>
            </div>
        </main>
    </div>
  );
};

export default HomePage;
