import React from 'react'

import PropTypes from 'prop-types'

const ContactForm = (props) => {
  return (
    <>
      <div
        id="contactForm"
        className={`contact-form-container ${props.rootClassName} `}
      >
        <div className="contact-form-container1">
          <next/image
            alt={props.image_alt}
            src={props.image_src}
            className="contact-form-image"
          />
        </div>
        <form
          action="https://formsubmit.co/6a36b53216d02edfc1b6be1c751dcab8"
          method="POST"
          enctype="application/x-www-form-urlencoded"
          className="contact-form-form"
        >
          <h2 className="Section-Heading">{props.heading}</h2>
          <input
            type="text"
            name="nombre"
            placeholder={props.textinput_placeholder11}
            className="input"
          />
          <input
            type="hidden"
            id="_next"
            name="_next"
            value="https://kampi.teleporthq.app/#thankyou"
            placeholder={props.textinput_placeholder}
            className="input"
          />
          <input
            type="text"
            name="email"
            multiple="email"
            required
            placeholder={props.email}
            className="input"
          />
          <select
            name="Seleccion"
            type="seleccion"
            className="contact-form-select"
          >
            <option value="Quiero Reservar Kampi">Quiero reservar Kampi</option>
            <option value="Tengo Preguntas Sobre Kampi">
              Tengo preguntas sobre Kampi
            </option>
            <option value="Quiero Dejar un comentario">
              Quiero dejar un comentario sobre Kampi
            </option>
          </select>
          <textarea
            name="mensaje"
            placeholder={props.messagePlaceHolder}
            className="textarea"
          ></textarea>
          <button type="submit" className="contact-form-cta-btn button Anchor">
            {props.Cta_btn}
          </button>
        </form>
      </div>
      <style jsx>
        {`
          .contact-form-container {
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
          .contact-form-container1 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-form-image {
            width: 300px;
            height: 300px;
            object-fit: cover;
          }
          .contact-form-form {
            gap: var(--dl-space-space-doubleunit);
            width: 50%;
            height: auto;
            display: flex;
            padding-right: 0px;
            flex-direction: column;
          }
          .contact-form-select {
            color: var(--dl-color-gray-black);
            padding: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .contact-form-cta-btn {
            color: var(--dl-color-gray-white);
            cursor: pointer;
            align-self: stretch;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          @media (max-width: 991px) {
            .contact-form-select {
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .contact-form-cta-btn {
              width: 40%;
            }
          }
          @media (max-width: 767px) {
            .contact-form-container {
              width: 100%;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              flex-direction: column;
            }
            .contact-form-image {
              width: 150px;
              height: 150px;
            }
            .contact-form-select {
              width: 100%;
              align-self: flex-start;
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-bottom: var(--dl-space-space-unit);
            }
            .contact-form-cta-btn {
              width: auto;
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .contact-form-container {
              width: 100%;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              flex-direction: column;
            }
            .contact-form-container1 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .contact-form-image {
              width: 150px;
              height: 150px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .contact-form-form {
              width: 100%;
            }
            .contact-form-select {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm.defaultProps = {
  textinput_placeholder11: 'Nombre',
  Cta_btn: 'Enviar',
  heading: 'Contacta con Nosotros',
  messagePlaceHolder: 'Dejanos un mensaje',
  email: 'Email',
  textinput_placeholder: 'placeholder',
  image_alt: 'image',
  namePlaceHolder: 'placeholder',
  rootClassName: '',
  image_src: '/playground_assets/logo-no-background.svg',
}

ContactForm.propTypes = {
  textinput_placeholder11: PropTypes.string,
  Cta_btn: PropTypes.string,
  heading: PropTypes.string,
  messagePlaceHolder: PropTypes.string,
  email: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_alt: PropTypes.string,
  namePlaceHolder: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default ContactForm
