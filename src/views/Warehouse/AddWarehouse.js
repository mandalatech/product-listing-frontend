import React, { useState } from 'react'
import { CCol, CRow, CCardBody, CCard, CButton, CSpinner } from '@coreui/react'
import TextField from '../components/TextField'
import Dropzone from 'src/views/components/Dropzone'

import { connect } from 'react-redux'
import { updateWarehouses } from 'src/reducers/actions/index'

import callAPI from 'src/api'
import { WAREHOUSE_URL } from 'src/constants/urls'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

const AddWarehouse = ({ isModal, _setShowCreateForm, ...props }) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [structureImage, setStructureImage] = useState({})

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

  const payload = () => {
    if (
      name &&
      address &&
      city &&
      state &&
      zipCode &&
      phoneNumber &&
      structureImage
    ) {
      return {
        name,
        address,
        city,
        state,
        zip_code: zipCode,
        phone: phoneNumber,
        structure_image: structureImage.image,
      }
    } else {
      Toast.fire({
        icon: 'warning',
        title: ToastMessage('warning', 'Please fill all the fields.'),
      })
    }
  }

  const submitPayload = (e) => {
    setLoading(true)
    console.log('Payload for brand: ', payload())
    callAPI(WAREHOUSE_URL, 'post', payload())
      .then((res) => {
        Toast.fire({
          icon: 'success',
          title: ToastMessage('success', 'Warehouse created.'),
        })
        simulateEscape()
        callAPI(WAREHOUSE_URL, 'get').then((res) => {
          if (res.message && res.message === 'Network Error') {
            setLoading(false)
          } else {
            props.updateWarehouses(res)
            setLoading(false)
            setName('')
            setAddress('')
            setCity('')
            setState('')
            setZipCode('')
            setPhoneNumber('')
            setStructureImage({})
          }
        })
      })
      .catch((err) => {
        setLoading(false)
        throw err
      })
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
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <h5 className="font-weight-bold my-3">
                Warehouse Structure Image
              </h5>
              <Dropzone
                placeholder="<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here"
                padding={20}
                imagePreviewSize={150}
                previewOnSide={true}
                displayFlex={true}
                type="WAREHOUSE_IMAGES"
                setImageFiles={(files) => setStructureImage_(files)}
              />
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
                {loading ? <CSpinner color="secondary" size="sm" /> : 'Add'}
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default connect(null, { updateWarehouses })(AddWarehouse)
