import { CButton, CCard, CCardBody, CCol, CRow, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  associateGroupWithAttribute,
  createProductGroup,
  createProductGroupAttribute,
  getAllProductGroups,
} from 'src/api/groupRequests'
import TextField from 'src/components/TextField'
import {
  setProductGroupAttributes,
  setProductGroupError,
  setProductGroupName,
  updateProductGroups,
} from 'src/reducers/actions/index'
import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'
import isEmpty from 'src/validations/isEmpty'
import validateProductGroupCreation from 'src/validations/productGroup.validation'
import GroupContainer from './GroupContainer'

const AddGroup = ({ isModal, _setShowCreateForm, ...props }) => {
  const [loading, setLoading] = useState(false)

  const group = props.group

  // Simulate the ESC key for exiting modal.
  const simulateEscape = (e) => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  const handleProductGroupNameChange = (e) => {
    props.setProductGroupName(e.target.value)
  }

  const productGroupPayload = () => {
    if (isEmpty(group.attributes)) {
      Toast.fire({
        icon: 'warning',
        title: ToastMessage('warning', 'At least one attribute is required.'),
      })
      return
    }
    return {
      name: group.name,
    }
  }

  const attributesPayload = () => {
    return group.attributes.map((attr) => {
      const name = `${group.name} - ${attr.name}`
      const values = attr.values

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

      let payload = {
        datatype: datatype,
        name: name,
        description: name,
        display_order: 1,
      }
      // If data type is enum , then prepare enum values.
      if (datatype === 'enum') {
        payload.enum_group = {
          name: name,
          values: values,
        }
      }
      return payload
    })
  }

  const abortController = new AbortController()
  const signal = abortController.signal

  const _associateGroupWithAttribute = (groupID, attributeID) => {
    const attributeFieldPayload = {
      attributeset: groupID,
      field: attributeID,
    }
    associateGroupWithAttribute(signal, attributeFieldPayload)
      .then(({ json, response }) => {
        if (response.ok) {
          console.log('Field is associated with group')
          // Clear the field.
          props.setProductGroupAttributes([])
          // Clear the name.
          props.setProductGroupName('')
          setLoading(false)
          Toast.fire({
            icon: 'success',
            title: ToastMessage('success', 'Product Group created.'),
          })
          simulateEscape()
          getAllProductGroups().then(({ response, json }) => {
            if (response.ok) {
              props.updateProductGroups(json)
            }
          })
        } else {
          setLoading(false)
          for (const key in json) {
            if (Object.hasOwnProperty.call(json, key)) {
              Toast.fire({
                icon: 'warning',
                title: ToastMessage('warning', json[key]),
              })
            }
          }
        }
      })
      .catch((e) => {
        throw e
      })
  }

  const _createAttribute = (groupID) => {
    attributesPayload().forEach((attrPayload) => {
      createProductGroupAttribute(signal, attrPayload)
        .then(({ json, response }) => {
          if (response.ok) {
            console.log('Product Attribute Created')
            const attributeID = json.id
            _associateGroupWithAttribute(groupID, attributeID)
          } else {
            setLoading(false)
            for (const key in json) {
              if (Object.hasOwnProperty.call(json, key)) {
                Toast.fire({
                  icon: 'warning',
                  title: ToastMessage('warning', json[key]),
                })
              }
            }
          }
        })
        .catch((e) => {
          throw e
        })
    })
  }

  const _createProductGroup = () => {
    const payload = productGroupPayload()
    if (isEmpty(payload)) {
      setLoading(false)
      return
    }
    createProductGroup(signal, payload)
      .then(({ json, response }) => {
        if (response.ok) {
          console.log('Product Group Created')
          const groupID = json.id

          // If product group gets created successfully,
          // then create product attribute.
          _createAttribute(groupID)
        } else {
          setLoading(false)
          for (const key in json) {
            if (Object.hasOwnProperty.call(json, key)) {
              Toast.fire({
                icon: 'warning',
                title: ToastMessage('warning', json[key]),
              })
            }
          }
        }
      })
      .catch((e) => {
        throw e
      })
  }

  const submitPayload = () => {
    const errors = validateProductGroupCreation(group)
    props.setProductGroupError(errors)
    if (isEmpty(errors)) {
      setLoading(true)
      _createProductGroup()
    }
  }

  return (
    <>
      <CCard className={isModal ? 'px-3' : 'addpro-custom-card sm-pd mt-4'}>
        {isModal ? null : (
          <h4 className="outside-card-title mb-4 p-2">Add Group</h4>
        )}
        <CCardBody>
          <TextField
            name="name"
            label="Group name"
            placeholder="Enter group name here"
            onChange={handleProductGroupNameChange}
            value={props.group.name}
            error={props.group.errors.name && props.group.errors.name}
          />
          <GroupContainer />
          <CRow>
            <CCol sm="2" md="2">
              <CButton
                block
                variant="outline"
                color="dark"
                onClick={(e) => {
                  simulateEscape(e)
                  _setShowCreateForm && _setShowCreateForm(false)
                }}
              >
                Cancel
              </CButton>
            </CCol>

            <CCol sm="2" md="2">
              <CButton
                block
                color="dark"
                onClick={submitPayload}
                disabled={loading}
              >
                {loading ? <CSpinner color="secondary" size="sm" /> : 'Save'}
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

AddGroup.defaultProps = {
  isModal: false,
}

const mapStatetoProps = (state) => {
  return {
    group: state.group,
  }
}

export default connect(mapStatetoProps, {
  setProductGroupName,
  updateProductGroups,
  setProductGroupAttributes,
  setProductGroupError,
})(AddGroup)
