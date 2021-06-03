import { CCol, CRow, CButton, CSpinner } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import React, { useState, useEffect } from 'react'
import {
  deleteProductGroupAttribute,
  getAllProductGroups,
  updateProductGroupAttribute,
} from 'src/api/groupRequests'

import TextField from 'src/components/TextField'
import isEmpty from 'src/validations/isEmpty'

import { connect } from 'react-redux'
import {
  populateExistingGroupAttributes,
  updateProductGroups,
} from 'src/reducers/actions/index'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

const EditGroupRecord = ({ record, ...props }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState('')
  const [values, setValues] = useState('')
  const [choices, setChoices] = useState([])
  const [delButtonLoading, setDelButtonLoading] = useState(false)
  const [saveButtonLoading, setSaveButtonLoading] = useState(false)

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
      setName(record.name)
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
    setSaveButtonLoading(true)
    updateProductGroupAttribute(signal, record.id, payload).then(
      ({ json, response }) => {
        if (response.ok) {
          Toast.fire({
            icon: 'success',
            title: ToastMessage('success', 'Updated successfully.'),
          })
          setSaveButtonLoading(false)
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
          setSaveButtonLoading(false)
        }
      }
    )
  }

  const handleDelete = () => {
    const controller = new AbortController()
    const signal = controller.signal
    setDelButtonLoading(true)
    deleteProductGroupAttribute(signal, record.id).then(
      ({ json, response }) => {
        if (response.ok) {
          Toast.fire({
            icon: 'success',
            title: ToastMessage('success', json.message),
          })
          // Remove the attribute from the state.
          const newList = props.existingAttributes.filter(
            (attr) => attr.id !== record.id
          )
          // Populate existing attributes again.
          props.populateExistingGroupAttributes(newList)
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
        setDelButtonLoading(false)
      }
    )
  }

  return (
    <CRow className="d-flex align-items-center">
      <CCol md={isEdit ? '3' : '4'}>
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
            disabled={saveButtonLoading}
          >
            {saveButtonLoading ? (
              <CSpinner color="secondary" size="sm" />
            ) : (
              'Update'
            )}
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
      <CCol>
        <CCol md="1">
          <CButton onClick={handleDelete} disabled={delButtonLoading}>
            {delButtonLoading ? (
              <CSpinner color="secondary" size="sm" />
            ) : (
              <CIcon className="text-danger" name="cil-x-circle" />
            )}
          </CButton>
        </CCol>
      </CCol>
    </CRow>
  )
}

const mapStateToProps = (state) => {
  return {
    groupName: state.group.name,
    existingAttributes: state.group.existingAttributes,
  }
}

export default connect(mapStateToProps, {
  updateProductGroups,
  populateExistingGroupAttributes,
})(EditGroupRecord)
