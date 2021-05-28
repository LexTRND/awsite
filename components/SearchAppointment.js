import React, { useState } from "react";
import { TextField, Select, MenuItem, InputLabel } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import Confirmation from "./Confirmation";

const SearchAppointment = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:1337/appointments/" + data.id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        Confirmation({ data });
      });
  };

  return (
    <>
      <div className="searchAppointmentSection">
        <h2> Search Appointment</h2>

        <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
          {/*<TextField className="textfield" label="Email" {...register("email")} />*/}
          <TextField className="textfield" label="ID" {...register("id")} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default SearchAppointment;
