import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/main.scss";
import "../styles/nav.scss";
import "../styles/banner.scss";
import "../styles/hero.scss";
import "../styles/footer.scss";
import "../styles/appointment.scss";
import "../styles/norm.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
