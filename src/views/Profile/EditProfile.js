import { CButton, CCard, CCardBody, CCol, CRow, CSpinner } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { connect } from 'react-redux'
import { updateUserDetails } from 'src/api/userRequests'
import TextField from 'src/components/TextField'
import isEmpty from 'src/validations/isEmpty'

const EditProfile = ({ isModal, fn, ln, em, ...props }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setFirstName(fn)
    setLastName(ln)
    setEmail(em)
  }, [])

  const submitPayload = (e) => {
    e.preventDefault()
    const payload = {}
    if (firstName.trim() !== fn.trim()) {
      payload.first_name = firstName
    }
    if (lastName.trim() !== ln.trim()) {
      payload.last_name = lastName
    }
    if (email.trim() !== em.trim()) {
      payload.email = email
    }

    if (isEmpty(payload)) {
      toast('No changes made')
    } else {
      setLoading(true)
      if (!isEmpty(props.token)) {
        updateUserDetails(
          new AbortController().signal,
          props.token,
          payload
        ).then(({ json, response }) => {
          if (response.ok) {
            toast.success('Updated successfully')
          } else {
            toast.success('Cant be updated.')
          }
          setLoading(false)
        })
      } else {
        toast.error('Token Error')
      }
    }
  }

  return (
    <CCard className={isModal ? 'px-3' : 'addpro-custom-card sm-pd mt-4'}>
      <CCardBody>
        <form onSubmit={submitPayload}>
          <CRow>
            <CCol xs="12" md="6">
              <TextField
                label="First Name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required={true}
              />
            </CCol>
            <CCol xs="12" md="6">
              <TextField
                label="Last Name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required={true}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <TextField
                type="email"
                label="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
                disabled={true}
                plaintext={true}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol sm="2" md="2">
              <CButton block variant="outline" color="dark" type="button">
                Cancel
              </CButton>
            </CCol>
            <CCol sm="2" md="2">
              <CButton block color="dark" disabled={loading} type="submit">
                {loading ? <CSpinner color="secondary" size="sm" /> : 'Save'}
              </CButton>
            </CCol>
          </CRow>
        </form>
      </CCardBody>
    </CCard>
  )
}

EditProfile.defaultProps = {
  isModal: false,
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  }
}
export default connect(mapStateToProps, null)(EditProfile)
