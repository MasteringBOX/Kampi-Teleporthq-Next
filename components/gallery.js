import React from 'react'

import PropTypes from 'prop-types'

import GalleryCard3 from './gallery-card3'

const Gallery = (props) => {
  return (
    <>
      <div id="galeria" className="gallery-gallery">
        <h2 className="gallery-text Section-Heading">{props.heading}</h2>
        <div className="gallery-container">
          <GalleryCard3
            title="Duerme bien"
            subtitle="Una cama de 2 metros por 1.40"
            image_src="/playground_assets/img_7852%20%5B2%5D-1500h.jpg"
            rootClassName="rootClassName2"
          ></GalleryCard3>
          <GalleryCard3
            title="Vista Maletero"
            subtitle="Vista desde el Maletero"
            image_src="/playground_assets/img_7850-1500w.jpg"
            rootClassName="rootClassName9"
          ></GalleryCard3>
          <GalleryCard3
            title="Vista Puerta Lateral"
            subtitle="Cocina Práctica con mucho almacenaje"
            image_src="/playground_assets/img_7281%202-1500w.jpg"
            rootClassName="rootClassName8"
          ></GalleryCard3>
          <GalleryCard3
            title="Mesas Auxiliares"
            subtitle="Dos mesas auxiliares para cocinar"
            image_src="/playground_assets/img_7849-1500w.jpg"
            rootClassName="rootClassName"
          ></GalleryCard3>
          <GalleryCard3
            title="Cocina"
            subtitle="2 Fuegos y una Nevera amplia"
            image_src="/playground_assets/img_7830-1500w.jpg"
            rootClassName="rootClassName11"
          ></GalleryCard3>
          <GalleryCard3
            title="Mesa"
            subtitle="Mesa principal Extraible"
            image_src="/playground_assets/img_7846%20%5B1%5D-1500w.jpg"
            rootClassName="rootClassName1"
          ></GalleryCard3>
          <GalleryCard3
            title="Ducha"
            subtitle="Ducha espaciosa con agua caliente"
            image_src="/playground_assets/img_87961-1500w.jpg"
            rootClassName="rootClassName5"
          ></GalleryCard3>
          <GalleryCard3
            title="WC"
            subtitle="WC sin olores con separacion de orina"
            image_src="/playground_assets/img_7834%20%5B1%5D-1500w.jpg"
            rootClassName="rootClassName10"
          ></GalleryCard3>
          <GalleryCard3
            title="Atardecer"
            subtitle="Atardecer en la Playa"
            image_src="/playground_assets/img_6848%2021-1500h.jpg"
            rootClassName="rootClassName6"
          ></GalleryCard3>
          <GalleryCard3
            title="Confort en Conduccion"
            subtitle="Control de crucero, camara trasera, aire acoundicionado, navegador..."
            image_src="/playground_assets/img_2414-1500h.jpg"
            rootClassName="rootClassName7"
          ></GalleryCard3>
          <GalleryCard3
            title="Potencia"
            subtitle="130 CV para que vayas donde quieras"
            image_src="/playground_assets/img_86961-1500h.jpg"
            rootClassName="rootClassName3"
          ></GalleryCard3>
          <GalleryCard3
            title="Cabina"
            subtitle="Cabina de conducción"
            image_src="/playground_assets/img_7868%20%5B1%5D-1500w.jpg"
            rootClassName="rootClassName4"
          ></GalleryCard3>
        </div>
      </div>
      <style jsx>
        {`
          .gallery-gallery {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .gallery-text {
            margin-top: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .gallery-container {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .gallery-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .gallery-gallery {
              padding-left: 32px;
              padding-right: 32px;
            }
            .gallery-container {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 479px) {
            .gallery-gallery {
              padding: var(--dl-space-space-unit);
            }
            .gallery-text {
              text-align: center;
            }
            .gallery-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery.defaultProps = {
  heading: 'No te quedes con ganas de ver más',
}

Gallery.propTypes = {
  heading: PropTypes.string,
}

export default Gallery
