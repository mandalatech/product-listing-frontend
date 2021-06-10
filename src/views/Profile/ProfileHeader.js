import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserDetails } from 'src/api/userRequests'
import userAvatarImage from 'src/assets/images/profileAvatar.svg'
import { setLoader } from 'src/reducers/actions/settings.actions'
import isEmpty from 'src/validations/isEmpty'

const ProfileHeader = (props) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  useEffect(() => {
    props.setLoader(true)
    if (isEmpty(props.token)) {
      return
    }
    const controller = new AbortController()
    const signal = controller.signal
    getUserDetails(signal, props.token).then(({ json, response }) => {
      if (response.ok) {
        setFullName(`${json.first_name} ${json.last_name}`)
        setEmail(json.email)
        props.setLoader(false)
      }
    })
  }, [])

  return (
    <div>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Profile</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <div className="text-center">
                <div class="avatar mb-4">
                  <img
                    class="avatar-img"
                    src={userAvatarImage}
                    alt="user@email.com"
                    height="100"
                  />
                </div>
                <p className="h4 font-weight-bold">{fullName}</p>
                <p className="h6">{email}</p>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  }
}

export default connect(mapStateToProps, { setLoader })(ProfileHeader)
