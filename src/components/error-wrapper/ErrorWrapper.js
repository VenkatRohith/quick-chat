import React from "react";

export default function ErrorWrapper({ error }) {
  return (
    <div className="rows error-wrapper">
      <p className="error">Some error occurred </p>
      <p className="error">{error.message}</p>
    </div>
  );
}
