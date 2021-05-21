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

const BrandHeader = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-start">
        <h4 className="outside-card-title mb-4 mr-auto">Brand</h4>
        <CCol md="4">
          <CInputGroup>
            <CInputGroupPrepend>
              <CInputGroupText style={{ backgroundColor: '#ffffff' }}>
                <CIcon name="cil-magnifying-glass" />
              </CInputGroupText>
            </CInputGroupPrepend>
            <CInput placeholder="Search Brands" />
          </CInputGroup>
        </CCol>
        <CCol md="2">
          <CButton block color="warning">
            <span style={{ color: '#fff', fontWeight: 600 }}>
              + &nbsp;Add Brand
            </span>
          </CButton>
        </CCol>
      </div>
    </div>
  )
}

export default BrandHeader
