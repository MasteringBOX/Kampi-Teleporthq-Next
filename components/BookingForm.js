import React, {useRef, useState} from 'react'

import PropTypes, {number} from 'prop-types'

import PriceDateRangePicker from "./PriceDateRangePicker.tsx";
import DateSelect from "./DateSelect";

const BookingForm = (props) => {

    const [price, setPrice] = useState(0);

    function handlePriceChange(price) {
        setPrice(price);
    }

    /** This is not necessary */
    function handleSubmit(e) {

        const day = e.target.day.value;
        const month = e.target.month.value;
        const year = e.target.year.value;
        const nombre = e.target.nombre.value;
        const apellidos = e.target.apellidos.value;

        if (!day || !month || !year) {
            alert("Por Favor Selecciona la Fecha de Nacimiento del Conductor");
            e.preventDefault();
        }

        if (!nombre || !apellidos) {
            alert("Por Favor rellena todos tus datos");
            e.preventDefault();
        }
    }

    return (
        <>
        <div className="reserva-kampi-container">
            <svg viewBox="0 0 1024 1024" className="reserva-kampi-icon" onClick={props.onCloseSidebar}>
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
            <h2 className="Section-Heading reserva-kampi-text">{props.heading}</h2>
            <form
                action="https://formsubmit.co/6a36b53216d02edfc1b6be1c751dcab8"
                method="POST"
                onSubmit={handleSubmit}
                encType="application/x-www-form-urlencoded"
                className="reserva-kampi-form"
            >
                <PriceDateRangePicker price={price} onPriceChange={handlePriceChange}></PriceDateRangePicker>
                <div className={price === 0 ? "reserva-kampi-disabled-without-price disabled" : "reserva-kampi-disabled-without-price"}>
                <DateSelect></DateSelect>
                <label className="reserva-kampi-text-bold">{props.text2}</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder={props.textinput_placeholder}
                    className="input"
                    required
                    onInvalid={(e) => { e.target.setCustomValidity('Introduce tu nombre') }}
                    onChange={(e) => { e.target.setCustomValidity('') }}
                />
                <input
                    type="text"
                    name="apellidos"
                    id="apellidos"
                    required
                    placeholder={props.textinput_placeholder1}
                    className="input"
                    onInvalid={(e) => { e.target.setCustomValidity('Introduce tus apellidos') }}
                    onChange={(e) => { e.target.setCustomValidity('') }}
                />
                <input
                    type="text"
                    name="email"
                    required
                    placeholder={props.textinput_placeholder2}
                    className="input"
                    onInvalid={(e) => { e.target.setCustomValidity('Introduce tu email') }}
                    onChange={(e) => { e.target.setCustomValidity('') }}
                />
                <input
                    type="number"
                    name="telefono"
                    required
                    placeholder={props.textinput_placeholder3}
                    className="input"
                    onInvalid={(e) => { e.target.setCustomValidity('Necesitamos tu teléfono para confirmar la reserva') }}
                    onChange={(e) => { e.target.setCustomValidity('') }}
                />
                <input
                    type="hidden"
                    id="_next"
                    name="_next"
                    value="https://www.kampi.es/thankyou"
                    placeholder={props.textinput_placeholder5}
                    className="input"
                />
                <textarea
                    name="mensaje"
                    placeholder={props.textarea_placeholder}
                    className="textarea"
                    required
                    onInvalid={(e) => { e.target.setCustomValidity('¡Cuéntanos un poco sobre tu viaje!') }}
                    onChange={(e) => { e.target.setCustomValidity('') }}
                ></textarea>
                <button type="submit" className="reserva-kampi-cta-btn button Anchor">
                    {props.Cta_btn}
                </button>
                    <span className="reserva-kampi-text06 Card-Text">No se realiza ningún cargo en este momento</span>
                </div>
            </form>
        </div>
            <style jsx>
                {`
                .reserva-kampi-container {
                    width: 500px;
                    display: flex;
                    position: relative;
                    align-items: center;
                    flex-direction: column;
                }
                
                .Section-Heading{
                    margin-bottom: 16px;
                }
                
                .reserva-kampi-disabled-without-price {
                    all: inherit;
                }
                .reserva-kampi-container-gap {
                    gap: var(--dl-space-space-doubleunit);
                    display: flex;
                    flex-direction: column;
                }
                .reserva-kampi-icon {
                    left: 0;
                    width: 32px;
                    height: auto;
                    position: absolute;
                    cursor:pointer;
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
                .reserva-kampi-text-bold {
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
                    font-family: Open Sans;
                    font-weight: 700;
                    line-height: 1.22;
                    text-transform: none;
                    text-decoration: none;
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
                
                .disabled {
                    pointer-events: none;
                    opacity: 0.5;
                }
                .wrapper {
                    width: 550px;
                    padding:30px;
                }
                @media(max-width: 991px) {
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
                }
                @media(max-width: 767px) {
                    .reserva-kampi-text {
                        font-size: 24px;
                        font-family: Open Sans;
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
                @media(max-width: 550px) {
                
                    .reserva-kampi-container {
                        width: 100%;
                    }
                
                    .wrapper {
                        width: 100%;
                        padding: 20px;
                    }
                }
                @media(max-width: 479px) {
                
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

BookingForm.defaultProps = {
    heading: 'Reserva Kampi',
    image_src:
        '/playground_assets/screenshot%202023-03-02%20at%2009.52.51-200h.png',
    image_alt: 'image',
    text: 'Opción de Kilometraje',
    text1: 'Fecha de Nacimiento del Conductor',
    text2: 'Datos del Conductor',
    textinput_placeholder: 'Nombre',
    textinput_placeholder1: 'Apellidos',
    textinput_placeholder2: 'Email',
    textinput_placeholder3: 'Teléfono',
    textinput_placeholder4: 'Nombre',
    textinput_placeholder5: 'placeholder',
    textinput_placeholder6: 'Email',
    textinput_placeholder7: 'Email',
    textarea_placeholder: 'Cuéntanos un poco de tí y de tu viaje',
    Cta_btn: 'Solicitud de Alquiler',
    text3: 'Precio de la reserva',
    text4: '754€ para 9 días',
    text5: 'A partir de las 9h',
    text6: 'A partir de las 14h',
    text7: 'Hasta las 12h',
    text8: 'Hasta las 20h',
}

BookingForm.propTypes = {
    heading: PropTypes.string,
    image_src: PropTypes.string,
    image_alt: PropTypes.string,
    text: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    textinput_placeholder: PropTypes.string,
    textinput_placeholder1: PropTypes.string,
    textinput_placeholder2: PropTypes.string,
    textinput_placeholder3: PropTypes.string,
    textinput_placeholder4: PropTypes.string,
    textinput_placeholder5: PropTypes.string,
    textinput_placeholder6: PropTypes.string,
    textinput_placeholder7: PropTypes.string,
    textarea_placeholder: PropTypes.string,
    Cta_btn: PropTypes.string,
    text5: PropTypes.string,
    text6: PropTypes.string,
    text7: PropTypes.string,
    text8: PropTypes.string,
}

export default BookingForm
