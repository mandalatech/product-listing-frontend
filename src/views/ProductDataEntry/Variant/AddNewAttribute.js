import React from 'react'
import { CCol, CRow, CButton } from '@coreui/react'
import TextField from 'src/views/components/TextField'

const AddNewAttribute = () => {
  return (
    <div>
      <h4 className="font-weight-bold mb-4">Add New Attribute</h4>
      <TextField
        name="attributeName"
        placeholder="Eg: color"
        label="Attribute Name"
        require={true}
      />

      <CRow>
        <CCol sm="2" md="2">
          <CButton block variant="outline" color="dark">
            Cancel
          </CButton>
        </CCol>

        <CCol sm="2" md="2">
          <CButton block color="dark">
            Add
          </CButton>
        </CCol>
      </CRow>
    </div>
  )
}

export default AddNewAttribute
