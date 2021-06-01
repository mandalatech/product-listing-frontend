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

import { connect } from 'react-redux'
import { updateBrands } from 'src/reducers/actions/index'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

import { getAllBrands, updateBrand, createBrand } from 'src/api/brandRequests'

import isEmpty from 'src/validations/isEmpty'
import ErrorBody from 'src/reusable/ErrorBody'
import ImagePreview from '../components/ImagePreview'

const AddBrand = ({ isModal, _setShowCreateForm, edit, item, ...props }) => {
  const [brandName, setBrandName] = useState('')
  const [shortcutName, setShortcutName] = useState('')
  const [logo, setLogo] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const [showPreview, setShowPreview] = useState(edit)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (edit && !isEmpty(item)) {
      setBrandName(item.name)
      setShortcutName(item.shortcut_name)
      setLogo({
        image: item.logo.encoded,
        url: item.logo.url,
      })
    }
  }, [])

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

  const showPreview_ = (boolVal) => {
    setShowPreview(boolVal)
    setLogo({})
  }

  const validateInput = () => {
    setError({})
    if (isEmpty(brandName)) {
      setError((currError) => {
        return {
          ...currError,
          brandName: 'Please enter Brand name',
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
  const submitPayload = async (e) => {
    const { payload, isValid } = getPayload()
    if (isValid) {
      setLoading(true)

      const abortController = new AbortController()
      const signal = abortController.signal

      if (!edit) {
        createBrand(signal, payload).then(({ response, json }) => {
          if (response.ok) {
            Toast.fire({
              icon: 'success',
              title: ToastMessage('success', 'Brand created.'),
            })
            setSuccess(true)
            simulateEscape()
            getAllBrands().then(({ response, json }) => {
              if (response.ok) {
                props.updateBrands(json)
                setLoading(false)
                setBrandName('')
                setShortcutName('')
              } else {
                setLoading(false)
              }
            })
          } else {
            setLoading(false)
            throw json
          }
        })
      } else {
        await updateBrand(signal, item.id, payload).then(
          ({ json, response }) => {
            if (response.ok) {
              console.log('Request succesfully sent.')
              Toast.fire({
                icon: 'success',
                title: ToastMessage('success', 'Brand edited.'),
              })
              setSuccess(true)
              simulateEscape()
              setLoading(false)
              getAllBrands().then(({ response, json }) => {
                if (response.ok) {
                  props.updateBrands(json)
                }
              })
            } else {
              setLoading(false)
              if (json.non_field_errors) {
                json.non_field_errors.forEach((error) => {
                  Toast.fire({
                    icon: 'warning',
                    title: ToastMessage('warning', error),
                  })
                })
              }
            }
          }
        )
      }
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
                error={error.brandName && error.brandName}
              />
              <TextField
                label="Brand Shortcut Name"
                placeholder="Eg. BNSH"
                onChange={handleShortcutNameChange}
                value={shortcutName}
                error={error.shortcutName && error.shortcutName}
              />
            </CCol>
            <div className="ml-5">
              <CLabel>Logo</CLabel>
              {edit && item && logo.url && showPreview ? (
                <ImagePreview
                  image={logo.url}
                  alt={item.name}
                  showPreview_={showPreview_}
                />
              ) : (
                <Dropzone
                  placeholder="<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here"
                  padding={20}
                  imagePreviewSize={150}
                  previewOnSide={true}
                  displayFlex={!isModal}
                  type="BRAND_IMAGES"
                  setImageFiles={(files) => setBrandImageFiles_(files)}
                  clearFiles={success}
                />
              )}
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
                {loading ? <CSpinner color="secondary" size="sm" /> : 'Save'}
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
  edit: false,
  item: null,
}

export default connect(null, { updateBrands })(AddBrand)
