import React from "react";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { SubmitButton } from "./MaterialStyle";
import swal from "sweetalert";

const SearchAppointment = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/appointments/` + data.id, {
      method: "GET",
    }).then((response) => {
      if (response.status === 404) {
        swal("No Appointment Found");
      } else {
        response.json().then((data) => {
          swal(
            `${data.appointmentType} for ${data.firstName} is scheduled for ${data.appointmentDate} at ${data.appointmentTime}`,
            "To make changes or cancel call 555-555-5555"
          );
        });
      }
    });
  };

  return (
    <>
      <div className="searchAppointmentSection">
        <h2> Search Appointment</h2>

        <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className="textfield"
            label="ID"
            type="number"
            {...register("id")}
          />
          <SubmitButton type="submit" />
        </form>
      </div>
    </>
  );
};

export default SearchAppointment;
