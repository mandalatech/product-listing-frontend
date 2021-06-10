import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getUserDetails } from 'src/api/userRequests'
import { setLoader } from 'src/reducers/actions/settings.actions'
import isEmpty from 'src/validations/isEmpty'
import Logs from './Logs'
import ProfileHeader from './ProfileHeader'

const Profile = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
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
        setFirstName(json.first_name)
        setLastName(json.last_name)
        setEmail(json.email)
        props.setLoader(false)
      }
    })
  }, [])
  return (
    <>
      <ProfileHeader firstName={firstName} lastName={lastName} email={email} />
      <Logs />
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  }
}

export default connect(mapStateToProps, { setLoader })(Profile)
