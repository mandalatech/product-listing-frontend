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

import TextField from 'src/components/TextField'
import Dropzone from 'src/components/Dropzone'

import { connect } from 'react-redux'
import { updateManufacturers } from 'src/reducers/actions/index'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

import isEmpty from 'src/validations/isEmpty'
import ErrorBody from 'src/reusable/ErrorBody'

import {
  createManufacturer,
  getAllManufacturers,
  updateManufacturer,
} from 'src/api/manufacturerRequests'
import ImagePreview from '../../components/ImagePreview'

const AddManufacturer = ({
  isModal,
  _setShowCreateForm,
  edit,
  item,
  ...props
}) => {
  const [manufacturerName, setManufacturerName] = useState('')
  const [shortcutName, setShortcutName] = useState('')
  const [logo, setLogo] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const [showPreview, setShowPreview] = useState(edit)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (edit && !isEmpty(item)) {
      setManufacturerName(item.name)
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

  const showPreview_ = (boolVal) => {
    setShowPreview(boolVal)
    setLogo({})
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
  }

  const getPayload = () => {
    validateInput()
    if (!isEmpty(manufacturerName) && !isEmpty(shortcutName)) {
      const payload = {
        name: manufacturerName,
        shortcut_name: shortcutName,
      }
      if (!isEmpty(logo.image)) {
        payload.logo = logo.image
      } else {
        payload.logo = ''
      }
      return {
        payload: payload,
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
        createManufacturer(signal, payload).then(({ response, json }) => {
          if (response.ok) {
            Toast.fire({
              icon: 'success',
              title: ToastMessage('success', 'Manufacturer created.'),
            })
            setSuccess(true)
            simulateEscape()
            getAllManufacturers(signal).then(({ response, json }) => {
              if (response.ok) {
                props.updateManufacturers(json)
                setLoading(false)
                setManufacturerName('')
                setShortcutName('')
              }
            })
          } else {
            setLoading(false)
            throw json
          }
        })
      } else {
        await updateManufacturer(signal, item.id, payload).then(
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
              getAllManufacturers().then(({ response, json }) => {
                if (response.ok) {
                  props.updateManufacturers(json)
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
                  type="MANUFACTURER_IMAGES"
                  clearFiles={success}
                  setImageFiles={(files) => setManufacturerImageFiles_(files)}
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

AddManufacturer.defaultProps = {
  isModal: false,
  edit: false,
  item: null,
}

export default connect(null, { updateManufacturers })(AddManufacturer)
