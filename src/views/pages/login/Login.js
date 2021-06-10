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
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { loginUserRequest } from 'src/api/userRequests'
import {
  clearUserMessage,
  loginError,
  loginUser,
} from 'src/reducers/actions/user.actions'
import isEmpty from 'src/validations/isEmpty'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isEmpty(props.message)) {
      toast(props.message)
    }
    props.clearUserMessage()
  }, [props.message])

  const loginUser = (event) => {
    event.preventDefault()
    setLoading(true)
    const controller = new AbortController()
    const signal = controller.signal
    loginUserRequest(signal, { email, password }).then(({ json, response }) => {
      if (response.ok) {
        const { key, user } = json
        const { id, email } = user
        localStorage.setItem('productListingUserKey', key)
        props.loginUser({
          userID: id,
          email,
          token: key,
        })
      } else {
        localStorage.removeItem('productListingUserKey')
        props.loginError()
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
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
                  <Link className="px-0" to="/forgot-password">
                    Forgot password?
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
  return {
    message: state.user.message,
  }
}

export default connect(mapStateToProps, {
  loginError,
  loginUser,
  clearUserMessage,
})(Login)
