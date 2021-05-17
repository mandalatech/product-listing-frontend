import React, { useState } from 'react'
import { CCol, CRow, CButton } from '@coreui/react'
import TextField from 'src/views/components/TextField'

const AddNewAttribute = () => {
  const [attribute, setAttribute] = useState('')
  const [addButtonShow, setAddButtonShow] = useState(false)

  // For props
  const _updateAttribute = (e) => {
    const value = e.target.value
    setAttribute((prevAttr) => {
      return value
    })
    if (value) {
      setAddButtonShow((prevState) => true)
    } else {
      setAddButtonShow((prevState) => false)
    }
  }
  const clearAttribute = (e) => {
    setAttribute((prevAttr) => {
      return ''
    })
    setAddButtonShow((prevState) => false)
  }

  const createAttribute = () => {
    // Check is string is not empty.
    if (attribute) {
    }
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
            onClick={(e) => {
              clearAttribute(e)
            }}
          >
            Cancel
          </CButton>
        </CCol>

        <CCol sm="2" md="2">
          <CButton
            block
            onClick={createAttribute}
            color={addButtonShow ? 'dark' : 'secondary'}
            disabled={addButtonShow ? false : true}
          >
            Add
          </CButton>
        </CCol>
      </CRow>
    </div>
  )
}

export default AddNewAttribute
