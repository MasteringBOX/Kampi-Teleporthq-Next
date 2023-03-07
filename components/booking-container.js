import React from 'react'

import PropTypes from 'prop-types'

import Booking from './booking'

const BookingContainer = (props) => {
  return (
    <>
      <div id="contactForm" className="booking-container-container">
        <div className="booking-container-container1">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="booking-container-image"
          />
        </div>
        <Booking></Booking>
      </div>
      <style jsx>
        {`
          .booking-container-container {
            gap: 0;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            scroll-margin-top: 80px;
          }
          .booking-container-container1 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .booking-container-image {
            width: 300px;
            height: 300px;
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .booking-container-container {
              width: 100%;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 479px) {
            .booking-container-container {
              width: 100%;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              flex-direction: column;
            }
            .booking-container-image {
              width: 150px;
              height: 150px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

BookingContainer.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/logo-no-background.svg',
  image_alt: 'image',
}

BookingContainer.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BookingContainer
