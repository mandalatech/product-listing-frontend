import React from 'react'
import CIcon from '@coreui/icons-react'
import DashboardIcon from "../assets/icons/dashboard.png";

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <img src={DashboardIcon} customClasses="c-sidebar-nav-icon" style={{marginRight: 18, marginLeft: 4}} />
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Products',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All products',
        to: '/allProducts/addProduct',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Bundle',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Group',
        to: '/base/carousels',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Setting',
    route: '/buttons',
    icon: 'cil-puzzle',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Brand',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Manufacturer',
    route: '/icons',
    icon: 'cil-star'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Color',
    route: '/notifications',
    icon: 'cil-bell',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Warehouse',
    to: '/widgets',
    icon: 'cil-calculator',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'SKU Generator',
    route: '/pages',
    icon: 'cil-star',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Logout',
    icon: 'cil-ban'
  }
]

export default _nav
