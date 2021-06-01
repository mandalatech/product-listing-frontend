import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import store from '../store'
import add from '../assets/images/add.png'
import pro from '../assets/images/pro.png'
import tm from '../assets/images/TM.png'
import Logo from '../assets/images/Group.png'
import { connect } from 'react-redux'
import CIcon from '@coreui/icons-react'
// sidebar nav config
import navigation from './_nav'
import { SET_SIDE_BAR_STATUS } from 'src/reducers/types/layout'
import { IoCloseCircleOutline } from 'react-icons/io5'

const TheSidebar = (props) => {
  const dispatch = useDispatch()

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
      </CSidebarNav>
      {/* <CSidebarMinimizer className="c-d-md-down-none"/> */}
    </CSidebar>
  )
}

const mapStateToProps = (state) => {
  return {
    root: state.root,
  }
}

export default connect(mapStateToProps, {})(React.memo(TheSidebar))
