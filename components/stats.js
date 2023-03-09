import React from 'react'

import PropTypes from 'prop-types'

const Stats = (props) => {
  return (
    <>
      <div id="stats" className={`stats-stats ${props.rootClassName} `}>
        <div className="stats-container">
          <div className="stats-stat">
            <svg viewBox="0 0 1152 1024" className="stats-icon">
              <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
            </svg>
            <span className="stats-text">{props.text}</span>
            <span className="stats-text01">{props.text1}</span>
            <h1 className="stats-text02">{props.heading}</h1>
          </div>
          <div className="stats-stat1">
            <svg viewBox="0 0 1170.2857142857142 1024" className="stats-icon03">
              <path d="M274.286 621.714c0-50.286-41.143-91.429-91.429-91.429s-91.429 41.143-91.429 91.429 41.143 91.429 91.429 91.429 91.429-41.143 91.429-91.429zM294.857 438.857h580.571l-50.857-204c-1.714-6.286-13.143-15.429-20-15.429h-438.857c-6.857 0-18.286 9.143-20 15.429zM1078.857 621.714c0-50.286-41.143-91.429-91.429-91.429s-91.429 41.143-91.429 91.429 41.143 91.429 91.429 91.429 91.429-41.143 91.429-91.429zM1170.286 566.857v219.429c0 10.286-8 18.286-18.286 18.286h-54.857v73.143c0 60.571-49.143 109.714-109.714 109.714s-109.714-49.143-109.714-109.714v-73.143h-585.143v73.143c0 60.571-49.143 109.714-109.714 109.714s-109.714-49.143-109.714-109.714v-73.143h-54.857c-10.286 0-18.286-8-18.286-18.286v-219.429c0-70.857 57.143-128 128-128h16l60-239.429c17.714-72 87.429-126.286 161.714-126.286h438.857c74.286 0 144 54.286 161.714 126.286l60 239.429h16c70.857 0 128 57.143 128 128z"></path>
            </svg>
            <span className="stats-text03">{props.text2}</span>
            <span className="stats-text04">{props.text3}</span>
            <h1 className="stats-text05">{props.heading1}</h1>
          </div>
          <div className="stats-stat2">
            <svg viewBox="0 0 1024 1024" className="stats-icon05">
              <path d="M896 598v-428h-768v428h768zM896 86q34 0 60 25t26 59v512q0 34-26 60t-60 26h-298l84 128v42h-340v-42l84-128h-298q-34 0-60-26t-26-60v-512q0-34 26-59t60-25h768z"></path>
            </svg>
            <span className="stats-text06">{props.text4}</span>
            <span className="stats-text07">
              <span>Internet 4G WIFI, TV, HBO y Amazon Prime</span>
              <br></br>
            </span>
            <h1 className="stats-text10">{props.heading2}</h1>
          </div>
          <div className="stats-stat3">
            <svg viewBox="0 0 1170.2857142857142 1024" className="stats-icon07">
              <path d="M512 692.571c0-75.429-18.286-162.286-93.714-162.286-22.857 22.857-54.286 36.571-89.143 36.571s-66.286-13.714-89.143-36.571c-75.429 0-93.714 86.857-93.714 162.286 0 41.714 27.429 75.429 61.143 75.429h243.429c33.714 0 61.143-33.714 61.143-75.429zM438.857 438.857c0-60.571-49.143-109.714-109.714-109.714s-109.714 49.143-109.714 109.714 49.143 109.714 109.714 109.714 109.714-49.143 109.714-109.714zM1024 713.143v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM804.571 566.857v-36.571c0-10.286-8-18.286-18.286-18.286h-182.857c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h182.857c10.286 0 18.286-8 18.286-18.286zM1024 566.857v-36.571c0-10.286-8-18.286-18.286-18.286h-109.714c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286zM1024 420.571v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM73.143 219.429h1024v-54.857c0-10.286-8-18.286-18.286-18.286h-987.429c-10.286 0-18.286 8-18.286 18.286v54.857zM1170.286 164.571v694.857c0 50.286-41.143 91.429-91.429 91.429h-987.429c-50.286 0-91.429-41.143-91.429-91.429v-694.857c0-50.286 41.143-91.429 91.429-91.429h987.429c50.286 0 91.429 41.143 91.429 91.429z"></path>
            </svg>
            <span className="stats-text11">{props.text5}</span>
            <span className="stats-text12">
              <span>25 años y 2 de carnet</span>
              <br></br>
            </span>
            <h1 className="stats-text15">
              <span>B</span>
              <br></br>
            </h1>
          </div>
          <div className="stats-stat4">
            <svg viewBox="0 0 1024 1024" className="stats-icon09">
              <path d="M740 634l34 34t17 18 16 19 15 19 13 20 10 22 6 23 2 24-1 25q-22 84-100 100-14 2-97-8t-139-10h-8q-56 0-139 10t-97 8q-78-16-100-100-6-40 14-82t37-60 61-62q20-22 53-62t53-62q36-44 74-56 8-4 14-4 12-2 34-2 24 0 34 2 6 0 14 4 38 12 74 56 18 22 52 62t54 62zM726 406q0-44 31-76t75-32 75 32 31 76-31 75-75 31-75-31-31-75zM534 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM278 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM86 406q0-44 31-76t75-32 75 32 31 76-31 75-75 31-75-31-31-75z"></path>
            </svg>
            <span className="stats-text18">{props.text6}</span>
            <span className="stats-text19">{props.text7}</span>
            <h1 className="stats-text20">{props.heading3}</h1>
          </div>
        </div>
        <div className="stats-container1">
          <button className="stats-cta-btn button Anchor">
            {props.Cta_btn}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .stats-stats {
            width: 100%;
            display: flex;
            padding: 48px;
            position: relative;
            max-width: auto;
            flex-direction: column;
            justify-content: center;
            scroll-margin-top: 80px;
          }
          .stats-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: center;
          }
          .stats-stat {
            width: 200px;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
          }
          .stats-icon {
            fill: var(--dl-color-gray-700);
            width: 48px;
            height: 48px;
          }
          .stats-text {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text01 {
            color: var(--dl-color-gray-700);
            height: 40px;
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text02 {
            font-size: 3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 300;
          }
          .stats-stat1 {
            width: 200px;
            display: flex;
            padding: 32px;
            align-items: center;
            padding-top: 32px;
            flex-direction: column;
          }
          .stats-icon03 {
            fill: var(--dl-color-gray-700);
            width: 48px;
            height: 48px;
          }
          .stats-text03 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text04 {
            color: var(--dl-color-gray-700);
            height: 40px;
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text05 {
            font-size: 3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 300;
          }
          .stats-stat2 {
            width: 200px;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
          }
          .stats-icon05 {
            fill: var(--dl-color-gray-700);
            width: 48px;
            height: 48px;
          }
          .stats-text06 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text07 {
            color: var(--dl-color-gray-700);
            height: 40px;
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text10 {
            font-size: 3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 300;
          }
          .stats-stat3 {
            width: 200px;
            display: flex;
            padding: 32px;
            align-items: center;
            flex-direction: column;
          }
          .stats-icon07 {
            fill: var(--dl-color-gray-700);
            width: 48px;
            height: 48px;
          }
          .stats-text11 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text12 {
            color: var(--dl-color-gray-700);
            height: 40px;
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text15 {
            font-size: 3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 300;
          }
          .stats-stat4 {
            width: 200px;
            display: flex;
            padding: 32px;
            align-items: center;
            padding-top: 32px;
            flex-direction: column;
          }
          .stats-icon09 {
            fill: var(--dl-color-gray-700);
            width: 48px;
            height: 48px;
          }
          .stats-text18 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text19 {
            color: var(--dl-color-gray-700);
            height: 40px;
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stats-text20 {
            font-size: 3rem;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 300;
          }
          .stats-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .stats-cta-btn {
            color: var(--dl-color-gray-white);
            align-self: stretch;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .stats-root-class-name {
            align-self: center;
          }
          @media (max-width: 991px) {
            .stats-stat {
              padding: var(--dl-space-space-doubleunit);
            }
            .stats-stat1 {
              padding: var(--dl-space-space-doubleunit);
            }
            .stats-stat2 {
              padding: var(--dl-space-space-doubleunit);
            }
            .stats-text07 {
              color: var(--dl-color-gray-700);
              font-size: 0.75rem;
            }
            .stats-stat3 {
              padding: var(--dl-space-space-doubleunit);
            }
            .stats-text12 {
              color: var(--dl-color-gray-700);
            }
            .stats-stat4 {
              display: none;
              padding: var(--dl-space-space-doubleunit);
            }
            .stats-cta-btn {
              width: 40%;
            }
          }
          @media (max-width: 767px) {
            .stats-stats {
              padding-left: 32px;
              padding-right: 32px;
            }
            .stats-stat {
              padding: var(--dl-space-space-unit);
            }
            .stats-text {
              text-align: center;
            }
            .stats-stat1 {
              padding: var(--dl-space-space-unit);
            }
            .stats-text03 {
              text-align: center;
            }
            .stats-stat2 {
              padding: var(--dl-space-space-unit);
            }
            .stats-text06 {
              text-align: center;
            }
            .stats-stat3 {
              padding: var(--dl-space-space-unit);
            }
            .stats-text11 {
              text-align: center;
            }
            .stats-stat4 {
              display: flex;
              padding: var(--dl-space-space-unit);
            }
            .stats-text18 {
              text-align: center;
            }
            .stats-cta-btn {
              width: auto;
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .stats-stats {
              align-items: center;
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 32px;
            }
            .stats-container {
              align-items: center;
              justify-content: center;
            }
            .stats-stat {
              width: 50%;
            }
            .stats-text02 {
              font-size: 2em;
            }
            .stats-stat1 {
              width: 50%;
            }
            .stats-text05 {
              font-size: 2em;
            }
            .stats-stat2 {
              width: 50%;
            }
            .stats-text07 {
              color: var(--dl-color-gray-700);
              font-size: 0.75rem;
            }
            .stats-text10 {
              font-size: 2em;
            }
            .stats-stat3 {
              width: 50%;
            }
            .stats-text15 {
              font-size: 2em;
            }
            .stats-stat4 {
              width: 200px;
              display: none;
            }
            .stats-text18 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Stats.defaultProps = {
  text1: '3 asientos, 2 camas',
  text7: 'Trae a tu mascota',
  heading2: 'Si',
  Cta_btn: 'Explora más',
  heading1: '130CV',
  text6: 'Mascotas',
  text5: 'Carnet',
  heading3: 'Si',
  rootClassName: '',
  text4: 'Entretenimiento',
  heading: '3',
  text: 'Capacidad',
  text3: '130 CV con Cambio Manual',
  text2: 'Motor',
}

Stats.propTypes = {
  text1: PropTypes.string,
  text7: PropTypes.string,
  heading2: PropTypes.string,
  Cta_btn: PropTypes.string,
  heading1: PropTypes.string,
  text6: PropTypes.string,
  text5: PropTypes.string,
  heading3: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
}

export default Stats
