import React from "react";

const options = [
  { label: "user", value: "user" },
  { label: "vendor", value: "vendor" },
];

const Dropdown = ({ value, onChange, name }) => {
  const handleChange = (event) => {
    event.preventDefault();
    onChange(event);
  };

  return (
    <div className="dropdown">
      <select
        value={value}
        onChange={handleChange}
        className="dropdown-option"
        name={name}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
