import React from "react";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { SubmitButton } from "./MakeAppointment";

const SearchAppointment = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(process.env.NEXT_PUBLIC_DB_HOST);
    fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/appointments/` + data.id, {
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
          <TextField className="textfield" label="ID" {...register("id")} />
          <SubmitButton type="submit" />
        </form>
      </div>
    </>
  );
};

export default SearchAppointment;
