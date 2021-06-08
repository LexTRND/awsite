import React from "react";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { SubmitButton } from "./MaterialStyle";
import swal from "sweetalert";

const SearchAppointment = () => {
  const { register, handleSubmit } = useForm();
  const formatTime = (x, y) => {
    const ca = x + "T" + y;
    const cb = new Date(ca);
    return cb.toLocaleString([], { hour: "2-digit", minute: "2-digit" });
  };

  const onSubmit = (data) => {
    fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/appointments/` + data.id, {
      method: "GET",
    }).then((response) => {
      if (response.status === 404) {
        swal("No Appointment Found");
      } else {
        response.json().then((data) => {
          swal(
            `${data.appointmentType} for ${data.firstName} is scheduled for ${
              data.appointmentDate
            } at ${formatTime(data.appointmentDate, data.appointmentTime)} a ${
              data.id
            } `,
            "To make changes or cancel call 555-555-5555"
          );
          console.log(formatTime(data.appointmentDate, data.appointmentTime));
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
