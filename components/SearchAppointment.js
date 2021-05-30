import React, { useState } from "react";
import { TextField, Select, MenuItem, InputLabel } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { SubmitButton } from "./MakeAppointment";

const SearchAppointment = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`${process.env.API_URL}/appointments/` + data.id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        alert(
          `${data.appointmentType} for ${data.firstName} is scheduled for ${data.appointmentDate} at ${data.appointmentTime}`
        );
      });
  };

  return (
    <>
      <div className="searchAppointmentSection">
        <h2> Search Appointment</h2>

        <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
          {/*<TextField className="textfield" label="Email" {...register("email")} />*/}
          <TextField className="textfield" label="ID" {...register("id")} />
          <SubmitButton type="submit" />
        </form>
      </div>
    </>
  );
};

export default SearchAppointment;
