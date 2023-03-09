import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className="component-container">
        <h2>{props.heading}</h2>
        {props.children}
      </div>
      <style jsx>
        {`
          .component-container {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 1200px) {
            .component-container {
              width: 100%;
              max-width: var(--dl-size-size-maxcontent);
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  heading: 'Text',
}

AppComponent.propTypes = {
  heading: PropTypes.string,
}

export default AppComponent
