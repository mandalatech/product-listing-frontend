import React, { useState, useEffect } from 'react'

import {
  CCard,
  CCardBody,
  CRow,
  CCol,
  CFormGroup,
  CInputCheckbox,
  CLabel,
  CSpinner,
  CButton,
} from '@coreui/react'

import { ToastMessage } from 'src/reusable/Toast/ToastMessage'
import Toast from 'src/reusable/Toast/Toast'

import { getSKUSetting, updateSKUSetting } from 'src/api/skuRequests'
import {
  setLoader,
  setSKUAutoGeneration,
} from 'src/reducers/actions/settings.actions'

import { connect } from 'react-redux'

// Simulate the ESC key for exiting modal.
const simulateEscape = () => {
  document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
}

const SKU = ({ isModal, ...props }) => {
  const [loading, setLoading] = useState(false)
  const [autoSKUGeneration, setAutoSKUGeneration] = useState(false)

  useEffect(() => {
    props.setLoader(true)
    getSKUSetting().then(({ json, response }) => {
      if (response.ok) {
        // Negated
        const auto_generation = !json.can_user_generate
        props.setSKUAutoGeneration(auto_generation) // From props
        setAutoSKUGeneration(auto_generation) // From state
      }
      props.setLoader(false)
    })
  }, [])

  const handleSKUValue = (e) => {
    setAutoSKUGeneration(e.target.checked)
  }

  const submitPayload = () => {
    setLoading(true)
    const abortController = new AbortController()
    const signal = abortController.signal
    const payload = {
      can_user_generate: !autoSKUGeneration,
    }
    updateSKUSetting(signal, payload).then(({ json, response }) => {
      if (response.ok) {
        simulateEscape()
        Toast.fire({
          icon: 'success',
          title: ToastMessage('success', 'SKU Settings saved.'),
        })
        console.log(json, response)
        setLoading(false)
        props.setSKUAutoGeneration(!json.can_user_generate)
      } else {
        Toast.fire({
          icon: 'warning',
          title: ToastMessage('warning', 'Error saving SKU Setting'),
        })
        console.log(json, response)
        setLoading(false)
      }
    })
  }

  return (
    <div>
      <CCard className="addpro-custom-card sm-pd">
        <CCardBody>
          {isModal ? null : <h4 className="font-weight-bold mb-4">SKU</h4>}
          <CFormGroup variant="checkbox" className="checkbox">
            <CRow>
              <CCol xs="4">
                <CInputCheckbox
                  checked={autoSKUGeneration}
                  id="autoskugeneration"
                  onChange={handleSKUValue}
                />
                <CLabel
                  variant="checkbox"
                  className="form-check-label"
                  htmlFor="autoskugeneration"
                >
                  Auto SKU Generation
                </CLabel>
              </CCol>
            </CRow>
            <p className="small">
              Auto generation wont allow user to input SKU in products.
            </p>
          </CFormGroup>
          <CRow className="mt-4">
            <CCol sm="2" md="2">
              <CButton block color="dark" onClick={submitPayload}>
                {loading ? <CSpinner color="secondary" size="sm" /> : 'Save'}
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  )
}

SKU.defaultProps = {
  isModal: false,
}

const mapStateToProps = (state) => {
  return {
    sku: state.settings.sku,
  }
}

export default connect(mapStateToProps, { setSKUAutoGeneration, setLoader })(
  SKU
)
