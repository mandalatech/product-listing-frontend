import React, { useState } from 'react'
import { CCol, CRow, CCardBody, CCard, CButton, CSpinner } from '@coreui/react'
import TextField from '../components/TextField'
import Dropzone from 'src/views/components/Dropzone'

import callAPI from 'src/api'
import { COLOR_URL } from 'src/constants/urls'

import { connect } from 'react-redux'
import { updateColors } from 'src/reducers/actions/index'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

const AddColor = ({ isModal, _setShowCreateForm, ...props }) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [shortcutName, setShortcutName] = useState('')
  const [hexCode, setHexCode] = useState('')
  const [image, setImage] = useState({})

  // Simulate the ESC key for exiting modal.
  const simulateEscape = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  const payload = () => {
    if (name && shortcutName && (hexCode || image)) {
      return {
        name,
        shortcut_name: shortcutName,
        image,
        code: hexCode,
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
    callAPI(COLOR_URL, 'post', payload())
      .then((res) => {
        Toast.fire({
          icon: 'success',
          title: ToastMessage('success', 'Warehouse created.'),
        })
        simulateEscape()
        callAPI(COLOR_URL, 'get').then((res) => {
          if (res.message && res.message === 'Network Error') {
            setLoading(false)
          } else {
            props.updateColors(res)
            setLoading(false)
            setName('')
            setShortcutName('')
            setHexCode('')
            setImage({})
          }
        })
      })
      .catch((err) => {
        setLoading(false)
        throw err
      })
  }

  const setImage_ = (files) => {
    if (files && files.length > 0) {
      setImage(files[files.length - 1])
    } else {
      setImage(null)
    }
  }
  return (
    <div>
      <CCard className="addpro-custom-card sm-pd">
        <CCardBody>
          <CRow>
            <CCol>
              <h4 className="font-weight-bold mb-4">Add Color</h4>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12" md="6">
              <TextField
                label="Color Name"
                placeholder="Enter Color name here"
                onChange={(e) => {
                  setName(e.target.value)
                }}
                value={name}
              />
              <TextField
                label="Shortcut Name"
                placeholder="Enter Shortcut Name here"
                onChange={(e) => {
                  setShortcutName(e.target.value)
                }}
                value={shortcutName}
              />
            </CCol>
            <CCol>
              <h5 className="font-weight-bold mb-2">Color Image</h5>
              <Dropzone
                placeholder="<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here"
                padding={20}
                imagePreviewSize={150}
                previewOnSide={true}
                displayFlex={true}
                type="COLOR_IMAGES"
                setImageFiles={(files) => setImage_(files)}
              />

              <p className="h5 font-weight-bold my-3">OR</p>
              <TextField
                label="HEX/HTML Code"
                placeholder="Eg: #ff0000 for Red"
                onChange={(e) => {
                  setHexCode(e.target.value)
                }}
                value={hexCode}
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

AddColor.defaultProps = {
  isModal: false,
}

export default connect(null, { updateColors })(AddColor)
