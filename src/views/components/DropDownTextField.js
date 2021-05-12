import React from "react";
import { CFormGroup, CLabel, CSelect } from "@coreui/react";

const DropDownTextField = ({ name, label, placeholder, options }) => {
  return (
    <CFormGroup>
      <CLabel htmlFor={name}>{label}</CLabel>
      <CSelect custom name={name} id={name} placeholder={placeholder}>
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </CSelect>
    </CFormGroup>
  );
};

DropDownTextField.defaultProps = {
  name: "name",
  label: "Label",
  placeholder: "placeholder here...",
  options: [
    {
      id: 0,
      name: "Apple",
      created: "2019-08-24T14:15:22Z",
      modified: "2019-08-24T14:15:22Z",
    },
    {
      id: 1,
      name: "Banana",
      created: "2019-08-24T14:15:22Z",
      modified: "2019-08-24T14:15:22Z",
    },
    {
      id: 2,
      name: "Cat",
      created: "2019-08-24T14:15:22Z",
      modified: "2019-08-24T14:15:22Z",
    },
  ],
};

export default DropDownTextField;
