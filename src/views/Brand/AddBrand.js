import React, { useState, useEffect } from 'react'
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
import { BRAND_URL } from 'src/constants/urls'

import { connect } from 'react-redux'
import { updateBrands } from 'src/reducers/actions/index'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

import isEmpty from 'src/validations/isEmpty'

const AddBrand = ({ isModal, _setShowCreateForm, ...props }) => {
  const [brandName, setBrandName] = useState('')
  const [shortcutName, setShortcutName] = useState('')
  const [logo, setLogo] = useState({})
  const [loading, setLoading] = useState(false)

  // Simulate the ESC key for exiting modal.
  const simulateEscape = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  const setBrandImageFiles_ = (files) => {
    if (files && files.length > 0) {
      setLogo(files[files.length - 1])
    } else {
      setLogo(null)
    }
  }

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setBrandName(e.target.value)
  }

  const handleShortcutNameChange = (e) => {
    setShortcutName(e.target.value)
  }

  const getPayload = () => {
    if (!isEmpty(brandName) && !isEmpty(shortcutName) && !isEmpty(logo)) {
      return {
        payload: {
          name: brandName,
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
  console.log(' logo ', logo)
  const submitPayload = (e) => {
    const { payload, isValid } = getPayload()
    if (isValid) {
      setLoading(true)
      callAPI(BRAND_URL, 'post', payload())
        .then((res) => {
          Toast.fire({
            icon: 'success',
            title: ToastMessage('success', 'Brand created.'),
          })
          simulateEscape()
          callAPI(BRAND_URL, 'get').then((res) => {
            if (res.message && res.message === 'Network Error') {
              setLoading(false)
            } else {
              props.updateBrands(res)
              setLoading(false)
              setBrandName('')
              setShortcutName('')
            }
          })
        })
        .catch((err) => {
          setLoading(false)
          throw err
        })
    } else {
      Toast.fire({
        icon: 'warning',
        title: ToastMessage('warning', 'Please fill all the fields'),
      })
    }
  }

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
                value={brandName}
              />
              <TextField
                label="Brand Shortcut Name"
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
                type="BRAND_IMAGES"
                setImageFiles={(files) => setBrandImageFiles_(files)}
              />
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

AddBrand.defaultProps = {
  isModal: false,
}

export default connect(null, { updateBrands })(AddBrand)
