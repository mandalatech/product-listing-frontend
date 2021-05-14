import React from 'react'
import { CCol, CRow, CCardBody, CCard, CLabel, CButton } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'

import RadioInput from 'src/views/components/RadioInput'
import ComboInput from 'src/views/components/ComboInput'
import HorizontalRule from 'src/views/components/HorizontalRule'
import TextField from 'src/views/components/TextField'

import productPlacholder from 'src/assets/images/productPlaceholder.png'

const Bundle = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Create Bundle</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CLabel>Are you creating bundle with different products?</CLabel>
              <div
                className="d-flex justify-content-between"
                style={{ width: '20%' }}
              >
                <RadioInput name="productChoice" value="yes" label="Yes" />
                <RadioInput name="productChoice" value="no" label="No (from same product)" />
              </div>

              <HorizontalRule />

              <CRow>
                <CCol>
                  <ComboInput
                    name="product1ForBundle"
                    label="Select item to create bundle for"
                    placeholder="Eg: Product Name"
                  />
                  <div className="d-flex">
                    <div>
                      <img src={productPlacholder} alt="Polo Tshirt" />
                    </div>
                    <div style={{ marginLeft: '1rem' }}></div>
                    <div class="d-flex flex-column justify-content-evenly align-items-start">
                      <p className="font-weight-bold" style={{ margin: '0' }}>
                        Polo Tshirt
                      </p>
                      <p style={{ margin: '0' }}>
                        Available Inventory Stock = 10
                      </p>
                    </div>
                  </div>
                </CCol>
                <CCol>
                  <ComboInput
                    name="product2ForBundle"
                    label="Bundle With"
                    placeholder="Eg: Product Name"
                  />
                  <div className="d-flex">
                    <div>
                      <img src={productPlacholder} alt="Polo Tshirt" />
                    </div>
                    <div style={{ marginLeft: '1rem' }}></div>
                    <div class="d-flex flex-column justify-content-evenly align-items-start">
                      <p className="font-weight-bold" style={{ margin: '0' }}>
                        Tshirt
                      </p>
                      <p style={{ margin: '0' }}>
                        Available Inventory Stock = 3
                      </p>
                    </div>
                  </div>
                </CCol>
              </CRow>
              <div className="my-4"></div>
              <TextField
                type="number"
                label="Bundle Quantity"
                placeholder="Enter quantity"
                name="bundleQuantity"
              />
              <div>
                <CIcon name="cilSettings" />
                &nbsp;
                <span>Info related to quantity selection criteria here.</span>
              </div>

              <div className="my-4"></div>

              <CRow>
                <CCol sm="2" md="2">
                  <CButton block variant="outline" color="dark">
                    Cancel
                  </CButton>
                </CCol>

                <CCol sm="2" md="2">
                  <CButton block color="dark">
                    Create Bundle
                  </CButton>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Bundle
