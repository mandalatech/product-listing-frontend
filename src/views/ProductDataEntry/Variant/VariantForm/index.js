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
import HorizontalRule from 'src/views/components/HorizontalRule'

const VariantForm = () => {
  const [activeVariantFormState, setActiveVariantFormState] = useState({})
  const [currentFormCount, setCurrentFormCount] = useState(0)
  const [variantFormState, setVariantFormState] = useState([])

  const addVariantForm = () => {
    setVariantFormState((prevVariantFormState) => {
      return prevVariantFormState.concat({
        ...activeVariantFormState,
        id: Math.floor(Math.random() * 100000000 + 1),
      })
    })
    setCurrentFormCount((prevCount) => {
      return prevCount + 1
    })
    console.log(variantFormState)
  }

  // To be passed as Prop.
  const _removeRecord = (id) => {
    const newVariantFormState = variantFormState.filter(
      (form) => form.id !== id
    )
    setVariantFormState(newVariantFormState)
    setCurrentFormCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              {currentFormCount > 0 ? (
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
                      <VariantRecord
                        state={state}
                        symbol={index + 1}
                        removeRecord={(id) => {
                          _removeRecord(id)
                        }}
                      />
                      <HorizontalRule
                        marginBottom="0.8rem"
                        marginTop="0.8rem"
                      />
                    </div>
                  ))}
                </CFormGroup>
              ) : null}

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
