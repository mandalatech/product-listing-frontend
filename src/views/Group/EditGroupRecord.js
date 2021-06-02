import { CCol, CRow, CButton } from '@coreui/react'
import React, { useState, useEffect } from 'react'

import TextField from 'src/components/TextField'
import isEmpty from 'src/validations/isEmpty'

const EditGroupRecord = ({ record }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState('')
  const [values, setValues] = useState('')
  const [choices, setChoices] = useState([])

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
    return values.map((value) => value.value).join(',')
  }

  useEffect(() => {
    // When user clicks cancel, the data needs to be cleared.
    if (!isEdit) {
      setName(record.description)
      setValues(getValues())
    }
  }, [isEdit])

  const handleValueChange = (e) => {
    // Create value payload for saving.
    const value = e.target.value
    setValues(value)
    const __choices = value
      .split(',')
      .filter((val) => !isEmpty(val.trim()))
      .map((val) => {
        return {
          value: val.trim(),
        }
      })
    setChoices(__choices)
  }

  useEffect(() => {
    setName(record.description)
    setValues(getValues())
  }, [])

  const submitPayload = () => {
    // Write logic for updating attribute.
  }

  return (
    <CRow className="d-flex align-items-center">
      <CCol md={isEdit ? '4' : '5'}>
        <TextField
          name="attributeName"
          label="Name"
          placeholder="Attribute Name"
          value={name}
          plaintext={!isEdit}
          disabled={!isEdit}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </CCol>
      <CCol md={isEdit ? '4' : '5'}>
        <TextField
          name="attributeName"
          label="Possible Values"
          placeholder={
            isEmpty(getValues()) ? 'Takes input from User' : 'Possible Values'
          }
          plaintext={!isEdit}
          disabled={!isEdit}
          value={values}
          onChange={handleValueChange}
        />
      </CCol>
      {isEdit ? (
        <CCol md="2">
          <CButton
            color="dark"
            block={true}
            variant={isEdit ? '' : 'outline'}
            style={{ borderRadius: '8%' }}
            onChange={submitPayload}
          >
            Save Changes
          </CButton>
        </CCol>
      ) : null}
      <CCol md="2">
        <CButton
          color="dark"
          block={true}
          onClick={handleEditChange}
          variant="outline"
          style={{ borderRadius: '8%' }}
        >
          {isEdit ? 'Cancel' : 'Edit'}
        </CButton>
      </CCol>
    </CRow>
  )
}

export default EditGroupRecord
