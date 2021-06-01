import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import { GalleryButton } from "../components/Style";
import { AppointmentButton } from "../components/Style";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>AW Painting</title>
      </Head>
      <Hero hero="defaultHero">
        <Banner>
          <img src="/awlogo.svg" alt="logo" alt="logo" />
          <div className="nav-buttons">
            <GalleryButton />
          </div>
        </Banner>
      </Hero>
      <Services />
      <Testimonial />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/galleries`);
  const appointments = await res.json();

  return {
    props: {
      appointments,
    },
  };
}
