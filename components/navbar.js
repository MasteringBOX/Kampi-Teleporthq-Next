import React from 'react'

import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <div
        data-role="Header"
        className={`navbar-navbar-container ${props.rootClassName} `}
      >
        <div className="navbar-navbar">
          <div className="navbar-logo">
            <img
              alt={props.Image_alt}
              src={props.Image_src}
              className="navbar-image"
            />
          </div>
          <div className="navbar-links-container">
            <a href="#features" className="navbar-link Anchor">
              {props.Link}
            </a>
            <a href="#pricing" className="navbar-link1">
              {props.Link1}
            </a>
            <a href="#historia" className="navbar-link2 Anchor">
              {props.Link2}
            </a>
            <a href="#opiniones" className="navbar-link3 Anchor">
              {props.Link3}
            </a>
            <a href="#contact" className="navbar-link4 Anchor">
              {props.Link4}
            </a>
          </div>
          <div className="navbar-cta-container">
            <button className="navbar-cta-btn Anchor button reservar">
              {props.Cta_btn}
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .navbar-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .navbar-logo {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .navbar-image {
            width: 50px;
            object-fit: cover;
          }
          .navbar-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .navbar-link {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .navbar-link1 {
            font-size: 18px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .navbar-link2 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .navbar-link3 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .navbar-link4 {
            text-decoration: none;
          }
          .navbar-cta-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-cta-btn {
            color: var(--dl-color-gray-white);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: 34px;
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-100);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }

          @media (max-width: 767px) {
            .navbar-links-container {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .navbar-cta-btn {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  Image_alt: 'image',
  Link4: 'Contacto',
  Link2: 'Historia',
  Link1: 'Tarifas',
  Image_src: '/playground_assets/logo-no-background.svg',
  rootClassName: '',
  Link: 'Kampi',
  Cta_btn: 'Reservar',
  Link3: 'Opiniones',
}

Navbar.propTypes = {
  Image_alt: PropTypes.string,
  Link4: PropTypes.string,
  Link2: PropTypes.string,
  Link1: PropTypes.string,
  Image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Link: PropTypes.string,
  Cta_btn: PropTypes.string,
  Link3: PropTypes.string,
}

export default Navbar
