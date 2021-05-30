import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Head from "next/head";

const appointmentButtonStyled = makeStyles({
  root: {
    border: "#c91015",
    borderRadius: 3,
    color: "white",
    height: 48,
  },
});

function AppointmentButton() {
  const classes = appointmentButtonStyled();
  return (
    <Button href="/appointments" className={classes.root}>
      Appointments
    </Button>
  );
}

const galleryButtonStyled = makeStyles({
  root: {
    background: "#c91015",
    borderRadius: 50,
    color: "white",
    height: 48,
  },
});

export function GalleryButton() {
  const classes = galleryButtonStyled();
  return (
    <Button href="/gallery" className={classes.root}>
      See Our Work
    </Button>
  );
}

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
  const res = await fetch(`${process.env.DB_HOST}/galleries`);
  const appointments = await res.json();

  return {
    props: {
      appointments,
    },
  };
}
