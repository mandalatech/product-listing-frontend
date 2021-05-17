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
import Dropzone from '../../components/Dropzone'

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
              <div
                style={{
                  border: '1px solid #DFE0EB',
                  boxSizing: 'border-box',
                  borderRadius: '8px',
                  borderStyle: 'solid',
                  padding: '1rem',
                  borderWidth: '1px',
                }}
              >
                <CFormGroup style={{ marginBottom: 0 }}>
                  <Dropzone
                    placeholder="<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here"
                    padding={50}
                    imagePreviewSize={200}
                    previewOnSide={true}
                  />
                </CFormGroup>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Images
