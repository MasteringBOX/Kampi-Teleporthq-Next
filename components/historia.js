import React from 'react'

import PropTypes from 'prop-types'

const Historia = (props) => {
  return (
    <>
      <div id="historia" className="historia-historia">
        <div className="historia-heading-container">
          <h2 className="historia-text Section-Heading">{props.heading}</h2>
          <span className="historia-secondary-text Section-Text">
            {props.secondary_text}
          </span>
          <a href="#contact" className="historia-cta-btn button Anchor">
            {props.cta_btn1}
          </a>
        </div>
        <div className="historia-text-container">
          <span className="historia-text01">
            <span>
              Hola! Me llamo Dídac y durante un año y medio he montado esta
              camper para poder viajar sin limitaciones.
            </span>
            <br></br>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              Habiendo viajado en autocaravanas y campers de alquiler, siempre
              he sentido que a cada una le faltaban cosas y que había mucho
              margen de mejora. 
            </span>
            <br></br>
            <br></br>
            <span>
              Emprendí el viaje de diseñar y crear una camper desde 0. Compré a
              lo que pronto se convertiría en Kampi. Una Peugeot Boxer L3H2 con
              130CV. 
            </span>
            <br></br>
            <br></br>
            <span>
              Mucha imaginación, mucho ingenio y trabajo para conseguir que todo
              funcione como siempre había deseado.
            </span>
            <br></br>
            <br></br>
            <span>
              Equipada con todo lo que quiero en mi viaje, para que la disfrutes
              en el tuyo.
            </span>
            <br className="Section-Text"></br>
            <br className="Section-Text"></br>
          </span>
        </div>
        <a href="#contactForm" className="historia-cta-btn1 Anchor button">
          {props.cta_btn}
        </a>
      </div>
      <style jsx>
        {`
          .historia-historia {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            scroll-margin-top: 80px;
          }
          .historia-heading-container {
            width: 35%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .historia-text {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .historia-secondary-text {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .historia-cta-btn {
            color: var(--dl-color-gray-white);
            width: 80%;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .historia-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .historia-text01 {
            color: var(--dl-color-gray-500);
            text-align: justify;
          }
          .historia-cta-btn1 {
            color: var(--dl-color-gray-white);
            width: 80%;
            display: none;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          @media (max-width: 991px) {
            .historia-historia {
              flex-direction: column;
            }
            .historia-heading-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .historia-cta-btn {
              width: 40%;
              display: none;
            }
            .historia-text-container {
              width: 100%;
            }
            .historia-cta-btn1 {
              width: 280px;
              display: block;
              align-self: center;
              margin-top: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .historia-historia {
              align-items: center;
            }
            .historia-heading-container {
              align-items: center;
            }
            .historia-text {
              text-align: center;
            }
            .historia-secondary-text {
              text-align: center;
            }
            .historia-cta-btn1 {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .historia-historia {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .historia-secondary-text {
              text-align: center;
            }
            .historia-cta-btn1 {
              align-self: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Historia.defaultProps = {
  heading: '¿Cual es la Historia de Kampi?',
  secondary_text:
    ' Empezó como un proyecto personal y se ha convertido en una pasión.',
  cta_btn: 'Preguntame',
  cta_btn1: 'Preguntame',
}

Historia.propTypes = {
  heading: PropTypes.string,
  secondary_text: PropTypes.string,
  cta_btn: PropTypes.string,
  cta_btn1: PropTypes.string,
}

export default Historia
