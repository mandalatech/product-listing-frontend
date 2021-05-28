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

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

import isEmpty from 'src/validations/isEmpty'
import ErrorBody from 'src/reusable/ErrorBody'

const AddManufacturer = ({ isModal, _setShowCreateForm, ...props }) => {
  const [manufacturerName, setManufacturerName] = useState('')
  const [shortcutName, setShortcutName] = useState('')
  const [logo, setLogo] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})

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

  const validateInput = () => {
    setError({})
    if (isEmpty(manufacturerName)) {
      setError((currError) => {
        return {
          ...currError,
          manufacturerName: 'Please enter Manufacturer name',
        }
      })
    }
    if (isEmpty(shortcutName)) {
      setError((currError) => {
        return {
          ...currError,
          shortcutName: 'Please enter Shortcut Name',
        }
      })
    }

    if (isEmpty(logo)) {
      setError((currError) => {
        return {
          ...currError,
          logo: 'Please upload logo',
        }
      })
    }
  }

  const getPayload = () => {
    validateInput()
    if (
      !isEmpty(manufacturerName) &&
      !isEmpty(shortcutName) &&
      !isEmpty(logo)
    ) {
      return {
        payload: {
          name: manufacturerName,
          shortcut_name: shortcutName,
          logo: logo.image,
        },
        isValid: true,
      }
    } else {
      return {
        payload: null,
        isValid: false,
      }
    }
  }
  const submitPayload = (e) => {
    const { payload, isValid } = getPayload()
    if (isValid) {
      setLoading(true)
      callAPI(MANUFACTURER_URL, 'post', payload)
        .then((res) => {
          Toast.fire({
            icon: 'success',
            title: ToastMessage('success', 'Manufacturer created.'),
          })
          simulateEscape()
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
                error={error.manufacturerName && error.manufacturerName}
              />
              <TextField
                label="Manufacturer Shortcut Name"
                placeholder="Eg. BNSH"
                onChange={handleShortcutNameChange}
                value={shortcutName}
                error={error.shortcutName && error.shortcutName}
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
              <ErrorBody>{error.logo && error.logo}</ErrorBody>
            </div>
          </CRow>
          <CRow>
            <CCol sm="2" md="2">
              <CButton
                block
                variant="outline"
                color="dark"
                onClick={() => {
                  simulateEscape()
                  _setShowCreateForm && _setShowCreateForm(false)
                }}
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
