import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

const HeroReverse = (props) => {
  return (
    <>
      <div className="hero-reverse-hero">
        <div className={"hero-reverse-image"}>
        <Image
          alt={props.Image_alt}
          src={props.Image_src}
          width={0}
          height={0}
          loading="lazy"
          style={{width:"100%", height: "auto", objectFit: "contain", borderRadius: "var(--dl-radius-radius-radius4)"}}
        />
        </div>
        <div className="hero-reverse-hero-text-container">
          <h1 className="hero-reverse-heading">{props.Heading}</h1>
          <span className="hero-reverse-text">
            <span>
              Equipada con todo lo necesario para viajar a cualquier rincón,
              disfrutar de la naturaleza, irte a esquiar, con las bicis, de
              ruta, o lo que se te ocurra.
            </span>
            <br></br>
          </span>
          <button className="hero-reverse-cta-btn button reservar Anchor">
            {props.Cta_btn}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .hero-reverse-hero {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-self: center;
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
          .hero-reverse-image {
            width: 50%;
            object-fit: contain;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .hero-reverse-hero-text-container {
            width: 35%;
            display: flex;
            margin-left: 0px;
            margin-right: 50px;
            flex-direction: column;
          }
          .hero-reverse-heading {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .hero-reverse-text {
            color: var(--dl-color-gray-500);
            text-align: justify;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .hero-reverse-cta-btn {
            color: var(--dl-color-gray-white);
            align-self: stretch;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          @media (max-width: 991px) {
            .hero-reverse-hero {
              margin-top: 0px;
              margin-bottom: 0px;
              flex-direction: column-reverse;
            }
            .hero-reverse-image {
              width: 80%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .hero-reverse-hero-text-container {
              width: 80%;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .hero-reverse-text {
              text-align: justify;
            }
            .hero-reverse-cta-btn {
              width: 40%;
            }
          }
          @media (max-width: 767px) {
            .hero-reverse-heading {
              text-align: center;
            }
            .hero-reverse-text {
              text-align: justify;
            }
            .hero-reverse-cta-btn {
              width: auto;
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .hero-reverse-image {
              width: 100%;
            }
            .hero-reverse-hero-text-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .hero-reverse-text {
              text-align: justify;
            }
          }
        `}
      </style>
    </>
  )
}

HeroReverse.defaultProps = {
  Cta_btn: 'Reservar',
  Heading: 'Explora con Kampi',
  Image_src: '/playground_assets/img_86961-1500w.jpg',
  Image_alt: 'image',
}

HeroReverse.propTypes = {
  Cta_btn: PropTypes.string,
  Heading: PropTypes.string,
  Image_src: PropTypes.string,
  Image_alt: PropTypes.string,
}

export default HeroReverse
