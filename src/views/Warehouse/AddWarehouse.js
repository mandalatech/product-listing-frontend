import React, { useState, useEffect } from 'react'
import { CCol, CRow, CCardBody, CCard, CButton, CSpinner } from '@coreui/react'
import TextField from '../components/TextField'
import Dropzone from 'src/views/components/Dropzone'

import { connect } from 'react-redux'
import { updateWarehouses } from 'src/reducers/actions/index'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

import isEmpty from 'src/validations/isEmpty'
import ErrorBody from 'src/reusable/ErrorBody'

import {
  getAllWarehouses,
  updateWarehouse,
  createWarehouse,
} from 'src/api/warehouseRequests'
import ImagePreview from '../components/ImagePreview'

const AddWarehouse = ({
  isModal,
  _setShowCreateForm,
  edit,
  item,
  ...props
}) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [structureImage, setStructureImage] = useState({})
  const [error, setError] = useState({})
  const [showPreview, setShowPreview] = useState(edit)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (edit && !isEmpty(item)) {
      setName(item.name)
      setAddress(item.address)
      setCity(item.city)
      setState(item.state)
      setZipCode(item.zip_code)
      setPhoneNumber(item.phone)
      setStructureImage({
        image: item.structure_image.encoded,
        url: item.structure_image.url,
      })
    }
  }, [])

  // Simulate the ESC key for exiting modal.
  const simulateEscape = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  const setStructureImage_ = (files) => {
    if (files && files.length > 0) {
      setStructureImage(files[files.length - 1])
    } else {
      setStructureImage(null)
    }
  }

  const showPreview_ = (boolVal) => {
    setShowPreview(boolVal)
    setStructureImage({})
  }

  const validateInput = () => {
    setError({})
    if (isEmpty(name)) {
      setError((currError) => {
        return {
          ...currError,
          name: 'Please enter Name',
        }
      })
    }
    if (isEmpty(address)) {
      setError((currError) => {
        return {
          ...currError,
          address: 'Please enter address',
        }
      })
    }

    if (isEmpty(address)) {
      setError((currError) => {
        return {
          ...currError,
          address: 'Please enter address',
        }
      })
    }

    if (isEmpty(city)) {
      setError((currError) => {
        return {
          ...currError,
          city: 'Please enter city',
        }
      })
    }

    if (isEmpty(state)) {
      setError((currError) => {
        return {
          ...currError,
          state: 'Please enter state',
        }
      })
    }

    if (isEmpty(address)) {
      setError((currError) => {
        return {
          ...currError,
          address: 'Please enter address',
        }
      })
    }

    if (isEmpty(zipCode)) {
      setError((currError) => {
        return {
          ...currError,
          zipCode: 'Please enter ZIP code',
        }
      })
    }

    if (zipCode.length > 10) {
      setError((currError) => {
        return {
          ...currError,
          zipCode: 'Invalid ZIP code length',
        }
      })
    }

    if (isEmpty(phoneNumber)) {
      setError((currError) => {
        return {
          ...currError,
          phoneNumber: 'Please enter phone number',
        }
      })
    }

    if (phoneNumber.length > 15) {
      setError((currError) => {
        return {
          ...currError,
          phoneNumber: 'Invalid Phone number length',
        }
      })
    }

    if (isEmpty(structureImage)) {
      setError((currError) => {
        return {
          ...currError,
          structureImage: 'Please upload structure image',
        }
      })
    }
  }

  const getPayload = () => {
    validateInput()
    if (
      !isEmpty(name) &&
      !isEmpty(address) &&
      !isEmpty(city) &&
      !isEmpty(state) &&
      !isEmpty(zipCode) &&
      zipCode.length <= 10 &&
      !isEmpty(phoneNumber) &&
      phoneNumber.length <= 15 &&
      !isEmpty(structureImage)
    ) {
      return {
        payload: {
          name,
          address,
          city,
          state,
          zip_code: zipCode,
          phone: phoneNumber,
          structure_image: structureImage.image,
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
        createWarehouse(signal, payload).then(({ response, json }) => {
          if (response.ok) {
            Toast.fire({
              icon: 'success',
              title: ToastMessage('success', 'Warehouse created.'),
            })
            setSuccess(true)
            simulateEscape()
            getAllWarehouses(signal).then(({ response, json }) => {
              if (response.ok) {
                props.updateWarehouses(json)
                setLoading(false)
                setName('')
                setAddress('')
                setCity('')
                setState('')
                setZipCode('')
                setPhoneNumber('')
                setStructureImage({})
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
        await updateWarehouse(signal, item.id, payload).then(
          ({ json, response }) => {
            if (response.ok) {
              console.log('Request succesfully sent.')
              Toast.fire({
                icon: 'success',
                title: ToastMessage('success', 'Warehouse edited.'),
              })
              setSuccess(true)
              simulateEscape()
              setLoading(false)
              getAllWarehouses().then(({ response, json }) => {
                if (response.ok) {
                  props.updateWarehouses(json)
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
    <div>
      <CCard className="addpro-custom-card sm-pd">
        <CCardBody>
          {isModal ? null : (
            <CRow>
              <CCol>
                <h4 className="font-weight-bold mb-4">Add Warehouse</h4>
              </CCol>
            </CRow>
          )}
          <CRow>
            <CCol xs="12" md="6">
              <TextField
                label="Warehouse Name"
                placeholder="Enter Warehouse name here"
                onChange={(e) => {
                  setName(e.target.value)
                }}
                value={name}
                error={error.name && error.name}
              />
            </CCol>
            <CCol xs="12" md="6">
              <TextField
                label="Address"
                placeholder="Enter Warehouse address"
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
                value={address}
                error={error.address && error.address}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12" md="6" lg="4">
              <TextField
                label="City"
                placeholder="Enter City"
                onChange={(e) => {
                  setCity(e.target.value)
                }}
                value={city}
                error={error.city && error.city}
              />
            </CCol>
            <CCol xs="12" md="6" lg="4">
              <TextField
                label="State"
                placeholder="State"
                onChange={(e) => {
                  setState(e.target.value)
                }}
                value={state}
                error={error.state && error.state}
              />
            </CCol>
            <CCol xs="12" md="6" lg="4">
              <TextField
                label="Zip Code"
                placeholder="Zip Code"
                onChange={(e) => {
                  setZipCode(e.target.value)
                }}
                value={zipCode}
                error={error.zipCode && error.zipCode}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12" md="6" lg="4">
              <TextField
                label="Phone Number"
                placeholder="Enter phone number"
                onChange={(e) => {
                  setPhoneNumber(e.target.value)
                }}
                value={phoneNumber}
                error={error.phoneNumber && error.phoneNumber}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <h5 className="font-weight-bold my-3">
                Warehouse Structure Image
              </h5>
              {edit && item && structureImage.url && showPreview ? (
                <ImagePreview
                  image={structureImage.url}
                  alt={item.name}
                  showPreview_={showPreview_}
                />
              ) : (
                <Dropzone
                  placeholder="<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here"
                  padding={20}
                  imagePreviewSize={150}
                  previewOnSide={true}
                  displayFlex={true}
                  type="WAREHOUSE_IMAGES"
                  setImageFiles={(files) => setStructureImage_(files)}
                  clearFiles={success}
                />
              )}
              <ErrorBody>
                {error.structureImage && error.structureImage}
              </ErrorBody>
            </CCol>
          </CRow>
          <CRow className="mt-5">
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
    </div>
  )
}

AddWarehouse.defaultProps = {
  isModal: false,
  edit: false,
  item: null,
}

export default connect(null, { updateWarehouses })(AddWarehouse)
