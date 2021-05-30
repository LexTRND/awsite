import React from "react";
import ImageGallery from "react-image-gallery";

import Head from "next/head";

const Gallery = ({ galleries }) => {
  console.log(galleries);
  const gallery = galleries.map((gallery) => {
    return {
      original: process.env.DB_HOST + gallery.thumbnail.url,
      thumbnail: process.env.DB_HOST + gallery.thumbnail.url,
    };
  });

  return (
    <div>
      <Head>
        <title>Gallery</title>
      </Head>

      <ImageGallery items={gallery} className="imageGalley" />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.DB_HOST}/galleries`);
  const galleries = await res.json();

  return {
    props: {
      galleries,
    },
  };
}

export default Gallery;
