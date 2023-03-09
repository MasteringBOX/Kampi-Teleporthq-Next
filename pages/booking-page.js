import React from 'react'
import Head from 'next/head'

import ReservaKampi from '../components/reserva-kampi'

const BookingPage = (props) => {
  return (
    <>
      <div className="booking-page-container">
        <Head>
          <title>BookingPage - Kampi-Teleporthq</title>
          <meta property="og:title" content="BookingPage - Kampi-Teleporthq" />
        </Head>
        <ReservaKampi></ReservaKampi>
      </div>
      <style jsx>
        {`
          .booking-page-container {
            gap: var(--dl-space-space-doubleunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default BookingPage
