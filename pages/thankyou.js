import React from 'react'
import Head from 'next/head'

import Thanks from '../components/thanks'

const Thankyou = (props) => {
  return (
    <>
      <div className="thankyou-container">
        <Head>
          <title>Thankyou - Kampi-Teleporthq</title>
          <meta property="og:title" content="Thankyou - Kampi-Teleporthq" />
        </Head>
        <Thanks rootClassName="thanks-root-class-name"></Thanks>
      </div>
      <style jsx>
        {`
          .thankyou-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Thankyou
