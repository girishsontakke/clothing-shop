import React from "react";

import "./form-input.styles.scss";

interface Iprops {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string | number | readonly string[] | undefined;
  name: string;
  type: string;
  required: boolean;
}

const FormInput: React.FC<Iprops> = ({
  handleChange,
  label,
  value,
  name,
  type,
  required,
}) => (
  <div className="group">
    <input
      value={value}
      name={name}
      className="form-input"
      onChange={handleChange}
      type={type}
      required={required}
    />
    {label ? (
      <label
        className={`${
          value?.toString().length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
