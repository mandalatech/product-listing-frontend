import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CSpinner,
} from '@coreui/react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { connect } from 'react-redux'
import { changePasswordRequest } from 'src/api/userRequests'

const ChangePassword = (props) => {
  const [loading, setLoading] = useState(false)
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')

  // Simulate the ESC key for exiting modal.
  const simulateEscape = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  const submitPayload = (e) => {
    e.preventDefault()
    setLoading(true)
    changePasswordRequest(new AbortController().signal, {
      new_password1: passwordOne,
      new_password2: passwordTwo,
    }).then(({ json, response }) => {
      setLoading(false)
      if (response.ok) {
        simulateEscape()
        toast.success('Password changed successfully.')
      } else {
        for (const key in json) {
          const errors = json[key]
          errors.forEach((err) => {
            toast.error(err)
          })
        }
      }
    })
  }

  return (
    <CCard
      className="d-flex align-items-center"
      style={{
        backgroundColor: 'white',
      }}
    >
      <CCardBody
        style={{
          width: '40rem',
        }}
      >
        <form onSubmit={submitPayload}>
          <CInputGroup className="mb-4">
            <CInputGroupPrepend>
              <CInputGroupText>
                <CIcon name="cil-lock-locked" />
              </CInputGroupText>
            </CInputGroupPrepend>
            <CInput
              type="password"
              placeholder="Password"
              required={true}
              value={passwordOne}
              onChange={(e) => setPasswordOne(e.target.value)}
            />
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInputGroupPrepend>
              <CInputGroupText>
                <CIcon name="cil-lock-locked" />
              </CInputGroupText>
            </CInputGroupPrepend>
            <CInput
              type="password"
              placeholder="Confirm Password"
              required={true}
              value={passwordTwo}
              onChange={(e) => setPasswordTwo(e.target.value)}
            />
          </CInputGroup>

          <CRow>
            <CCol xs="6">
              <CButton
                color="primary"
                className="px-4"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <CSpinner color="secondary" size="sm" />
                ) : (
                  'Update Password'
                )}
              </CButton>
            </CCol>
          </CRow>
        </form>
      </CCardBody>
    </CCard>
  )
}
const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {})(ChangePassword)
