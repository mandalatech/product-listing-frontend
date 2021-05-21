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

const TheSidebar = props => {
  const dispatch = useDispatch()

  return (
    <CSidebar
      show={props.root.sideBarStatus}
      onShowChange={val => dispatch({ type: 'set', sidebarShow: val })}
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

const mapStateToProps = state => {
  return {
    root: state.root,
  }
}

export default connect(
  mapStateToProps,
  {}
)(React.memo(TheSidebar))
