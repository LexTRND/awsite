import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Title from "../components/Title";
import Head from "next/head";

const Gallery = ({ galleries }) => {
  const gallery = galleries.map((gallery) => {
    return {
      original: "http://localhost:1337" + gallery.thumbnail.url,
      thumbnail: "http://localhost:1337" + gallery.thumbnail.url,
    };
  });
  console.log(gallery);

  return (
    <div>
      <Head>
        <title>Gallery</title>
      </Head>
      {/*<Hero hero="gallery-hero">*/}
      {/*<Banner title="Gallery" />*/}
      {/*</Hero>*/}
      {/*<Title title="Gallery" />*/}
      <ImageGallery items={gallery} className="imageGalley" />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/galleries");
  const galleries = await res.json();

  return {
    props: {
      galleries,
    },
  };
}

export default Gallery;
