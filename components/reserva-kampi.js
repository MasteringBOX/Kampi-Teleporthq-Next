import React from 'react'

import PropTypes from 'prop-types'

const ReservaKampi = (props) => {
  return (
    <>
      <div className="reserva-kampi-container">
        <svg viewBox="0 0 1024 1024" className="reserva-kampi-icon">
          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
        </svg>
        <h2 className="Section-Heading reserva-kampi-text">{props.heading}</h2>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="reserva-kampi-image"
        />
        <form
          action="https://formsubmit.co/6a36b53216d02edfc1b6be1c751dcab8"
          method="POST"
          enctype="application/x-www-form-urlencoded"
          className="reserva-kampi-form"
        >
          <div className="reserva-kampi-container01">
            <div className="reserva-kampi-container02">
              <div className="reserva-kampi-container03">
                <input
                  type="radio"
                  id="9h"
                  name="horaRecogida"
                  checked
                  htmlFor="HoraRecogida"
                />
                <label htmlFor="9h">{props.text5}</label>
              </div>
              <div className="reserva-kampi-container04">
                <input
                  type="radio"
                  id="14h"
                  name="horaRecogida"
                  htmlFor="horaRecogida"
                />
                <label htmlFor="14h">{props.text6}</label>
              </div>
            </div>
            <div className="reserva-kampi-container05">
              <div className="reserva-kampi-container06">
                <input
                  type="radio"
                  id="12h"
                  name="horaDevolucion"
                  htmlFor="HoraRecogida"
                />
                <label htmlFor="12h">{props.text7}</label>
              </div>
              <div className="reserva-kampi-container07">
                <input type="radio" id="20h" name="horaDevolucion" checked />
                <label htmlFor="20h">{props.text8}</label>
              </div>
            </div>
          </div>
          <label className="reserva-kampi-text05">{props.text}</label>
          <select
            name="kilometraje"
            type="seleccion"
            className="reserva-kampi-select"
          >
            <option value="100Km">100 Km por día (incluído)</option>
            <option value="200km">200 km por día (9,99€ al día)</option>
            <option value="Kmilimitados">
              Kilometraje ilimitado (49,99€ al día)
            </option>
            <option value="300km">300km por día (19,99€ al día)</option>
          </select>
          <div className="reserva-kampi-container08">
            <span className="reserva-kampi-text06 Card-Text">
              {props.text3}
            </span>
            <span className="reserva-kampi-text07">{props.text4}</span>
          </div>
          <label className="reserva-kampi-text08">{props.text1}</label>
          <div className="reserva-kampi-container09">
            <select
              name="edad"
              type="seleccion"
              className="reserva-kampi-select1"
            >
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">Quiero dejar un comentario sobre Kampi</option>
            </select>
            <select
              name="edad"
              type="seleccion"
              className="reserva-kampi-select2"
            >
              <option value="Enero">Enero</option>
              <option value="Febrero">Febrero</option>
              <option value="Marzo">Marzo</option>
            </select>
            <select
              name="edad"
              type="seleccion"
              className="reserva-kampi-select3"
            >
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
            </select>
          </div>
          <label className="reserva-kampi-text09">{props.text2}</label>
          <input
            type="text"
            name="name"
            placeholder={props.textinput_placeholder}
            className="input"
          />
          <input
            type="text"
            name="apellidos"
            placeholder={props.textinput_placeholder1}
            className="input"
          />
          <input
            type="text"
            name="email"
            placeholder={props.textinput_placeholder2}
            className="input"
          />
          <input
            type="text"
            name="telefono"
            placeholder={props.textinput_placeholder3}
            className="input"
          />
          <input
            type="hidden"
            name="price"
            placeholder={props.textinput_placeholder4}
            className="input"
          />
          <input
            type="hidden"
            id="_next"
            name="_next"
            value="https://kampi.teleporthq.app/#thankyou"
            placeholder={props.textinput_placeholder5}
            className="input"
          />
          <input
            type="hidden"
            name="from"
            multiple="email"
            placeholder={props.textinput_placeholder6}
            className="input"
          />
          <input
            type="hidden"
            name="to"
            multiple="email"
            placeholder={props.textinput_placeholder7}
            className="input"
          />
          <textarea
            name="mensaje"
            placeholder={props.textarea_placeholder}
            className="textarea"
          ></textarea>
          <button type="submit" className="reserva-kampi-cta-btn Anchor button">
            {props.Cta_btn}
          </button>
        </form>
      </div>
      <style jsx>
        {`
          .reserva-kampi-container {
            gap: var(--dl-space-space-doubleunit);
            width: 500px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .reserva-kampi-icon {
            left: 0;
            width: 32px;
            height: auto;
            position: absolute;
          }
          .reserva-kampi-image {
            width: 520px;
            object-fit: cover;
          }
          .reserva-kampi-form {
            gap: var(--dl-space-space-doubleunit);
            width: 100%;
            height: auto;
            display: flex;
            padding-right: 0px;
            flex-direction: column;
          }
          .reserva-kampi-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .reserva-kampi-container02 {
            gap: var(--dl-space-space-doubleunit);
            flex: 0 0 auto;
            width: 50%;
            height: 100px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .reserva-kampi-container03 {
            gap: var(--dl-space-space-doubleunit);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
          }
          .reserva-kampi-container04 {
            gap: var(--dl-space-space-doubleunit);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
          }
          .reserva-kampi-container05 {
            gap: var(--dl-space-space-doubleunit);
            flex: 0 0 auto;
            width: 50%;
            height: 100px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            padding-left: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .reserva-kampi-container06 {
            gap: var(--dl-space-space-doubleunit);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
          }
          .reserva-kampi-container07 {
            gap: var(--dl-space-space-doubleunit);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
          }
          .reserva-kampi-text05 {
            font-weight: bold;
          }
          .reserva-kampi-select {
            color: var(--dl-color-gray-black);
            width: 100%;
            padding: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .reserva-kampi-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: 0px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
          }
          .reserva-kampi-text06 {
            align-self: center;
          }
          .reserva-kampi-text07 {
            font-size: 28px;
            align-self: center;
            font-family: Roboto;
            font-weight: 700;
            line-height: 1.22;
            text-transform: none;
            text-decoration: none;
          }
          .reserva-kampi-text08 {
            font-weight: bold;
          }
          .reserva-kampi-container09 {
            gap: var(--dl-space-space-doubleunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .reserva-kampi-select1 {
            color: var(--dl-color-gray-black);
            width: 80px;
            padding: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .reserva-kampi-select2 {
            color: var(--dl-color-gray-black);
            width: 150px;
            padding: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .reserva-kampi-select3 {
            color: var(--dl-color-gray-black);
            width: 200px;
            padding: var(--dl-space-space-unit);
            align-self: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .reserva-kampi-text09 {
            font-weight: bold;
          }
          .reserva-kampi-cta-btn {
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
            .reserva-kampi-select {
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .reserva-kampi-select1 {
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .reserva-kampi-select2 {
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .reserva-kampi-select3 {
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .reserva-kampi-cta-btn {
              width: 40%;
            }
          }
          @media (max-width: 767px) {
            .reserva-kampi-text {
              margin: 0px;
              font-size: 24px;
              font-family: Roboto;
              font-weight: 700;
              line-height: 1.22;
              text-transform: none;
              text-decoration: none;
            }
            .reserva-kampi-select {
              width: 100%;
              align-self: flex-start;
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-bottom: var(--dl-space-space-unit);
            }
            .reserva-kampi-select1 {
              width: 100%;
              align-self: flex-start;
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-bottom: var(--dl-space-space-unit);
            }
            .reserva-kampi-select2 {
              width: 100%;
              align-self: flex-start;
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-bottom: var(--dl-space-space-unit);
            }
            .reserva-kampi-select3 {
              width: 100%;
              align-self: flex-start;
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-bottom: var(--dl-space-space-unit);
            }
            .reserva-kampi-cta-btn {
              width: auto;
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .reserva-kampi-form {
              width: 100%;
            }
            .reserva-kampi-select {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
            }
            .reserva-kampi-select1 {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
            }
            .reserva-kampi-select2 {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
            }
            .reserva-kampi-select3 {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
            }
          }
        `}
      </style>
    </>
  )
}

ReservaKampi.defaultProps = {
  text1: 'Fecha de Nacimiento del Conductor',
  textinput_placeholder4: 'Nombre',
  text7: 'Hasta las 12h',
  textinput_placeholder7: 'Email',
  text6: 'A partir de las 14h',
  textarea_placeholder: 'Cuéntanos un poco de tí y de tu viaje',
  textinput_placeholder1: 'Apellidos',
  text: 'Opción de Kilometraje',
  image_alt: 'image',
  text3: 'Precio de la reserva',
  Cta_btn: 'Solicitud de Alquiler',
  text2: 'Datos del Conductor',
  image_src:
    '/playground_assets/screenshot%202023-03-02%20at%2009.52.51-200h.png',
  textinput_placeholder5: 'placeholder',
  text8: 'Hasta las 20h',
  textinput_placeholder6: 'Email',
  heading: 'Reserva Kampi',
  textinput_placeholder2: 'Email',
  textinput_placeholder: 'Nombre',
  text4: '754€ para 9 días',
  text5: 'A partir de las 9h',
  textinput_placeholder3: 'Teléfono',
}

ReservaKampi.propTypes = {
  text1: PropTypes.string,
  textinput_placeholder4: PropTypes.string,
  text7: PropTypes.string,
  textinput_placeholder7: PropTypes.string,
  text6: PropTypes.string,
  textarea_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  text3: PropTypes.string,
  Cta_btn: PropTypes.string,
  text2: PropTypes.string,
  image_src: PropTypes.string,
  textinput_placeholder5: PropTypes.string,
  text8: PropTypes.string,
  textinput_placeholder6: PropTypes.string,
  heading: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
}

export default ReservaKampi
