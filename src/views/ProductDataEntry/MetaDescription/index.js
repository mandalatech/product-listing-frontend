import React from 'react'
import { CCol, CRow, CCardBody, CCard, CFormGroup } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'

import TextArea from '../../components/TextArea'
import TextField from '../../components/TextField'

const MetaDescription = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">
            Meta Description (Optional)
          </h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CFormGroup className="mb-4">
                <TextField
                  name="metaTitle"
                  label="Title"
                  placeholder="Meta title of product"
                />
                <TextArea
                  name="metaDescription"
                  label="Description"
                  placeholder="Short meta description about product"
                />
                <TextField
                  name="metaKeywords"
                  label="Keywords"
                  placeholder="Keyword e.g. furniture, wood, chair"
                />

                <div>
                  <CIcon name="cilSettings" />
                  &nbsp;
                  <span>Add multiple keyword seperated by “,” comma</span>
                </div>
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default MetaDescription
