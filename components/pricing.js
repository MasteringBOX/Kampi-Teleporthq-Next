import React from 'react'

import PropTypes from 'prop-types'

const Pricing = (props) => {
  return (
    <>
      <div id="pricing" className={`pricing-pricing ${props.rootClassName} `}>
        <div className="pricing-container">
          <h1 className="pricing-heading">{props.Heading}</h1>
        </div>
        <div className="pricing-container01">
          <div className="pricing-pricing-card">
            <span className="pricing-text">{props.text}</span>
            <div className="pricing-container02">
              <div className="pricing-container03">
                <span className="pricing-text01">{props.text15}</span>
                <span className="pricing-text02">{props.text16}</span>
                <span className="pricing-text03">{props.text17}</span>
              </div>
            </div>
            <span className="pricing-text04">{props.text1}</span>
            <div className="pricing-container04">
              <span className="pricing-text05">
                <span>⚠️ Mínimo alquiler 3 días</span>
                <br></br>
                <span>✔ Juego de sábanas, toallas, mantas, etc.</span>
                <br></br>
                <span>✔ Kit de cocina</span>
                <br></br>
              </span>
              <span className="pricing-text12">
                <span>✔ Internet 4G WIFI con HBO y Amazon Prime</span>
                <br></br>
                <span>✔ 100Km incluidos por día*</span>
                <br></br>
              </span>
            </div>
            <span className="pricing-text17">{props.text2}</span>
            <button className="pricing-cta-btn button reservar Anchor">
              {props.Cta_btn}
            </button>
          </div>
          <div className="pricing-pricing-card1">
            <span className="pricing-text18">{props.text3}</span>
            <span className="pricing-text19">{props.text4}</span>
            <div className="pricing-container05">
              <span className="pricing-text20">{props.text11}</span>
              <span className="pricing-text21">{props.text12}</span>
            </div>
            <span className="pricing-text22">{props.text5}</span>
            <div className="pricing-container06">
              <span className="pricing-text23">{props.text13}</span>
              <span className="pricing-text24">{props.text14}</span>
              <span className="pricing-text25">
                <span>
                  ✔ Respostaje
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="pricing-text27">GLP</span>
                <span> incluido</span>
                <br></br>
                <span>✔ Juego de sábanas, toallas, mantas, etc.</span>
                <br></br>
                <span>
                  ✔ Kit de cocina
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="pricing-text33">ampliado</span>
                <br></br>
              </span>
              <span className="pricing-text35">
                <span>✔ Internet 4G WIFI con HBO y Amazon Prime</span>
                <br></br>
                <span>✔ 200Km incluidos*</span>
                <br></br>
              </span>
            </div>
            <span className="pricing-text40">{props.text6}</span>
            <button className="pricing-cta-btn1 Anchor button reservar">
              {props.Cta_btn1}
            </button>
          </div>
          <div className="pricing-pricing-card2">
            <span className="pricing-text41">{props.text7}</span>
            <span className="pricing-text42">{props.text8}</span>
            <div className="pricing-container07">
              <div className="pricing-container08">
                <span className="pricing-text43">{props.text18}</span>
                <span className="pricing-text44">{props.text19}</span>
                <span className="pricing-text45">{props.text20}</span>
              </div>
            </div>
            <span className="pricing-text46">{props.text9}</span>
            <div className="pricing-container09">
              <span className="pricing-text47">
                <span>⚠️ Mínimo alquiler una semana</span>
                <br></br>
                <span>✔ </span>
                <span>Juego de sábanas, toallas, mantas, etc.</span>
                <br></br>
                <span>✔ Kit de cocina</span>
                <br></br>
              </span>
              <span className="pricing-text55">
                <span>✔ Internet 4G WIFI con HBO y Amazon Prime</span>
                <br></br>
                <span>✔ 100Km incluidos por día*</span>
                <br></br>
              </span>
            </div>
            <span className="pricing-text60">{props.text10}</span>
            <button className="pricing-cta-btn2 Anchor button reservar">
              {props.Cta_btn2}
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .pricing-pricing {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-color: #272727;
          }
          .pricing-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            justify-content: center;
          }
          .pricing-heading {
            color: rgb(255, 255, 255);
            margin-bottom: 0px;
          }
          .pricing-container01 {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 0px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: var(--dl-space-space-fourunits);
            background-size: cover;
            justify-content: center;
          }
          .pricing-pricing-card {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: 32px;
            margin-right: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-pricing-card:hover {
            transform: scale(1.02);
          }
          .pricing-text {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 16px;
            text-transform: uppercase;
          }
          .pricing-container02 {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            flex-direction: row;
          }
          .pricing-container03 {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            flex-direction: row;
          }
          .pricing-text01 {
            font-size: 1.15rem;
            margin-top: 32px;
            font-weight: 300;
          }
          .pricing-text02 {
            font-size: 4rem;
            font-weight: 700;
          }
          .pricing-text03 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: 32px;
            font-weight: 300;
          }
          .pricing-text04 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: 16px;
          }
          .pricing-container04 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
          }
          .pricing-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text12 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text17 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: 16px;
          }
          .pricing-cta-btn {
            color: var(--dl-color-gray-white);
            align-self: stretch;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .pricing-pricing-card1 {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: 32px;
            margin-right: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-pricing-card1:hover {
            transform: scale(1.02);
          }
          .pricing-text18 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0px;
            text-transform: uppercase;
          }
          .pricing-text19 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: 16px;
          }
          .pricing-container05 {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            flex-direction: row;
          }
          .pricing-text20 {
            font-size: 1.15rem;
            margin-top: 32px;
            font-weight: 300;
          }
          .pricing-text21 {
            font-size: 4rem;
            font-weight: 700;
          }
          .pricing-text22 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: 16px;
          }
          .pricing-container06 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
          }
          .pricing-text23 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text24 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text25 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text27 {
            font-style: normal;
            font-weight: 700;
          }
          .pricing-text33 {
            font-style: normal;
            font-weight: 700;
          }
          .pricing-text35 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text40 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: 16px;
          }
          .pricing-cta-btn1 {
            color: var(--dl-color-gray-white);
            align-self: stretch;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .pricing-pricing-card2 {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: 32px;
            margin-right: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .pricing-pricing-card2:hover {
            transform: scale(1.02);
          }
          .pricing-text41 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0px;
            text-transform: uppercase;
          }
          .pricing-text42 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: 16px;
          }
          .pricing-container07 {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            flex-direction: row;
          }
          .pricing-container08 {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            flex-direction: row;
          }
          .pricing-text43 {
            font-size: 1.15rem;
            margin-top: 32px;
            font-weight: 300;
          }
          .pricing-text44 {
            font-size: 4rem;
            font-weight: 700;
          }
          .pricing-text45 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: 32px;
            font-weight: 300;
          }
          .pricing-text46 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: 16px;
          }
          .pricing-container09 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
          }
          .pricing-text47 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text55 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .pricing-text60 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: 16px;
          }
          .pricing-cta-btn2 {
            color: var(--dl-color-gray-white);
            align-self: stretch;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .pricing-root-class-name {
            align-self: center;
          }
          @media (max-width: 991px) {
            .pricing-pricing {
              padding-top: var(--dl-space-space-fiveunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-fiveunits);
              background-color: #272727;
            }
            .pricing-pricing-card {
              width: 100%;
              padding: 32px;
              max-width: 100%;
              align-items: center;
            }
            .pricing-cta-btn {
              width: 100%;
            }
            .pricing-pricing-card1 {
              width: 100%;
              padding: 32px;
              max-width: 100%;
              align-items: center;
            }
            .pricing-cta-btn1 {
              width: 100%;
            }
            .pricing-pricing-card2 {
              width: 100%;
              padding: 32px;
              max-width: 100%;
              align-items: center;
            }
            .pricing-cta-btn2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .pricing-heading {
              text-align: center;
            }
            .pricing-container01 {
              flex-flow: column;
              padding-left: 32px;
              padding-right: 32px;
            }
            .pricing-pricing-card {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: 32px;
            }
            .pricing-cta-btn {
              width: auto;
              align-self: center;
            }
            .pricing-pricing-card1 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: 32px;
            }
            .pricing-cta-btn1 {
              width: auto;
              align-self: center;
            }
            .pricing-pricing-card2 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: 32px;
            }
            .pricing-cta-btn2 {
              width: auto;
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .pricing-container01 {
              padding-top: 0px;
              padding-left: 32px;
              padding-right: 32px;
              padding-bottom: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

Pricing.defaultProps = {
  text6: '*Se pueden contratar más kilómetros',
  text14: '✔ Vaciado de grises y WC',
  text15: '€',
  text4: 'Viernes a Domingo',
  text5: '¿Que incluye este precio?',
  Cta_btn1: 'Reservar',
  Cta_btn: 'Reservar',
  text: 'Temporada baja',
  text3: 'Fin De semana',
  text1: '¿Que incluye este precio?',
  text17: '/ día',
  text10: '*Se pueden contratar más kilómetros',
  text9: '¿Que incluye este precio?',
  text7: 'Temporada Alta',
  Heading: 'Kampi lo vale :)',
  text20: '/ día',
  text8: 'Julio y Agosto. Navidades y Semana Santa.',
  Cta_btn2: 'Reservar',
  text2: '*Se pueden contratar más kilómetros',
  text13: '✔  Limpieza interior y Exterior',
  text11: '€',
  text16: '109',
  text19: '129',
  text12: '349',
  text18: '€',
  rootClassName: '',
}

Pricing.propTypes = {
  text6: PropTypes.string,
  text14: PropTypes.string,
  text15: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  Cta_btn1: PropTypes.string,
  Cta_btn: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text17: PropTypes.string,
  text10: PropTypes.string,
  text9: PropTypes.string,
  text7: PropTypes.string,
  Heading: PropTypes.string,
  text20: PropTypes.string,
  text8: PropTypes.string,
  Cta_btn2: PropTypes.string,
  text2: PropTypes.string,
  text13: PropTypes.string,
  text11: PropTypes.string,
  text16: PropTypes.string,
  text19: PropTypes.string,
  text12: PropTypes.string,
  text18: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Pricing
