import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div className={`hero-hero ${props.rootClassName} `}>
        <div className="hero-hero-text-container">
          <h1 className="hero-heading">{props.Heading}</h1>
          <span className="hero-text">
            <span>
              Diseñada con un concepto de autonomía máxima.  Con Placas solares,
              batería de litio de 200Ah y Gas GLP recargable para la cocina y el
              calentador de agua. 2 tanques de aguas limpias y dos de grises.
            </span>
            <br></br>
            <br></br>
            <span>
              Pensado para no tener que parar por campings si no lo deseas, y
              con todas las comodidades posibles. Y si tienes mascotas, son
              bienvenidas!
            </span>
          </span>
          <button type="button" className="hero-cta-btn button reservar Anchor">
            {props.Cta_btn}
          </button>
        </div>
        <div className={'hero-image'}>
        <Image
          alt={props.Image_alt}
          src="/playground_assets/francia%20con%20sarah-1500w.jpg"
          width={0}
          height={0}
          priority
          style={{width:"100%", height:"auto", objectFit: "contain", borderRadius: "var(--dl-radius-radius-radius4)"}}
        />
        </div>
      </div>
      <style jsx>
        {`
          .hero-hero {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .hero-hero-text-container {
            width: 35%;
            display: flex;
            align-items: flex-start;
            margin-left: 50px;
            flex-direction: column;
          }
          .hero-heading {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .hero-text {
            color: var(--dl-color-gray-500);
            text-align: justify;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .hero-cta-btn {
            color: var(--dl-color-gray-white);
            align-self: stretch;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .hero-image {
            width: 50%;
            object-fit: contain;
            border-radius: var(--dl-radius-radius-radius4);
          }

          @media (max-width: 991px) {
            .hero-hero {
              flex-direction: column-reverse;
            }
            .hero-hero-text-container {
              width: 80%;
              margin-left: 0px;
            }
            .hero-text {
              text-align: justify;
            }
            .hero-cta-btn {
              width: 40%;
            }
            .hero-image {
              width: 80%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .hero-heading {
              text-align: center;
            }
            .hero-text {
              text-align: justify;
            }
            .hero-cta-btn {
              width: auto;
              align-self: center;
            }
            .hero-root-class-name {
              margin-top: 0px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 479px) {
            .hero-hero-text-container {
              width: 100%;
            }
            .hero-text {
              text-align: justify;
            }
            .hero-root-class-name {
              margin-top: 0px;
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  Image_alt: 'image',
  link_Cta_btn: 'https://www.kampi.es/#ContactForm',
  rootClassName: '',
  Heading: 'El Viaje de tus sueños con Kampi',
  Image_src: 'b13c8692-0efa-46b3-9beb-9713905dda76',
  Cta_btn: 'Reservar',
}

Hero.propTypes = {
  Image_alt: PropTypes.string,
  link_Cta_btn: PropTypes.string,
  rootClassName: PropTypes.string,
  Heading: PropTypes.string,
  Image_src: PropTypes.string,
  Cta_btn: PropTypes.string,
}

export default Hero
