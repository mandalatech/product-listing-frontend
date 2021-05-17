import React from 'react'
import { CCol, CRow, CCardBody, CCard, CFormGroup, CInput } from '@coreui/react'
import Dropzone from 'src/views/components/Dropzone'

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
                <CRow className="variant-attributes">
                  <CCol md="1" className="text-bold">
                    1
                  </CCol>
                  <CCol
                    className="variant-image"
                    style={{ marginLeft: '-5rem', marginRight: '3rem' }}
                  >
                    <Dropzone />
                  </CCol>
                  <CCol>
                    <CInput placeholder="Variant Name" />
                  </CCol>
                  <CCol>
                    <CInput placeholder="SKU" />
                  </CCol>
                  <CCol>
                    <CInput placeholder="MPN" />
                  </CCol>
                  <CCol>
                    <CInput placeholder="UPC" />
                  </CCol>
                  <CCol>
                    <CInput placeholder="ASIN" />
                  </CCol>
                  <CCol>
                    <CInput placeholder="Major Weight" type="number" />
                  </CCol>
                  <CCol>
                    <CInput placeholder="Minor Weight" type="number" />
                  </CCol>
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
