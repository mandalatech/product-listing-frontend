import React from 'react'
import {
  CCol,
  CButton,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInput,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'

const GroupHeader = ({ _setShowCreateForm }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-start">
        <h4 className="outside-card-title mb-4 mr-auto">Group</h4>
        <CCol md="2">
          <CButton
            block
            color="warning"
            onClick={() => {
              _setShowCreateForm(true)
            }}
          >
            <span style={{ color: '#fff', fontWeight: 600 }}>
              + &nbsp;Add Group
            </span>
          </CButton>
        </CCol>
      </div>
    </div>
  )
}

export default GroupHeader
