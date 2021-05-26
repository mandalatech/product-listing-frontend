import React from 'react'
import { CCol, CRow, CCardBody, CCard, CButton } from '@coreui/react'

import TextField from 'src/views/components/TextField'
import GroupContainer from './GroupContainer'

import { connect } from 'react-redux'
import { setProductGroupName } from 'src/reducers/actions/index'

const AddGroup = ({ isModal, _setShowCreateForm, ...props }) => {
  // Simulate the ESC key for exiting modal.
  const simulateEscape = (e) => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  const handleProductGroupNameChange = (e) => {
    props.setProductGroupName(e.target.value)
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
              <CButton block color="dark">
                Add
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default connect(null, { setProductGroupName })(AddGroup)
