import React from 'react'
import Head from 'next/head'

import Contact from '../components/contact'

const Contacto = (props) => {
  return (
    <>
      <div className="contacto-container">
        <Head>
          <title>Contacto - Kampi-Teleporthq</title>
          <meta property="og:title" content="Contacto - Kampi-Teleporthq" />
        </Head>
        <Contact rootClassName="contact-root-class-name"></Contact>
      </div>
      <style jsx>
        {`
          .contacto-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Contacto
