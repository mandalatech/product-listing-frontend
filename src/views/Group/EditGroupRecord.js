import { CCol, CRow, CButton } from '@coreui/react'
import React, { useState, useEffect } from 'react'

import TextField from 'src/components/TextField'
import isEmpty from 'src/validations/isEmpty'

const EditGroupRecord = ({ record }) => {
  const [isEdit, setIsEdit] = useState(false)

  const handleEditChange = (e) => {
    setIsEdit((prevIsEdit) => !prevIsEdit)
  }

  const getValues = () => {
    let values
    if (record.datatype === 'text') {
      values = []
    } else if (record.datatype === 'enum') {
      values = record.enum_group.values
    }
    return values
  }

  return (
    <CRow className="d-flex align-items-center">
      <CCol md="4">
        <TextField
          name="attributeName"
          label="Name"
          placeholder="Attribute Name"
          value={record.description}
          plaintext={!isEdit}
          disabled={!isEdit}
        />
      </CCol>
      <CCol md="5">
        <TextField
          name="attributeName"
          label="Possible Values"
          placeholder={
            isEmpty(getValues()) ? 'Takes input from User' : 'Possible Values'
          }
          plaintext={!isEdit}
          disabled={!isEdit}
          value={getValues()
            .map((value) => value.value)
            .join(',')}
        />
      </CCol>
      <CCol md="2">
        <CButton
          color="dark"
          block={true}
          onClick={handleEditChange}
          variant={isEdit ? '' : 'outline'}
          style={{ borderRadius: '8%' }}
        >
          {isEdit ? 'Save Changes' : 'Edit'}
        </CButton>
      </CCol>
    </CRow>
  )
}

export default EditGroupRecord
