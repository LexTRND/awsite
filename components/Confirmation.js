import React from "react";

const Confirmation = ({ data }) => {
  const { firstName, appointmentType, appointmentDate, appointmentTime } = data;
  return (
    <div className="confirmation">
      <h4>
        hello
        {`The ${appointmentType} is set for ${appointmentDate}, at ${appointmentTime} for ${firstName}`}
      </h4>
    </div>
  );
};

export default Confirmation;
