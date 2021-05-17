import React, { useState } from 'react'
import {
  CCol,
  CRow,
  CCardBody,
  CCard,
  CFormGroup,
  CButton,
} from '@coreui/react'
import VariantRecord from './VariantRecord'

const VariantForm = () => {
  const [activeVariantFormState, setActiveVariantFormState] = useState({})
  const [currentFormCount, setcurrentFormCount] = useState(0)
  const [variantFormState, setVariantFormState] = useState([])

  const addVariantForm = () => {
    setVariantFormState((prevVariantFormState) => {
      return prevVariantFormState.concat({
        ...activeVariantFormState,
        count: currentFormCount + 1,
      })
    })
    setcurrentFormCount((prevCount) => {
      return prevCount + 1
    })
    console.log(variantFormState)
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CFormGroup className="mb-4 variant-form-table">
                <CRow className="heading">
                  <CCol md="1">#</CCol>
                  <CCol style={{ marginLeft: '-5rem', marginRight: '3rem' }}>
                    Image
                  </CCol>
                  <CCol>Product Variant Name</CCol>
                  <CCol>SKU</CCol>
                  <CCol>MPN</CCol>
                  <CCol>UPC</CCol>
                  <CCol>ASIN</CCol>
                  <CCol>Major Weight</CCol>
                  <CCol>Minor Weight</CCol>
                </CRow>
                <div className="divider" />
                {variantFormState.map((state, index) => (
                  <div key={index}>
                    <VariantRecord count={state.count} />
                  </div>
                ))}
              </CFormGroup>
              <div className="d-flex justify-content-around">
                <CButton color="light" onClick={addVariantForm}>
                  <span style={{ color: '#17171A', fontWeight: 600 }}>
                    + &nbsp;Add New Row
                  </span>
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default VariantForm
