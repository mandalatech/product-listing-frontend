import CIcon from '@coreui/icons-react'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CSidebarNavTitle,
} from '@coreui/react'
import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { connect, useDispatch } from 'react-redux'
import { SET_SIDE_BAR_STATUS } from 'src/reducers/types/layout'
import Logo from '../assets/images/Group.png'
import store from '../store'
// sidebar nav config
import navigation from './_nav'
import { logoutUser } from 'src/reducers/actions/user.actions'
import { logoutUserRequest } from 'src/api/userRequests'

import { useHistory } from 'react-router-dom'

const TheSidebar = (props) => {
  const dispatch = useDispatch()

  const history = useHistory()

  const logoutUser_ = (e) => {
    const controller = new AbortController()
    const signal = controller.signal
    logoutUserRequest(signal).then(({ response }) => {
      if (response.ok) {
        props.logoutUser()
        localStorage.removeItem('productListingUserKey')
        history.push('/')
      }
    })
  }

  return (
    <CSidebar
      show={props.root.sideBarStatus}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <div className="addProLogo">
          <div className="logoDiv">
            <div>
              <img src={Logo} alt="logo" />
            </div>
          </div>
        </div>

        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
        {props.root.deviceResponsiveInfo.isMobileDevice ||
        props.root.deviceResponsiveInfo.isTabletDevice ? (
          <div className="closeButton">
            <button
              onClick={() => {
                store.dispatch({ type: SET_SIDE_BAR_STATUS, payload: false })
              }}
            >
              <IoCloseCircleOutline
                style={{ color: 'white', fontSize: '24px' }}
              />
            </button>
          </div>
        ) : null}
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
        <CSidebarNavItem>
          <span class="c-sidebar-nav-link" tabindex="0" onClick={logoutUser_}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="c-sidebar-nav-icon"
              role="img"
            >
              <path
                fill="var(--ci-primary-color, currentColor)"
                d="M425.706,86.294A240,240,0,0,0,86.294,425.705,240,240,0,0,0,425.706,86.294ZM256,48A207.1,207.1,0,0,1,391.528,98.345L98.345,391.528A207.1,207.1,0,0,1,48,256C48,141.309,141.309,48,256,48Zm0,416a207.084,207.084,0,0,1-134.986-49.887l293.1-293.1A207.084,207.084,0,0,1,464,256C464,370.691,370.691,464,256,464Z"
                class="ci-primary"
              ></path>
            </svg>
            Logout
          </span>
        </CSidebarNavItem>
      </CSidebarNav>
    </CSidebar>
  )
}

const mapStateToProps = (state) => {
  return {
    root: state.root,
  }
}

export default connect(mapStateToProps, { logoutUser })(React.memo(TheSidebar))
