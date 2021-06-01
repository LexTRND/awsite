import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c91015",
    },
    secondary: {
      main: "#c91015",
    },
  },
});

const submitButtonStyled = makeStyles({
  root: {
    background: "#c91015",
    borderRadius: 50,
    color: "white",
    height: 48,
  },
});
export function SubmitButton() {
  const classes = submitButtonStyled();
  return (
    <Button type="submit" className={classes.root}>
      Submit
    </Button>
  );
}

const appointmentButtonStyled = makeStyles({
  root: {
    border: "#c91015",
    borderRadius: 3,
    color: "white",
    height: 48,
  },
});

export function AppointmentButton() {
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
