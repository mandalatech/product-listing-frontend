import React, { useState, useEffect } from 'react'
import { CCol, CRow, CCardBody, CCard, CButton, CSpinner } from '@coreui/react'
import TextField from '../components/TextField'
import Dropzone from 'src/views/components/Dropzone'

import { connect } from 'react-redux'
import { updateColors } from 'src/reducers/actions/index'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

import isEmpty from 'src/validations/isEmpty'

import { createColor, getAllColors, updateColor } from 'src/api/colorRequests'
import ImagePreview from '../components/ImagePreview'

const AddColor = ({ isModal, _setShowCreateForm, edit, item, ...props }) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [shortcutName, setShortcutName] = useState('')
  const [hexCode, setHexCode] = useState('')
  const [image, setImage] = useState({})
  const [error, setError] = useState({})
  const [showPreview, setShowPreview] = useState(edit)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (edit && !isEmpty(item)) {
      setName(item.name)
      setShortcutName(item.shortcut_name)
      setHexCode(item.code)
      setImage({
        image: item.image.encoded,
        url: item.image.url,
      })
    }
  }, [])

  // Simulate the ESC key for exiting modal.
  const simulateEscape = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  const showPreview_ = (boolVal) => {
    setShowPreview(boolVal)
    setImage({})
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
    if (isEmpty(shortcutName)) {
      setError((currError) => {
        return {
          ...currError,
          shortcutName: 'Please enter Shortcut Name',
        }
      })
    }

    if (isEmpty(image) && isEmpty(hexCode)) {
      setError((currError) => {
        return {
          ...currError,
          hexCode: 'Either fill hex code or provide image.',
        }
      })
    }

    if (!isEmpty(hexCode) && hexCode.length > 7) {
      setError((currError) => {
        return {
          ...currError,
          hexCode: 'Code Length should be less than 7.',
        }
      })
    }
  }

  const getPayload = () => {
    validateInput()
    if (
      !isEmpty(name) &&
      !isEmpty(shortcutName) &&
      (!isEmpty(hexCode) || !isEmpty(image)) &&
      hexCode.length <= 7
    ) {
      return {
        payload: {
          name,
          shortcut_name: shortcutName,
          image: image.image,
          code: hexCode,
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
        createColor(signal, payload).then(({ response, json }) => {
          if (response.ok) {
            Toast.fire({
              icon: 'success',
              title: ToastMessage('success', 'Color created.'),
            })
            setSuccess(true)
            simulateEscape()
            getAllColors().then(({ response, json }) => {
              if (response.ok) {
                props.updateColors(json)
                setLoading(false)
                setName('')
                setShortcutName('')
                setHexCode('')
                setImage({})
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
        await updateColor(signal, item.id, payload).then(
          ({ json, response }) => {
            if (response.ok) {
              console.log('Request succesfully sent.')
              Toast.fire({
                icon: 'success',
                title: ToastMessage('success', 'Color edited.'),
              })
              setSuccess(true)
              simulateEscape()
              setLoading(false)
              getAllColors().then(({ response, json }) => {
                if (response.ok) {
                  props.updateColors(json)
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

  const setImage_ = (files) => {
    if (files && files.length > 0) {
      setImage(files[files.length - 1])
    } else {
      setImage(null)
    }
  }
  return (
    <div>
      <CCard className={isModal ? 'px-3' : 'addpro-custom-card sm-pd mt-4'}>
        <CCardBody>
          {isModal ? null : (
            <CRow>
              <CCol>
                <h4 className="font-weight-bold mb-4">Add Color</h4>
              </CCol>
            </CRow>
          )}
          <CRow>
            <CCol xs="12" md="6">
              <TextField
                label="Color Name"
                placeholder="Enter Color name here"
                onChange={(e) => {
                  setName(e.target.value)
                }}
                value={name}
                error={error.name && error.name}
              />
              <TextField
                label="Shortcut Name"
                placeholder="Enter Shortcut Name here"
                onChange={(e) => {
                  setShortcutName(e.target.value)
                }}
                value={shortcutName}
                error={error.shortcutName && error.shortcutName}
              />
            </CCol>
            <CCol>
              <h5 className="font-weight-bold mb-2">Color Image</h5>
              {edit && item && image.url && showPreview ? (
                <ImagePreview
                  image={image.url}
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
                  type="COLOR_IMAGES"
                  clearFiles={success}
                  setImageFiles={(files) => setImage_(files)}
                />
              )}
              <p className="h5 font-weight-bold my-3">OR</p>
              <TextField
                label="HEX/HTML Code"
                placeholder="Eg: #ff0000 for Red"
                onChange={(e) => {
                  setHexCode(e.target.value)
                }}
                value={hexCode}
                error={error.hexCode && error.hexCode}
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
                {loading ? <CSpinner color="secondary" size="sm" /> : 'Save'}
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
  edit: false,
  item: null,
}

export default connect(null, { updateColors })(AddColor)
