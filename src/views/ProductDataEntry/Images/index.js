import React from 'react'
import {
  CCol,
  CRow,
  CCardBody,
  CCard,
  CFormGroup,
  CCardText,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'

import TextArea from '../../components/TextArea'
import TextField from '../../components/TextField'

const Images = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Images</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CCardText style={{ fontWeight: 600, fontSize: '1.25rem' }}>
                Add Product Image
              </CCardText>
              <CFormGroup className="mb-4"></CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Images
