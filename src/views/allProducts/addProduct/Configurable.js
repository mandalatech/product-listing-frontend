import React from "react";
import { CCol, CRow, CFormGroup } from "@coreui/react";

import TextField from "../../components/TextField";
import DropdownTextField from "../../components/DropDownTextField";

const Configurable = () => {
  return (
    <>
      <CFormGroup className="mb-4">
        <TextField
          name="configProductName"
          label="Product Name"
          placeholder="Product Name e.g Crop tee"
        />
      </CFormGroup>

      <CRow>
        <CCol xs="4">
          <DropdownTextField
            name="group"
            label="Group"
            placeholder="Select Group"
            // options
          />
        </CCol>
        <CCol xs="4">
          <DropdownTextField
            name="manufacturer"
            label="Manufacturer"
            placeholder="Select Manufacturer"
            // options
          />
        </CCol>
        <CCol xs="4">
          <TextField
            name="configBrand"
            label="Brand"
            placeholder="Enter brand name"
          />
        </CCol>
      </CRow>
    </>
  );
};

export default Configurable;
