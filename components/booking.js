import React from 'react'

import PropTypes from 'prop-types'

const Booking = (props) => {
  return (
    <>
      <div className={`booking-container ${props.rootClassName} `}>
        <form
          action="https://formsubmit.co/6a36b53216d02edfc1b6be1c751dcab8"
          method="POST"
          enctype="application/x-www-form-urlencoded"
          className="booking-form"
        >
          <h2 className="booking-text">{props.heading}</h2>
          <span className="booking-text1 Section-Text">{props.dates}</span>
          <span className="booking-text2 Section-Text">{props.price}</span>
          <input
            type="text"
            name="name"
            placeholder={props.textinput_placeholder11}
            className="input"
          />
          <select>
            <option value="100km" selected>
              100Km por día (incluido)
            </option>
            <option value="200km">200Km por día</option>
            <option value="300Km">300Km por día</option>
            <option value="Kmilimitados">Kilometraje ilimitado</option>
          </select>
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            className="input"
          />
          <input
            type="hidden"
            name="price"
            placeholder={props.textinput_placeholder111}
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
            type="hidden"
            name="from"
            multiple="email"
            placeholder={props.email}
            className="input"
          />
          <input
            type="hidden"
            name="to"
            multiple="email"
            placeholder={props.email1}
            className="input"
          />
          <textarea
            name="mensaje"
            placeholder={props.messagePlaceHolder}
            className="textarea"
          ></textarea>
          <button type="submit" className="booking-cta-btn button Anchor">
            {props.Cta_btn}
          </button>
        </form>
      </div>
      <style jsx>
        {`
          .booking-container {
            display: flex;
            position: relative;
          }
          .booking-form {
            gap: var(--dl-space-space-doubleunit);
            width: 100%;
            height: auto;
            display: flex;
            padding-right: 0px;
            flex-direction: column;
          }
          .booking-text {
            font-size: 24px;
            font-family: Roboto;
            font-weight: 700;
            line-height: 1.22;
            text-transform: none;
            text-decoration: none;
          }
          .booking-text1 {
            color: var(--dl-color-gray-500);
          }
          .booking-text2 {
            color: var(--dl-color-gray-500);
          }
          .booking-cta-btn {
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
            .booking-cta-btn {
              width: 40%;
            }
          }
          @media (max-width: 767px) {
            .booking-cta-btn {
              width: auto;
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .booking-form {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Booking.defaultProps = {
  messagePlaceHolder: 'Cuéntanos un poco de tí y de tu viaje',
  rootClassName: '',
  email: 'Email',
  heading: 'Detalles de la Reserva',
  textinput_placeholder: 'placeholder',
  price: 'El precio del alquiler son 598€',
  email1: 'Email',
  textinput_placeholder111: 'Nombre',
  dates: 'Del 28 de Febrero hasta el 4 de Marzo',
  Cta_btn: 'Reservar',
  textinput_placeholder11: 'Nombre',
  textinput_placeholder112: 'Nombre',
}

Booking.propTypes = {
  messagePlaceHolder: PropTypes.string,
  rootClassName: PropTypes.string,
  email: PropTypes.string,
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  price: PropTypes.string,
  email1: PropTypes.string,
  textinput_placeholder111: PropTypes.string,
  dates: PropTypes.string,
  Cta_btn: PropTypes.string,
  textinput_placeholder11: PropTypes.string,
  textinput_placeholder112: PropTypes.string,
}

export default Booking
