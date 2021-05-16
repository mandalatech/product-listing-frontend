import React from 'react'
import { CCol, CRow, CCardBody, CCard, CFormGroup } from '@coreui/react'

const VariantForm = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CFormGroup className="mb-4 variant-form-table">
                <CRow className="heading">
                  <CCol md="1">#</CCol>
                  <CCol>Image</CCol>
                  <CCol>Product Variant Name</CCol>
                  <CCol>SKU</CCol>
                  <CCol>MPN</CCol>
                  <CCol>UPC</CCol>
                  <CCol>ASIN</CCol>
                  <CCol>Major Weight</CCol>
                  <CCol>Minor Weight</CCol>
                </CRow>
                <div className="divider" />
                <CRow className="variant-attributes">
                  <CCol md="1" className="text-bold">
                    1
                  </CCol>
                  <CCol className="variant-image">
                  Image
                    <input type="file" className="custom-file-input" />
                  </CCol>
                  <CCol>Product Variant Name</CCol>
                  <CCol>SKU</CCol>
                  <CCol>MPN</CCol>
                  <CCol>UPC</CCol>
                  <CCol>ASIN</CCol>
                  <CCol>Major Weight</CCol>
                  <CCol>Minor Weight</CCol>
                </CRow>
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default VariantForm
