import React from "react";
import { TextField, Select } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { SubmitButton } from "./MaterialStyle";

const MakeAppointment = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/appointments`, {
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
        alert(
          `${data.appointmentType} for ${data.firstName} has been scheduled for ${data.appointmentDate} at ${data.appointmentTime}`
        );
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
