import React from 'react'
import { CCol, CRow, CCardBody, CCard, CFormGroup } from '@coreui/react'

import TextArea from '../../components/TextArea'
import Weight from './Weight'
import Dimensions from './Dimensions'

const Measurement = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Measurement</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <h5 className="outside-card-title mb-4">Weight</h5>
              <Weight />
              <h5 className="outside-card-title mb-4">Dimensions</h5>
              <Dimensions />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Measurement
