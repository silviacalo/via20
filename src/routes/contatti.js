import React from 'react';

const Contatti = () => {

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="section__title">
                Contatti
                <span className="under-title"></span>
              </h1>
              <div class="row">
                <div class="col-md-6">
                  <div className="section__info">
                    <div><strong>Orari:</strong></div>
                    <div>Lunedì-Sabato: 9-12.30/ 15.30-19.00</div>
                    <div>Domenica: 10-12.30/ 15.30-19.00</div>
                  </div>
                  <div className="section__info">
                    <div><strong>Telefono:</strong></div>
                    <div>0373-81904</div>
                    <div><strong>Cellulare:</strong></div>
                    <div>+39 351 743 3312</div>
                  </div>
                  <div className="section__info mb-5 mb-md-0">
                    <div><strong>Indirizzo:</strong></div>
                    <div>Via XX Settembre, 74. 26013, Crema (CR)</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div className="section__info">
                    <div class="embed-responsive embed-responsive-4by3">
                      <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2209.0541118721453!2d9.682378280863237!3d45.3608811744007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47813b38972a9ff9%3A0xe41d4bee575eb459!2sVia%2020!5e0!3m2!1sit!2sit!4v1599402232470!5m2!1sit!2sit"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

}

export default Contatti;