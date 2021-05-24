import React, { useState } from 'react'
import {
  CCol,
  CRow,
  CCardBody,
  CCard,
  CButton,
  CLabel,
  CSpinner,
} from '@coreui/react'

import TextField from 'src/views/components/TextField'
import Dropzone from 'src/views/components/Dropzone'

import callAPI from 'src/api'
import { MANUFACTURER_URL } from 'src/constants/urls'

import { connect } from 'react-redux'
import { updateManufacturers } from 'src/reducers/actions/index'

const AddManufacturer = ({ isModal, ...props }) => {
  const [manufacturerName, setManufacturerName] = useState('')
  const [shortcutName, setShortcutName] = useState('')
  const [logo, setLogo] = useState({})
  const [loading, setLoading] = useState(false)

  // Simulate the ESC key for exiting modal.
  const simulateEscape = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  const setManufacturerImageFiles_ = (files) => {
    if (files && files.length > 0) {
      setLogo(files[files.length - 1])
    } else {
      setLogo(null)
    }
  }

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setManufacturerName(e.target.value)
  }

  const handleShortcutNameChange = (e) => {
    setShortcutName(e.target.value)
  }

  const payload = () => {
    if (manufacturerName && shortcutName && logo) {
      return {
        name: manufacturerName,
        shortcut_name: shortcutName,
        logo: logo.base64,
      }
    } else {
      console.log('validation error')
    }
  }

  const submitPayload = (e) => {
    setLoading(true)
    console.log('Payload for manufacturer: ', payload())
    callAPI(MANUFACTURER_URL, 'post', payload())
      .then((res) => {
        callAPI(MANUFACTURER_URL, 'get').then((res) => {
          if (res.message && res.message === 'Network Error') {
            setLoading(false)
          } else {
            props.updateManufacturers(res)
            setLoading(false)
            setManufacturerName('')
            setShortcutName('')
          }
        })
      })
      .catch((err) => {
        setLoading(false)
        throw err
      })
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
                onChange={handleNameChange}
                value={manufacturerName}
              />
              <TextField
                label="Manufacturer Shortcut Name"
                placeholder="Eg. BNSH"
                onChange={handleShortcutNameChange}
                value={shortcutName}
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
                type="MANUFACTURER_IMAGES"
                setImageFiles={(files) => setManufacturerImageFiles_(files)}
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
              <CButton
                block
                color="dark"
                onClick={submitPayload}
                disabled={loading}
              >
                {loading ? <CSpinner color="secondary" size="sm" /> : 'Add'}
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

export default connect(null, { updateManufacturers })(AddManufacturer)
