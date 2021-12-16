import React from "react";

const message = ({ msg }) => {
  return (
    <span
      style={{
        color: "red",
      }}
    >
      {msg}
    </span>
  );
};

export default message;
