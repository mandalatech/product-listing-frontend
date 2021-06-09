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
  CLink,
  CRow,
  CSpinner,
} from '@coreui/react'
import React, { useState } from 'react'
import { loginUserRequest } from 'src/api/userRequests'
import { connect } from 'react-redux'
import { loginError, loginUser } from 'src/reducers/actions/user.actions'
import ErrorBody from 'src/reusable/ErrorBody'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const loginUser = (event) => {
    event.preventDefault()
    setLoading(true)
    const controller = new AbortController()
    const signal = controller.signal
    loginUserRequest(signal, { username, password }).then(
      ({ json, response }) => {
        if (response.ok) {
          localStorage.setItem('productListingUserKey', json.key)
        } else {
          props.loginError({
            message: 'Unable to login with provided credentials.',
          })
        }
        setLoading(false)
      }
    )
  }

  return (
    <div>
      <CContainer
        className="d-flex justify-content-around align-items-center"
        style={{ height: '100vh' }}
      >
        <CCard
          className="p-5"
          style={{
            width: '40rem',
            backgroundColor: 'white',
            borderRadius: '3%',
          }}
        >
          <CCardBody>
            <CForm onSubmit={loginUser}>
              <h1>Login</h1>
              <p className="text-muted">Sign In to your account</p>
              <CInputGroup className="mb-3">
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-user" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  type="text"
                  placeholder="Username"
                  autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required={true}
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
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
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
                      'Login'
                    )}
                  </CButton>
                </CCol>
                <CCol xs="6" className="text-right">
                  <CLink className="px-0">Forgot password?</CLink>
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
  return {
    message: state.user.message,
  }
}

export default connect(mapStateToProps, { loginError, loginUser })(Login)
