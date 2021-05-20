import React from 'react'
import { CCol, CRow, CCardBody, CCard, CButton } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'

import TextField from 'src/views/components/TextField'
import GroupContainer from './GroupContainer'
const AddGroup = () => {
  return (
    <>
      <CCard className="addpro-custom-card sm-pd mt-4">
        <h4 className="outside-card-title mb-4 p-2">Add Group</h4>
        <CCardBody>
          <TextField label="Group name" placeholder="Enter group name here" />

          <GroupContainer />

          <CRow>
            <CCol sm="2" md="2">
              <CButton block variant="outline" color="dark">
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
