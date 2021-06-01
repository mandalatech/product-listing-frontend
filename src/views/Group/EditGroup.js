import React, { useState, useEffect } from 'react'
import { CCol, CRow, CCardBody, CCard, CButton, CSpinner } from '@coreui/react'

import TextField from 'src/components/TextField'
import GroupContainer from './GroupContainer'

import { connect } from 'react-redux'
import {
  setProductGroupName,
  updateProductGroups,
} from 'src/reducers/actions/index'

import isEmpty from 'src/validations/isEmpty'

import { ToastMessage } from 'src/reusable/Toast/ToastMessage'
import Toast from 'src/reusable/Toast/Toast'

import {
  setProductGroupAttributes,
  populateExistingGroupAttributes,
} from 'src/reducers/actions/index'
import {
  associateGroupWithAttribute,
  createProductGroup,
  createProductGroupAttribute,
  getAllProductGroups,
} from 'src/api/groupRequests'

const EditGroup = ({ edit, item, isModal, ...props }) => {
  // Simulate the ESC key for exiting modal.
  const simulateEscape = (e) => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  useEffect(() => {
    if (edit && !isEmpty(item)) {
      console.log('SELECTED ITEM', item)
      if (!isEmpty(item.fields)) {
        const availableAttributes = item.fields.map((field) => {
          let values
          if (field.datatype === 'text') {
            values = []
          } else if (field.datatype === 'enum') {
            values = field.enum_group.values
          }
          return {
            id: field.id,
            name: field.name,
            values: values,
          }
        })
        props.populateExistingGroupAttributes(availableAttributes)
        props.setProductGroupName(item.name)
      }
    }
  }, [item])

  return (
    <div>
      <CCard className={isModal ? 'px-3' : 'addpro-custom-card sm-pd mt-4'}>
        {isModal ? null : (
          <h4 className="outside-card-title mb-4 p-2">Add Group</h4>
        )}
        <CCardBody>
          <TextField
            name="name"
            label="Group name"
            placeholder="Enter group name here"
            value={props.group.name}
          />
          <GroupContainer />
          <CRow>
            <CCol sm="2" md="2">
              <CButton block variant="outline" color="dark">
                Cancel
              </CButton>
            </CCol>

            <CCol sm="2" md="2">
              <CButton block color="dark">
                Update
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  )
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
  populateExistingGroupAttributes,
})(EditGroup)
