import React from 'react'
import TopLoader from '../reusable/loader/TopLoader'
import { useSelector, useDispatch, connect } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { withRouter } from 'react-router-dom'
import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks,
} from './index'
import store from '../store'
import { SET_SIDE_BAR_STATUS } from 'src/reducers/types/layout'

const TheHeader = props => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)
  // const
  console.log(' hello : ', store.getState().root.sideBarStatus)
  const toggleSidebar = () => {
    store.dispatch({
      type: SET_SIDE_BAR_STATUS,
      payload: !props.root.sideBarStatus,
    })
    const val = [true, 'responsive'].includes(sidebarShow)
      ? false
      : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  const toggleSidebarMobile = () => {
    store.dispatch({
      type: SET_SIDE_BAR_STATUS,
      payload: !props.root.sideBarStatus,
    })
    const val = [false, 'responsive'].includes(sidebarShow)
      ? true
      : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }
  console.log(' his: ', props.history)
  return (
    <CHeader withSubheader>
      {props.settings.topLoader ? <TopLoader /> : null}
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">
            {(props.history.location.pathname &&
              props.history.location.pathname
                .split('/')
                .join('')
                .replace(/[0-9]/g, '')) ||
              'dashboard'}
            {/* {(
              (props.history.location.pathname &&
                props.history.location.pathname) ||
              'Dashboard'
            )
              .split('/')
              .join('')[0]
              .toUpperCase() +
              props.history.location.pathname
                .split('/')
                .join('')
                .slice(1)} */}
          </CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
    </CHeader>
  )
}

const mapStateToProps = state => {
  return {
    root: state.root,
    settings: state.settings,
  }
}

export default connect(
  mapStateToProps,
  {}
)(withRouter(TheHeader))
