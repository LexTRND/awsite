import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

import Head from "next/head";

const Gallery = ({ galleries }) => {
  const gallery = galleries.map((gallery) => {
    return {
      original: process.env.DB_HOST + gallery.thumbnail.url,
      thumbnail: process.env.DB_HOST + gallery.thumbnail.url,
    };
  });
  console.log(gallery);

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
  const res = await fetch(`${process.env.API_URL}/galleries`);
  const galleries = await res.json();

  return {
    props: {
      galleries,
    },
  };
}

export default Gallery;
