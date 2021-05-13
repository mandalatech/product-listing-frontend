import React from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
} from '@coreui/react'

import SimpleProduct from './SimpleProduct'
import Configurable from './Configurable'

const Tabs = () => {
  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <h4 className="outside-card-title">Add Product</h4>
        <CCard>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>Simple Product</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Configurable</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent className="addpro-custom-card">
                <CTabPane>
                  <SimpleProduct />
                </CTabPane>
                <CTabPane>
                  <Configurable />
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tabs
