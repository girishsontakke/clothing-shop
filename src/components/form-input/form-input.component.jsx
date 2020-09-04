import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      type={otherProps.type}
      className="form-input"
      onChange={handleChange}
    />
    {label ? (
      <label
        className={`${
          otherProps.value.lenght ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
