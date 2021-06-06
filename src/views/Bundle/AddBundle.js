import { CButton, CCard, CCardBody, CCol, CRow, CSpinner } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  createBundle,
  getAllBundles,
  updateBundle,
} from 'src/api/bundleRequests'
import TextField from 'src/components/TextField'
import {
  clearBundleInput,
  setBundleInput,
  setBundleInputError,
  clearBundleInputError,
  updateBundles,
  setBundleName,
  populateBundleItems,
} from 'src/reducers/actions/bundle.actions'
import ErrorBody from 'src/reusable/ErrorBody'
import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'
import { validateBundleCreation } from 'src/validations/bundle.validation'
import BundleContainer from './BundleContainer'

const AddBundle = ({ _setShowCreateForm, isModal, edit, item, ...props }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Clear Bundle Data on store on loading.
    props.clearBundleInput()
  }, [])

  useEffect(() => {
    if (edit) {
      props.setBundleName(item.name)
      props.populateBundleItems(item.items)
    }
  }, [])

  // Simulate the ESC key for exiting modal.
  const simulateEscape = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  const submitPayload = async () => {
    props.clearBundleInputError()
    let { isValid, errors } = validateBundleCreation(props.bundle)
    props.setBundleInputError(errors)
    if (isValid) {
      setLoading(true)
      const bundleItems = props.bundleItems.map((item) => {
        return {
          product: item.product,
          quantity: item.quantity,
        }
      })
      const payload = {
        name: props.bundle.name,
        items: bundleItems,
      }
      console.log('[PAYLOAD] for Bundle', payload)

      const abortController = new AbortController()
      const signal = abortController.signal

      if (!edit) {
        await createBundle(signal, payload).then(({ json, response }) => {
          if (response.ok) {
            console.log('Request succesfully sent.')
            Toast.fire({
              icon: 'success',
              title: ToastMessage('success', 'Bundle created.'),
            })
            props.clearBundleInput()
            setLoading(false)
            getAllBundles().then(({ response, json }) => {
              if (response.ok) {
                props.updateBundles(json)
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
        })
      } else {
        await updateBundle(signal, item.id, payload).then(
          ({ json, response }) => {
            if (response.ok) {
              console.log('Request succesfully sent.')
              Toast.fire({
                icon: 'success',
                title: ToastMessage('success', 'Bundle edited.'),
              })
              simulateEscape()
              props.clearBundleInput()
              setLoading(false)
              getAllBundles().then(({ response, json }) => {
                if (response.ok) {
                  props.updateBundles(json)
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
      <CCard className="addpro-custom-card sm-pd">
        {isModal ? null : (
          <h4 className="outside-card-title mb-4 p-2">Add Bundle</h4>
        )}
        <CCardBody>
          <CRow>
            <CCol>
              <TextField
                label="Bundle Name"
                placeholder="Enter Bundle Name"
                name="bundleName"
                error={props.error?.name}
                value={props.bundle.name}
                onChange={(e) => props.setBundleName(e.target.value)}
              />
            </CCol>
          </CRow>

          <BundleContainer />
          <ErrorBody>{props.error?.bundleItems}</ErrorBody>
          <CRow className="mt-5">
            <CCol sm="2" md="2">
              <CButton
                block
                variant="outline"
                color="dark"
                onClick={() => {
                  if (!edit) {
                    _setShowCreateForm(false)
                  } else {
                    simulateEscape()
                  }
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

const mapStatetoProps = (state) => {
  return {
    products: state.root.products,
    bundle: state.bundle,
    bundleItems: state.bundle.bundleItems,
    error: state.bundle.error,
  }
}

AddBundle.defaultProps = {
  isModal: false,
  edit: false,
  item: null,
}

export default connect(mapStatetoProps, {
  setBundleInput,
  setBundleInputError,
  clearBundleInput,
  updateBundles,
  clearBundleInputError,
  setBundleName,
  populateBundleItems,
})(AddBundle)
