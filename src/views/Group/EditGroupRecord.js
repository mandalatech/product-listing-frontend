import { CCol, CRow, CButton } from '@coreui/react'
import React, { useState, useEffect } from 'react'
import {
  getAllProductGroups,
  updateProductGroupAttribute,
} from 'src/api/groupRequests'

import TextField from 'src/components/TextField'
import isEmpty from 'src/validations/isEmpty'

import { connect } from 'react-redux'
import { updateProductGroups } from 'src/reducers/actions/index'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

const EditGroupRecord = ({ record, ...props }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState('')
  const [values, setValues] = useState('')
  const [choices, setChoices] = useState([])

  const handleEditChange = (e) => {
    setIsEdit((prevIsEdit) => !prevIsEdit)
  }

  const clearPlease = () => {
    setName('')
    setValues('')
    setChoices([])
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
      if (record.datatype === 'enum') {
        setChoices(record.enum_group.values)
      }
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
    setName(record.name)
    setValues(getValues())
  }, [])

  const attributesPayload = () => {
    const values = choices

    // Check the datatype
    let datatype
    if (isEmpty(values)) {
      datatype = 'text'
    } else {
      if (values.filter((val) => val.value !== '').length === 0) {
        datatype = 'text'
      }
      datatype = 'enum'
    }

    const newIdentifier = `${props.groupName} - ${name}`
    let payload = {
      datatype: datatype,
      name: name,
      description: newIdentifier, // Only name to store what was input by user.
      display_order: 1,
    }
    // If data type is enum , then prepare enum values.
    if (datatype === 'enum') {
      payload.enum_group = {
        name: newIdentifier,
        values: values,
      }
    }
    return payload
  }

  const submitPayload = () => {
    // Write logic for updating attribute.
    const payload = attributesPayload()
    const controller = new AbortController()
    const signal = controller.signal
    updateProductGroupAttribute(signal, record.id, payload).then(
      ({ json, response }) => {
        if (response.ok) {
          Toast.fire({
            icon: 'success',
            title: ToastMessage('success', 'Updated successfully.'),
          })
          getAllProductGroups(signal).then(({ json, response }) => {
            if (response.ok) {
              props.updateProductGroups(json)
            }
          })
        } else {
          Toast.fire({
            icon: 'warning',
            title: ToastMessage('warning', json.message),
          })
        }
      }
    )
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
            onClick={submitPayload}
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

const mapStateToProps = (state) => {
  return {
    groupName: state.group.name,
  }
}

export default connect(mapStateToProps, { updateProductGroups })(
  EditGroupRecord
)
