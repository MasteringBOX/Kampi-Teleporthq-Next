import "./style.css";
import "./myStyles.css";

import React from "react";
import Head from "next/head";
export default function MyApp({
  Component: Component,
  pageProps: pageProps
}) {
  //React.useEffect(() => import("@lottiefiles/lottie-player"));
  return <>
    <Head>
      <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta property="og:title" content="Kampi - Alquiler de Camper en Valencia" />
      <meta name="description" content="Alquila la mejor Camper de Valencia. Kampi tiene autonomía energética ilimitada, internet, ducha, agua caliente, calefacción... Todo lo que necesitas"/>
      <title>Kampi - Alquiler de Camper en Valencia</title>
    </Head>
    <Component {...pageProps} />
  </>;
}
