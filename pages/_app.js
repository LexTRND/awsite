import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/main.scss";
import "../styles/nav.scss";
import "../styles/banner.scss";
import "../styles/hero.scss";
import "../styles/footer.scss";
import "../styles/appointment.scss";
import "../styles/norm.scss";
import { theme } from "../components/MaterialStyle";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
export default MyApp;
