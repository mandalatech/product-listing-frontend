import React from 'react'
import { CCol, CRow, CCardBody, CCard, CButton, CLabel } from '@coreui/react'

import TextField from 'src/views/components/TextField'
import Dropzone from 'src/views/components/Dropzone'

const AddManufacturer = ({ isModal }) => {
  // Simulate the ESC key for exiting modal.
  const simulateEscape = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  return (
    <>
      <CCard className={isModal ? 'px-3' : 'addpro-custom-card sm-pd mt-4'}>
        {isModal ? null : (
          <h4 className="outside-card-title mb-4 p-2">Add Manufacturer</h4>
        )}
        <CCardBody>
          <CRow class="d-flex justify-content-evenly align-items-start">
            <CCol md="6">
              <TextField
                label="Manufacturer name"
                placeholder="Enter Manufacturer name here"
              />
              <TextField
                label="Manufacturer Shortcut Name"
                placeholder="Eg. BNSH"
              />
            </CCol>
            <div className="ml-5">
              <CLabel>Logo</CLabel>
              <Dropzone
                placeholder="<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here"
                padding={20}
                imagePreviewSize={150}
                previewOnSide={true}
                displayFlex={!isModal}
              />
            </div>
          </CRow>
          <CRow>
            <CCol sm="2" md="2">
              <CButton
                block
                variant="outline"
                color="dark"
                onClick={simulateEscape}
              >
                Cancel
              </CButton>
            </CCol>

            <CCol sm="2" md="2">
              <CButton block color="dark">
                Add
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

AddManufacturer.defaultProps = {
  isModal: false,
}

export default AddManufacturer
