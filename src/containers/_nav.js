import React from 'react'
import { RiDashboardFill } from 'react-icons/ri'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: (
      <RiDashboardFill
        customclasses="c-sidebar-nav-icon"
        alt="dashboard"
        style={{
          marginRight: 18,
          marginLeft: 4,
          color: '#D8D4F8',
          fontSize: '20px',
        }}
      />
    ),
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Products',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Products',
        to: '/products',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Bundle',
        to: '/bundle',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Group',
        to: '/group',
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Settings',
    icon: 'cil-settings',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Brand',
        to: '/brand',
        icon: 'cil-chart-pie',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manufacturer',
        to: '/manufacturer',
        icon: 'cil-star',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Color',
        to: '/color',
        icon: 'cil-bell',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Warehouse',
        to: '/warehouse',
        icon: 'cil-calculator',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'SKU',
        to: '/sku',
        icon: 'cil-settings',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Profile',
    to: '/profile',
    icon: 'cil-user',
  },
]

export default _nav
