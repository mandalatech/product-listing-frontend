import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserDetails } from 'src/api/userRequests'
import { setLoader } from 'src/reducers/actions/settings.actions'
import { updateUserDetails } from 'src/reducers/actions/user.actions'
import isEmpty from 'src/validations/isEmpty'
import ProfileHeader from './ProfileHeader'

const Profile = (props) => {
  useEffect(() => {
    props.setLoader(true)
    if (isEmpty(props.token)) {
      return
    }
    const controller = new AbortController()
    const signal = controller.signal
    getUserDetails(signal, props.token).then(({ json, response }) => {
      if (response.ok) {
        const { first_name, last_name, email, id } = json
        const payload = { first_name, last_name, email, id }
        props.updateUserDetails(payload)
        props.setLoader(false)
      }
    })
  }, [])
  return (
    <>
      <ProfileHeader
        firstName={props.first_name}
        lastName={props.last_name}
        email={props.email}
      />
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    email: state.user.email,
    first_name: state.user.first_name,
    last_name: state.user.last_name,
  }
}

export default connect(mapStateToProps, { setLoader, updateUserDetails })(
  Profile
)
