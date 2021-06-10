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
import newPasswordImage from 'src/assets/images/newPassword.svg'
import { useQueryParams } from 'src/hooks'
import isEmpty from 'src/validations/isEmpty'
import { useHistory } from 'react-router-dom'
import {
  forgotPasswordConfirmRequest,
  forgotPasswordValidateToken,
} from 'src/api/userRequests'

const CreateNewPassword = (props) => {
  const [loading, setLoading] = useState(false)
  const [validToken, setValidToken] = useState(false)
  const { token } = useQueryParams()
  const [passwordOne, setPasswordOne] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  const history = useHistory()

  const redirectToLoginPage = (message = 'Invalid token supplied') => {
    history.push('/')
    toast.error(message)
  }

  useEffect(() => {
    if (isEmpty(token)) {
      redirectToLoginPage()
    } else {
      const controller = new AbortController()
      const signal = controller.signal
      const payload = { token }
      forgotPasswordValidateToken(signal, payload).then(
        ({ json, response }) => {
          if (response.ok && json.status === 'OK') {
            setValidToken(true)
          } else {
            redirectToLoginPage()
          }
        }
      )
    }
  }, [])

  const submitPayload = (event) => {
    event.preventDefault()
    if (validToken) {
      if (!isEmpty(passwordOne) && !isEmpty(passwordTwo)) {
        if (passwordOne !== passwordTwo) {
          toast.error('Passwords dont match')
        } else {
          setLoading(true)
          const payload = {
            password: passwordOne,
            token,
          }
          forgotPasswordConfirmRequest(
            new AbortController().signal,
            payload
          ).then(({ json, response }) => {
            setLoading(false)
            if (response.ok) {
              history.push('/')
              toast.success('Please login with new credentials')
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
      } else {
        toast.error('Please fill all the fields.')
      }
    } else {
      redirectToLoginPage()
    }
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
            src={newPasswordImage}
            alt="Forgot Password"
            style={{ width: '20rem' }}
          />
          <CCardBody
            style={{
              width: '40rem',
            }}
          >
            <form onSubmit={submitPayload}>
              <h1>Create New Password</h1>
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
                <CCol xs="6" className="text-right">
                  <Link className="px-0" to="/">
                    Login
                  </Link>
                </CCol>
              </CRow>
            </form>
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {})(CreateNewPassword)
