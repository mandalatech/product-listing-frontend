import React, { useState } from 'react'
import { CCol, CRow, CCardBody, CCard, CButton, CSpinner } from '@coreui/react'

import TextField from 'src/views/components/TextField'
import GroupContainer from './GroupContainer'

import { connect } from 'react-redux'
import { setProductGroupName } from 'src/reducers/actions/index'

import isEmpty from 'src/validations/isEmpty'

import { callAPIWithMeta, _axios } from 'src/api'
import { requestWrapper } from 'src/api/requestWrapper'
import {
  PRODUCT_GROUP_ATTRIBUTE_URL,
  PRODUCT_GROUP_FIELDS_URL,
  PRODUCT_GROUP_URL,
} from 'src/constants/urls'

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

  const associateGroupWithAttribute = (groupID, attributeID) => {
    const attributeFieldPayload = {
      attributeset: groupID,
      field: attributeID,
    }
    requestWrapper(
      PRODUCT_GROUP_FIELDS_URL,
      'post',
      signal,
      attributeFieldPayload
    )
      .then(({ json, response }) => {
        if (response.ok) {
          console.log('Field is associated with group')
        } else {
          console.log(json)
        }
      })
      .catch((e) => {
        throw e
      })
  }

  const createAttribute = (groupID) => {
    attributesPayload().forEach((attrPayload) => {
      requestWrapper(PRODUCT_GROUP_ATTRIBUTE_URL, 'post', signal, attrPayload)
        .then(({ json, response }) => {
          if (response.ok) {
            console.log('Product Attribute Created')
            const attributeID = json.id
            associateGroupWithAttribute(groupID, attributeID)
          } else {
            console.log(json)
          }
        })
        .catch((e) => {
          throw e
        })
    })
  }

  const createProductGroup = () => {
    requestWrapper(PRODUCT_GROUP_URL, 'post', signal, productGroupPayload())
      .then(({ json, response }) => {
        if (response.ok) {
          console.log('Product Group Created')
          const groupID = json.id

          // If product group gets created successfully,
          // then create product attribute.
          createAttribute(groupID)
        } else {
          console.log(json)
        }
      })
      .catch((e) => {
        throw e
      })
  }

  const submitPayload = () => {
    createProductGroup()
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
                {loading ? <CSpinner color="secondary" size="sm" /> : 'Add'}
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

const mapStatetoProps = (state) => {
  return {
    group: state.group,
  }
}

export default connect(mapStatetoProps, { setProductGroupName })(AddGroup)
