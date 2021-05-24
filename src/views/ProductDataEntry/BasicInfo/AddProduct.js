import React, { useState } from 'react'
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

import ExtraAttributes from './ExtraAttributes'
import CommonAttributes from './CommonAttributes'

const Tabs = () => {
  const [isSimpleProduct, setIsSimpleProduct] = useState(true)
  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <h4 className="outside-card-title">Add Product</h4>
        <CCard>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink
                    onClick={() => {
                      setIsSimpleProduct(true)
                    }}
                  >
                    Simple Product
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    onClick={() => {
                      setIsSimpleProduct(false)
                    }}
                  >
                    Configurable
                  </CNavLink>
                </CNavItem>
              </CNav>
            </CTabs>
            <div className="addpro-custom-card">
              <CommonAttributes />
              {isSimpleProduct ? <ExtraAttributes /> : null}
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tabs
