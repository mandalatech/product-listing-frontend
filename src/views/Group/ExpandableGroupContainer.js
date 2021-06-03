import { CButton, CCol, CRow, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import HorizontalRule from 'src/components/HorizontalRule'
import GroupContainer from './GroupContainer'
import {
  associateGroupWithAttribute,
  createProductGroupAttribute,
  getAllProductGroups,
} from 'src/api/groupRequests'

import {
  setProductGroupAttributes,
  setProductGroupError,
  setProductGroupName,
  updateProductGroups,
} from 'src/reducers/actions/index'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'
import isEmpty from 'src/validations/isEmpty'
import { connect } from 'react-redux'

const ExpandableGroupContainer = (props) => {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleShow = (e) => {
    setShow((prevShow) => !prevShow)
  }

  const group = props.group

  const abortController = new AbortController()
  const signal = abortController.signal

  const attributesPayload = () => {
    return group.attributes.map((attr) => {
      const name = attr.name
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
        description: `${group.name} - ${attr.name}`, // Store attribute and group name
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

  const _updateProductGroup = (e) => {
    const productGroupID = props.group.selectedGroupID
    setLoading(true)
    _createAttribute(productGroupID)
  }

  return (
    <div>
      <HorizontalRule />
      <div className="d-flex justify-content-end">
        <CButton onClick={toggleShow} draggable={true}>
          {show ? 'Collapse ⬆' : 'Expand to add attributes ⬇'}
        </CButton>
      </div>
      {show ? (
        <div>
          <GroupContainer />
          <CRow>
            <CCol sm="2" md="2">
              <CButton block variant="outline" color="dark">
                Cancel
              </CButton>
            </CCol>
            <CCol sm="2" md="2">
              <CButton
                block
                color="dark"
                onClick={_updateProductGroup}
                disabled={loading}
              >
                {loading ? <CSpinner color="secondary" size="sm" /> : 'Save'}
              </CButton>
            </CCol>
          </CRow>
        </div>
      ) : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    group: state.group,
  }
}

export default connect(mapStateToProps, {
  setProductGroupAttributes,
  setProductGroupError,
  setProductGroupName,
  updateProductGroups,
})(ExpandableGroupContainer)
