import React, { useState } from "react";

import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
const submitButtonStyled = makeStyles({
  root: {
    background: "#c91015",
    borderRadius: 50,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
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

const MakeAppointment = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`${process.env.API_URL}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        appointmentDate: data.date,
        //Strapi expects to receive the seconds so they're added to date.time
        appointmentTime: data.time + ":00",
        appointmentType: data.appointmentType,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <div className="makeAppointmentSection">
        <h2>Make Appointment</h2>
        <form className="appointmentForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="personInfo">
            <TextField
              className="textfield"
              label="First Name"
              {...register("firstName", { required: true })}
            />
            <TextField
              className="textfield"
              label="Last Name "
              {...register("lastName", { required: true })}
            />
            <TextField
              className="textfield"
              label="Email"
              type="email"
              {...register("email", { required: true })}
            />
            <TextField
              className="textfield"
              label="Phone Number"
              {...register("phone", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className="appointmentInfo">
            <Controller
              control={control}
              name="date"
              label="date"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  id="time"
                  type="date"
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
            <Controller
              control={control}
              name="time"
              label="Time"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  id="time"
                  type="time"
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />

            <Select
              id="appointmentType"
              {...register("appointmentType", { required: true })}
            >
              <option value={"Consultation"}>Consultation</option>
              <option value={"Service"}>Service</option>
            </Select>
            <SubmitButton type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};
export default MakeAppointment;
