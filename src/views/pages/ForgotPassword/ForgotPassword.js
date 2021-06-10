import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
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
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { forgotPasswordUserRequest } from 'src/api/userRequests'
import forgotPasswordImage from 'src/assets/images/forgotPassword.svg'

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const loginUser = (event) => {
    event.preventDefault()
    setLoading(true)
    const controller = new AbortController()
    const signal = controller.signal

    forgotPasswordUserRequest(signal, { email }).then(({ json, response }) => {
      if (response.ok) {
        toast('A email has been sent for verification.')
      } else {
        toast('There is no user associated with this e-mail address.')
      }
      setLoading(false)
    })
  }

  return (
    <div>
      <CContainer
        className="d-flex justify-content-around align-items-center"
        style={{ height: '100vh' }}
      >
        <CCard
          className="p-5 d-flex align-items-center"
          style={{
            backgroundColor: 'white',
            borderRadius: '3%',
          }}
        >
          <img
            src={forgotPasswordImage}
            alt="Forgot Password"
            style={{ width: '20rem' }}
          />
          <CCardBody
            style={{
              width: '40rem',
            }}
          >
            <CForm onSubmit={loginUser}>
              <h1>Forgot Password</h1>
              <p className="text-muted">Enter your email</p>
              <CInputGroup className="mb-3">
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-user" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required={true}
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
                      'Reset Password'
                    )}
                  </CButton>
                </CCol>
                <CCol xs="6" className="text-right">
                  <Link className="px-0" to="/">
                    Login
                  </Link>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {})(ForgotPassword)
