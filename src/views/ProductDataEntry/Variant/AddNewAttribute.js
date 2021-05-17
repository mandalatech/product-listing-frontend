import React, { useState } from 'react'
import { CCol, CRow, CButton } from '@coreui/react'
import TextField from 'src/views/components/TextField'

const AddNewAttribute = () => {
  const [attribute, setAttribute] = useState('')

  // For props
  const _updateAttribute = (e) => {
    console.log(e.target.value)
    setAttribute((prevAttr) => {
      return e.target.value
    })
    console.log(attribute)
  }
  const clearAttribute = (e) => {
    setAttribute((prevAttr) => {
      return ''
    })
    console.log(attribute)
  }

  return (
    <div>
      <h4 className="font-weight-bold mb-4">Add New Attribute</h4>
      <TextField
        name="attributeName"
        placeholder="Eg: color"
        label="Attribute Name"
        require={true}
        value={attribute}
        _onchange={(e) => {
          _updateAttribute(e)
        }}
      />

      <CRow>
        <CCol sm="2" md="2">
          <CButton
            block
            variant="outline"
            color="dark"
            onClick={(e) => {
              clearAttribute(e)
            }}
          >
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
