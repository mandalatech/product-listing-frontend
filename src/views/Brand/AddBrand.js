import React, { useState, useEffect } from 'react'
import { CCol, CRow, CCardBody, CCard, CButton, CLabel } from '@coreui/react'

import TextField from 'src/views/components/TextField'
import Dropzone from 'src/views/components/Dropzone'

import callAPI from 'src/api'
import { BRAND_URL } from 'src/constants/urls'

import axios from 'axios'

const AddBrand = ({ isModal }) => {
  const [brandName, setBrandName] = useState('')
  const [shortcutName, setShortcutName] = useState('')
  const [logo, setLogo] = useState({})

  // Simulate the ESC key for exiting modal.
  const simulateEscape = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  const handleLogoChange = (images) => {
    if (images.length > 0) {
      setLogo(images[0])
    } else {
      setLogo({})
    }
  }

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setBrandName(e.target.value)
  }

  const handleShortcutNameChange = (e) => {
    setShortcutName(e.target.value)
  }

  const submitPayload = async () => {
    // API CALL HERE.
  }

  useEffect(() => {
    console.log(brandName, shortcutName, logo)
  }, [brandName, shortcutName, logo])

  return (
    <>
      <CCard className={isModal ? 'px-3' : 'addpro-custom-card sm-pd mt-4'}>
        {isModal ? null : (
          <h4 className="outside-card-title mb-4 p-2">Add Brand</h4>
        )}
        <CCardBody>
          <CRow class="d-flex justify-content-evenly align-items-start">
            <CCol md="6">
              <TextField
                label="Brand name"
                placeholder="Enter Brand name here"
                onChange={handleNameChange}
              />
              <TextField
                label="Brand Shortcut Name"
                placeholder="Eg. BNSH"
                onChange={handleShortcutNameChange}
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
                onChange={handleLogoChange}
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
              <CButton block color="dark" onClick={submitPayload}>
                Add
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

AddBrand.defaultProps = {
  isModal: false,
}

export default AddBrand
