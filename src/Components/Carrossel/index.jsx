import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Carrossel = ({data}) => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <ImageGallery
      items={data}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay
      showBullets={false}
      showNav={false}
      lazyLoad
    />
  );
};

export default Carrossel;
