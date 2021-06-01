import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import MakeAppointment from "../components/MakeAppointment";
import SearchAppointment from "../components/SearchAppointment";
import { GalleryButton } from "../components/MaterialStyle.js";
import Head from "next/head";

const appointments = () => {
  return (
    <>
      <Head>
        <title>Appointments</title>
      </Head>
      <Hero hero="gallery-hero">
        <Banner title="Appointments">
          <GalleryButton />
        </Banner>
      </Hero>

      <h1 title="Book Appointment" className="appointmentPage" />
      <div className="appointmentPage">
        <div className="makeAppointmentDiv">
          <MakeAppointment />
        </div>
        <div className="or">or</div>
        <div className="searchAppointmentDiv">
          <SearchAppointment />
        </div>
      </div>
    </>
  );
};

export default appointments;
