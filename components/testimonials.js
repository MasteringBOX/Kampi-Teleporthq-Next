import React from 'react'

import PropTypes from 'prop-types'

const Testimonials = (props) => {
  return (
    <>
      <div id="opiniones" className="testimonials-testimonials">
        <h2 className="testimonials-text Section-Heading">{props.heading}</h2>
        <div className="testimonials-cards-container">
          <div className="testimonials-testimonial-card">
            <div className="testimonials-card-heading">
              <div className="testimonials-name-and-position">
                <span className="Card-Heading">{props.Name}</span>
                <span className="testimonials-position Card-Text">
                  {props.Position}
                </span>
              </div>
              <div className="testimonials-stars-container">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon02"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon04"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon06"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon08"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
              </div>
            </div>
            <span className="testimonials-text1">{props.text1}</span>
          </div>
          <div className="testimonials-testimonial-card1">
            <div className="testimonials-card-heading1">
              <div className="testimonials-name-and-position1">
                <span className="Card-Heading">{props.Name1}</span>
                <span className="testimonials-position1 Card-Text">
                  {props.Position1}
                </span>
              </div>
              <div className="testimonials-stars-container1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon10"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon12"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon14"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon16"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon18"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
              </div>
            </div>
            <span className="testimonials-text2">{props.text2}</span>
          </div>
          <div className="testimonials-testimonial-card2">
            <div className="testimonials-card-heading2">
              <div className="testimonials-name-and-position2">
                <span className="Card-Heading">{props.Name2}</span>
                <span className="testimonials-position2 Card-Text">
                  {props.Position2}
                </span>
              </div>
              <div className="testimonials-stars-container2">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon20"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon22"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon24"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon26"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="testimonials-icon28"
                >
                  <path d="M649.714 573.714l174.857-169.714-241.143-35.429-108-218.286-108 218.286-241.143 35.429 174.857 169.714-41.714 240.571 216-113.714 215.429 113.714zM950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 15.429-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
              </div>
            </div>
            <span className="testimonials-text3 Card-Text">{props.text3}</span>
          </div>
        </div>
        <div className="testimonials-banner">
          <span className="testimonials-text4">{props.text}</span>
          <div className="testimonials-container">
            <a
              href={props.link_Cta_btn}
              target="_blank"
              rel="noreferrer noopener"
              className="testimonials-cta-btn button Anchor"
            >
              {props.Cta_btn}
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonials-testimonials {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: 0px;
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            scroll-margin-top: 80px;
          }
          .testimonials-text {
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .testimonials-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .testimonials-testimonial-card {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .testimonials-card-heading {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .testimonials-name-and-position {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .testimonials-position {
            color: var(--dl-color-gray-700);
          }
          .testimonials-stars-container {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .testimonials-icon {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-icon02 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-icon04 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-icon06 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-icon08 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-text1 {
            color: var(--dl-color-gray-500);
            text-align: justify;
          }
          .testimonials-testimonial-card1 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .testimonials-card-heading1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .testimonials-name-and-position1 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .testimonials-position1 {
            color: var(--dl-color-gray-700);
          }
          .testimonials-stars-container1 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .testimonials-icon10 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-icon12 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-icon14 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-icon16 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-icon18 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .testimonials-text2 {
            color: var(--dl-color-gray-500);
            text-align: justify;
          }
          .testimonials-testimonial-card2 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .testimonials-card-heading2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .testimonials-name-and-position2 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .testimonials-position2 {
            color: var(--dl-color-gray-700);
          }
          .testimonials-stars-container2 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .testimonials-icon20 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-icon22 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-icon24 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-icon26 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .testimonials-icon28 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .testimonials-text3 {
            color: var(--dl-color-gray-500);
            text-align: justify;
          }
          .testimonials-banner {
            width: 50%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .testimonials-text4 {
            font-size: 0.75rem;
            text-align: center;
            font-weight: 600;
            margin-bottom: 32px;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .testimonials-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonials-cta-btn {
            color: var(--dl-color-gray-white);
            align-self: stretch;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          @media (max-width: 991px) {
            .testimonials-banner {
              align-self: center;
              align-items: center;
            }
            .testimonials-container {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .testimonials-cta-btn {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .testimonials-text {
              text-align: center;
            }
            .testimonials-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .testimonials-testimonial-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .testimonials-stars-container {
              justify-content: flex-end;
            }
            .testimonials-testimonial-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .testimonials-stars-container1 {
              justify-content: flex-end;
            }
            .testimonials-testimonial-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .testimonials-stars-container2 {
              justify-content: flex-end;
            }
            .testimonials-banner {
              padding-left: 32px;
              padding-right: 32px;
            }
            .testimonials-cta-btn {
              width: auto;
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .testimonials-text {
              text-align: center;
            }
            .testimonials-testimonial-card {
              width: 100%;
            }
            .testimonials-testimonial-card1 {
              width: 100%;
            }
            .testimonials-testimonial-card2 {
              width: 100%;
            }
            .testimonials-banner {
              padding-top: 48px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 48px;
            }
            .testimonials-container {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonials.defaultProps = {
  text1:
    'Una experiencia inolvidable. Da mucha seguridad tener la autonomía con la electricidad y no tener que preocuparte por nada. Hemos estado muy calentitos con la calefacción y se agradece una ducha caliente después de esquiar.',
  Position2: 'Position',
  Name1: 'Sarah B.',
  text2:
    'Viajar con Kampi es súper cómodo, esta muy bien diseñada y tiene de todo. He estado teletrabajando durante tres semanas y es un lujo poder disfrutar sitios remotos con libertad, y con internet! Repetiré seguro. ',
  Cta_btn: 'Comentar',
  Name2: 'Carlos Perez',
  Position: 'Position',
  heading: '¿Que opinan de Kampi?',
  text: '¿Has viajado con Kampi? Deja UN comentario',
  text3:
    'Un fin de semana muy bointo. Pudimos dormir en un sitio recóndito donde estabamos solos. Mucha paz y naturaleza si encuentras el lugar adecuado.',
  Name: 'Dani Martinez',
  link_Cta_btn:
    'https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AJOqlzVygUvUauvjG48Q7dlBvJQor23l8w:1677231805418&q=kampi+valencia&rflfq=1&num=10&rldimm=3457750885291040086&ved=2ahUKEwim3t6v7639AhVI26QKHWa-DLsQu9QIegQIEBAK#rlfi=hd:;si:3457750885291040086;mv:[[39.4967604,-0.37624789999999997],[39.4689808,-0.37942139999999996]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2',
  Position1: '5 de Febrero 2023',
}

Testimonials.propTypes = {
  text1: PropTypes.string,
  Position2: PropTypes.string,
  Name1: PropTypes.string,
  text2: PropTypes.string,
  Cta_btn: PropTypes.string,
  Name2: PropTypes.string,
  Position: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  Name: PropTypes.string,
  link_Cta_btn: PropTypes.string,
  Position1: PropTypes.string,
}

export default Testimonials
