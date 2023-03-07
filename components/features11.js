import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard from './feature-card'

const Features11 = (props) => {
  return (
    <>
      <div id="features" className="features11-features">
        <div className="features11-heading-container">
          <div className="features11-container">
            <div className="features11-container1">
              <h1 className="features11-text Section-Heading">
                {props.heading}
              </h1>
            </div>
            <div className="features11-container2">
              <img
                alt={props.image_alt6}
                src={props.image_src6}
                className="features11-image"
              />
            </div>
            <div className="features11-container3"></div>
          </div>
          <span className="features11-text1 Section-Text">{props.Text}</span>
        </div>
        <div className="features11-cards-container">
          <FeatureCard
            text1="Dos amplios y cómodos sofás. Con una mesa principal extraible donde pueden comer 4. Mucho almacenamiento útil y accesible. Con 20 cajoneras y 4 muebles altos."
            Heading1="Amplio Comedor"
            image_src1="/playground_assets/img_7287-1500w.jpg"
            rootClassName="feature-card-root-class-name2"
          ></FeatureCard>
          <FeatureCard></FeatureCard>
          <FeatureCard
            text1="Ducha amplia, con agua caliente y regulador termostático para que esté a la temperatura perfecta. WC sin olores, facil de usar y vaciar. Jabonera, colgadores, cajón y cesto de la ropa sucia integrado."
            Heading1="Cómodo Baño"
            image_src1="/playground_assets/img_87961-1500w.jpg"
          ></FeatureCard>
        </div>
        <div className="features11-cards-container1">
          <FeatureCard
            text1="Cama amplia y cómoda con un colchon de alta calidad. No notarás que estas durmiendo en una camper. Cama supletoria juntando los dos sofás."
            Heading1="Dulces Sueños"
            image_src1="/playground_assets/img_69781-1500w.jpg"
            rootClassName="feature-card-root-class-name3"
          ></FeatureCard>
          <FeatureCard
            text1="Internet 4G WIFI con antena para que puedas conectarte donde Sea. TV con Antena TDT, HBO y Amazon Prime. Enchufes 220V hasta 1200w y Tomas USB/USB-C. Luces LED y tiras led regulables en intensidad."
            Heading1="Entretenimiento y Confort"
            image_src1="https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fHNtYXJ0JTIwdHYlMjBuZXRmbGl4fGVufDB8fHx8MTY3ODA5OTM5Mw&amp;ixlib=rb-4.0.3&amp;w=1500"
          ></FeatureCard>
          <FeatureCard
            text1="Donde y cuando sea estarás a gusto. Buena ventilación en Verano y calefacción en Invierno. Con 2 claraboyas y 4 Ventanas con Mosquitera y Oscurecedor. Para difrutar fuera tiene un toldo de 4 metros y una mesa plegable con sillas."
            Heading1="Anywere, Anytime"
            image_src1="/playground_assets/img_2417-1500w.jpg"
          ></FeatureCard>
        </div>
      </div>
      <style jsx>
        {`
          .features11-features {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            scroll-margin-top: 80px;
          }
          .features11-heading-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .features11-container {
            gap: 0;
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            align-self: center;
            text-align: center;
            align-items: center;
            justify-content: center;
          }
          .features11-container1 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .features11-text {
            display: flex;
          }
          .features11-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features11-image {
            width: 150px;
            height: 150px;
            object-fit: cover;
          }
          .features11-container3 {
            flex: 0 0 auto;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features11-text1 {
            color: var(--dl-color-gray-500);
            width: 50%;
            margin-top: var(--dl-space-space-doubleunit);
            text-align: justify;
            margin-left: 0px;
            margin-right: 0px;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
          }
          .features11-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .features11-cards-container1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .features11-cards-container {
              align-items: flex-start;
              justify-content: space-between;
            }
            .features11-cards-container1 {
              align-items: flex-start;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .features11-heading-container {
              width: 100%;
            }
            .features11-container1 {
              width: 0px;
            }
            .features11-text {
              display: none;
            }
            .features11-container3 {
              width: 0px;
            }
            .features11-text1 {
              width: 70%;
            }
            .features11-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .features11-cards-container1 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .features11-text {
              display: none;
            }
            .features11-text1 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Features11.defaultProps = {
  Text: 'Una Camper hecha a mano con amor. Diseñada hasta el último detalle para que sea cómoda, espaciosa, funcional y divertida.',
  heading: 'Así es',
  image_src6: '/playground_assets/logo-no-background.svg',
  image_alt6: 'image',
}

Features11.propTypes = {
  Text: PropTypes.string,
  heading: PropTypes.string,
  image_src6: PropTypes.string,
  image_alt6: PropTypes.string,
}

export default Features11
