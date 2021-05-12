import React from "react";
import { CCol, CRow, CFormGroup } from "@coreui/react";

import TextField from "../../components/TextField";
import DropdownTextField from "../../components/DropDownTextField";

const SimpleProduct = () => {
  return (
    <>
      <TextField
        name="productName"
        label="Product Name"
        placeholder="Product Name e.g Crop tee"
      />

      <CRow className="mb-4">
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
            name="brand"
            label="Brand"
            placeholder="Enter brand name"
          />
        </CCol>
      </CRow>

      <CRow>
        <CCol xs="3">
          <TextField name="sku" label="SKU" placeholder="E.g SKU16708945" />
        </CCol>

        <CCol xs="3">
          <TextField
            name="mpn"
            label="MPN"
            placeholder="Manufacturer Pin Number"
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="upc"
            label="UPC"
            placeholder="Universal Product Code"
            labelTag="(Must be unique)"
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="asin"
            label="ASIN"
            placeholder="Amazon Standard Number"
          />
        </CCol>
      </CRow>
    </>
  );
};

export default SimpleProduct;
