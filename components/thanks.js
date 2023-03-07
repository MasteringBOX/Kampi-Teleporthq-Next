import React from 'react'

import PropTypes from 'prop-types'

const Thanks = (props) => {
  return (
    <>
      <div className={`thanks-hero ${props.rootClassName} `}>
        <div className="thanks-hero-text-container">
          <h1 className="thanks-heading">{props.Heading}</h1>
          <span className="thanks-text">
            ¡Gracias por reservar Kampi! Pronto nos pondremos en contacto
            contigo para confirmar la reserva y contarte más sobre Kampi
          </span>
          <a
            href="https://www.kampi.es/#galeria"
            target="_blank"
            rel="noreferrer noopener"
            className="thanks-cta-btn Anchor button reservar"
          >
            {props.Cta_btn}
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .thanks-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/deladocortada%20%5B1%5D-1500h.jpg');
          }
          .thanks-hero-text-container {
            width: 600px;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            margin-top: 100px;
            align-items: center;
            margin-left: 0px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .thanks-heading {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .thanks-text {
            color: var(--dl-color-gray-500);
            text-align: center;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .thanks-cta-btn {
            color: var(--dl-color-gray-white);
            align-self: stretch;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .thanks-root-class-name {
            margin-top: 0px;
            margin-bottom: 0px;
          }
          @media (max-width: 991px) {
            .thanks-hero {
              flex-direction: column;
              justify-content: center;
            }
            .thanks-hero-text-container {
              margin-top: 0px;
              margin-left: 0px;
            }
            .thanks-text {
              text-align: justify;
            }
            .thanks-cta-btn {
              width: 40%;
            }
          }
          @media (max-width: 767px) {
            .thanks-heading {
              font-size: 28px;
              text-align: center;
            }
            .thanks-text {
              text-align: justify;
            }
            .thanks-cta-btn {
              width: auto;
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .thanks-hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .thanks-hero-text-container {
              width: 100%;
              margin-top: 0px;
              justify-content: center;
            }
            .thanks-text {
              text-align: justify;
            }
          }
        `}
      </style>
    </>
  )
}

Thanks.defaultProps = {
  Cta_btn: 'Ver Fotos de Kampi',
  Heading: 'Solicitud de Alquiler enviada',
  rootClassName: '',
}

Thanks.propTypes = {
  Cta_btn: PropTypes.string,
  Heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Thanks
