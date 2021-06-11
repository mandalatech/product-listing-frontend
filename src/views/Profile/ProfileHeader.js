import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import settingsIcon from 'src/assets/icons/settings.svg'
import logsIcon from 'src/assets/icons/logs.svg'
import passwordIcon from 'src/assets/icons/password.svg'
import userAvatarImage from 'src/assets/images/profileAvatar.svg'
import Modal from 'src/components/Modal'
import EditProfile from './EditProfile'
import Logs from './Logs'
import ChangePassword from './ChangePassword'

const ProfileHeader = ({ firstName, lastName, email }) => {
  const [showEditProfileModal, setShowEditProfileModal] = useState(false)
  const [showLogsModal, setShowLogsModal] = useState(false)
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
  return (
    <div>
      {showEditProfileModal ? (
        <Modal
          showModal={showEditProfileModal}
          title="Edit Profile"
          onClose={setShowEditProfileModal}
        >
          <EditProfile fn={firstName} ln={lastName} em={email} isModal={true} />
        </Modal>
      ) : null}
      {showLogsModal ? (
        <Modal
          showModal={showLogsModal}
          title="Admin Logs"
          onClose={setShowLogsModal}
          size="xl"
        >
          <Logs />
        </Modal>
      ) : null}
      {showChangePasswordModal ? (
        <Modal
          showModal={showChangePasswordModal}
          title="Change Password"
          onClose={setShowChangePasswordModal}
        >
          <ChangePassword />
        </Modal>
      ) : null}
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Profile</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <div
                className="d-flex flex-column align-items-end"
                style={{ marginBottom: '-150px' }}
              >
                <button
                  className="mt-4 btn btn-light rounded shadow"
                  onClick={() => setShowEditProfileModal(true)}
                >
                  <img src={settingsIcon} alt="Settings" height="25" />
                </button>
                <button
                  className="mt-4 btn btn-light rounded shadow"
                  onClick={() => setShowLogsModal(true)}
                >
                  <img src={logsIcon} alt="Settings" height="25" />
                </button>
                <button
                  className="mt-4 btn btn-light rounded shadow"
                  onClick={() => setShowChangePasswordModal(true)}
                >
                  <img src={passwordIcon} alt="Settings" height="25" />
                </button>
              </div>
              <div className="text-center">
                <div class="avatar mb-4">
                  <img
                    class="avatar-img"
                    src={userAvatarImage}
                    alt="user@email.com"
                    height="100"
                    title="This is an auto-generated static image."
                  />
                </div>
                <p className="h4 font-weight-bold">{`${firstName} ${lastName}`}</p>
                <p className="h6">{email}</p>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

ProfileHeader.defaultProps = {
  firstName: 'Loading',
  lastName: '...',
  email: 'weareloading@pr.com',
}

export default connect(null, {})(ProfileHeader)
