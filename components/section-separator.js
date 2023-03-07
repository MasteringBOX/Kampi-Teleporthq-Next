import React from 'react'

import PropTypes from 'prop-types'

const SectionSeparator = (props) => {
  return (
    <>
      <div
        className={`section-separator-section-separator ${props.rootClassName} `}
      ></div>
      <style jsx>
        {`
          .section-separator-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
        `}
      </style>
    </>
  )
}

SectionSeparator.defaultProps = {
  rootClassName: '',
}

SectionSeparator.propTypes = {
  rootClassName: PropTypes.string,
}

export default SectionSeparator
