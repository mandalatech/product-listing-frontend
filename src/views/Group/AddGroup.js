import React from 'react'
import { CCol, CRow, CCardBody, CCard, CButton } from '@coreui/react'

import TextField from 'src/views/components/TextField'
import GroupContainer from './GroupContainer'
const AddGroup = ({ isModal }) => {
  return (
    <>
      <CCard className={isModal ? 'px-3' : 'addpro-custom-card sm-pd mt-4'}>
        {isModal ? null : (
          <h4 className="outside-card-title mb-4 p-2">Add Group</h4>
        )}
        <CCardBody>
          <TextField label="Group name" placeholder="Enter group name here" />
          <GroupContainer />
          <CRow>
            <CCol sm="2" md="2">
              <CButton block variant="outline" color="dark" >
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

export default AddGroup
