import React from 'react'

import PropTypes from 'prop-types'

const Contact = (props) => {
  return (
    <>
      <div id="contact" className={`contact-contact ${props.rootClassName} `}>
        <div className="contact-container">
          <h2 className="contact-text Section-Heading">{props.heading1}</h2>
          <div className="contact-container1">
            <form
              action="https://formsubmit.co/6a36b53216d02edfc1b6be1c751dcab8"
              method="POST"
              enctype="application/x-www-form-urlencoded"
              className="contact-form"
            >
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
                className="contact-select"
              >
                <option value="Tengo Preguntas Sobre Kampi" selected>
                  Tengo preguntas sobre Kampi
                </option>
                <option value="Quiero Dejar un comentario">
                  Quiero dejar un comentario sobre Kampi
                </option>
                <option value="Quiero Preguntar Sobre la Disponibilidad">
                  Quiero Preguntar Sobre la disponibilidad
                </option>
                <option value="Otro">Otro</option>
              </select>
              <textarea
                name="mensaje"
                placeholder={props.messagePlaceHolder}
                className="textarea"
              ></textarea>
              <button type="submit" className="contact-cta-btn button Anchor">
                {props.Cta_btn}
              </button>
            </form>
            <div className="contact-content-container">
              <div className="contact-locations-container">
                <div className="contact-location-1">
                  <span className="contact-heading">{props.Heading}</span>
                  <div className="contact-adress">
                    <svg viewBox="0 0 1024 1024" className="contact-icon">
                      <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                    </svg>
                    <span className="Section-Text">{props.text}</span>
                  </div>
                  <div className="contact-email">
                    <svg viewBox="0 0 1024 1024" className="contact-icon02">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <a
                      href="mailto:info@kampi.es?subject=Quiero más informacion sobre Kampi"
                      className="contact-link Section-Text"
                    >
                      {props.text1}
                    </a>
                  </div>
                  <div className="contact-phone">
                    <svg
                      viewBox="0 0 804.5714285714286 1024"
                      className="contact-icon04"
                    >
                      <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                    </svg>
                    <span className="Section-Text">{props.text2}</span>
                  </div>
                </div>
              </div>
              <div className="contact-social-links-container">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="contact-icon06"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <a
                  href="https://www.facebook.com/kampivalencia"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="contact-icon08"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                </a>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="contact-icon10"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-contact {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
            background-size: cover;
            justify-content: space-between;
            background-image: url('/playground_assets/screenshot%202023-03-03%20at%2011.10.18%20%5B1%5D-1500w.jpg');
            scroll-margin-top: 80px;
            background-position: center;
          }
          .contact-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text {
            align-self: center;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .contact-container1 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            justify-content: space-between;
          }
          .contact-form {
            gap: var(--dl-space-space-doubleunit);
            width: 50%;
            height: auto;
            display: flex;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: 0px;
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .contact-select {
            color: var(--dl-color-gray-black);
            padding: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .contact-cta-btn {
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
          .contact-content-container {
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .contact-locations-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .contact-location-1 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .contact-heading {
            font-size: 24px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .contact-adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .contact-icon {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .contact-email {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .contact-icon02 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .contact-link {
            text-decoration: none;
          }
          .contact-phone {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .contact-icon04 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .contact-social-links-container {
            display: flex;
            align-self: flex-start;
            margin-top: 0px;
            align-items: flex-start;
            flex-direction: row;
          }
          .contact-icon06 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .contact-link1 {
            display: contents;
          }
          .contact-icon08 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .contact-icon10 {
            width: 24px;
            height: 24px;
          }

          @media (max-width: 991px) {
            .contact-contact {
              flex-direction: row;
            }
            .contact-form {
              width: 50%;
              padding-right: var(--dl-space-space-tenunits);
            }
            .contact-select {
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .contact-locations-container {
              flex-wrap: wrap;
            }
            .contact-location-1 {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .contact-contact {
              padding-right: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .contact-container1 {
              flex-direction: column-reverse;
              justify-content: flex-start;
            }
            .contact-form {
              width: 100%;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .contact-select {
              width: 100%;
              align-self: flex-start;
              padding-top: var(--dl-space-space-unit);
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-bottom: var(--dl-space-space-unit);
            }
            .contact-cta-btn {
              width: 100%;
              align-self: center;
            }
            .contact-content-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .contact-contact {
              padding: var(--dl-space-space-doubleunit);
              background-position: center;
            }
            .contact-form {
              width: 100%;
            }
            .contact-select {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
            }
            .contact-content-container {
              align-self: flex-start;
              align-items: flex-start;
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .contact-locations-container {
              margin-bottom: 0px;
            }
            .contact-location-1 {
              align-items: flex-start;
              margin-right: 0px;
            }
            .contact-social-links-container {
              align-self: center;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

Contact.defaultProps = {
  text: 'Calle Arquitecto Juan Perez 6, 46019. Valencia',
  email: 'Email',
  text1: 'info@kampi.es',
  textinput_placeholder: 'placeholder',
  text2: '686 044 297',
  messagePlaceHolder: 'Dejanos un mensaje',
  heading1: 'Contacta con Nosotros',
  textinput_placeholder11: 'Nombre',
  Cta_btn: 'Enviar',
  Heading: 'Valencia Capital',
  rootClassName: '',
}

Contact.propTypes = {
  text: PropTypes.string,
  email: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text2: PropTypes.string,
  messagePlaceHolder: PropTypes.string,
  heading1: PropTypes.string,
  textinput_placeholder11: PropTypes.string,
  Cta_btn: PropTypes.string,
  Heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Contact
