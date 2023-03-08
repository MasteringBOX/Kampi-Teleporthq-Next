import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className={`feature-card-feature-card ${props.rootClassName} `}>
        <next/image
          alt={props.image_alt1}
          src={props.image_src1}
          loading="lazy"
          className="feature-card-image"
        />
        <span className="feature-card-heading Card-Heading">
          {props.Heading1}
        </span>
        <span className="feature-card-text">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .feature-card-feature-card {
            width: 30%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .feature-card-image {
            width: 100%;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: 20px;
          }
          .feature-card-heading {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .feature-card-text {
            color: var(--dl-color-gray-500);
            text-align: justify;
          }

          @media (max-width: 1200px) {
            .feature-card-image {
              width: 100%;
            }
            .feature-card-root-class-name {
              width: 30%;
            }
            .feature-card-root-class-name1 {
              width: 30%;
            }
            .feature-card-root-class-name2 {
              width: 30%;
            }
            .feature-card-root-class-name3 {
              width: 30%;
            }
            .feature-card-root-class-name4 {
              width: 30%;
            }
            .feature-card-root-class-name5 {
              width: 30%;
            }
            .feature-card-root-class-name6 {
              width: 30%;
            }
            .feature-card-root-class-name7 {
              width: 30%;
            }
          }
          @media (max-width: 991px) {
            .feature-card-image {
              width: 100%;
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .feature-card-feature-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 479px) {
            .feature-card-feature-card {
              width: 100%;
              height: auto;
            }
            .feature-card-image {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  Heading1: 'Cocina Funcional',
  rootClassName: '',
  image_alt1: 'image',
  text1:
    'Cocina amplia y fácil de usar. Con 2 mesas auxiliares para cocinar,  fregadero grande y grifo extraible. Cocina de gas, nevera amplia con congelador.',
  image_src1: '/playground_assets/img_7281%202-1500w.jpg',
}

FeatureCard.propTypes = {
  Heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default FeatureCard
