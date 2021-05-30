import React from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CCard,
  CCardBody,
  CTabs,
} from '@coreui/react'

import ExtraAttributes from './ExtraAttributes'
import CommonAttributes from './CommonAttributes'

import { changeProductType } from 'src/reducers/actions/index'

import { connect } from 'react-redux'

const BasicInfo = props => {
  const handleTabClick = isSimpleProduct => {
    props.changeProductType(isSimpleProduct)
  }

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
                      handleTabClick(true)
                    }}
                  >
                    Simple Product
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    onClick={() => {
                      handleTabClick(false)
                    }}
                  >
                    Configurable
                  </CNavLink>
                </CNavItem>
              </CNav>
            </CTabs>
            <div className="addpro-custom-card">
              <CommonAttributes />
              {props.isSimpleProduct ? (
                <ExtraAttributes edit={props.edit} />
              ) : null}
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

const mapStateToProps = state => {
  return {
    isSimpleProduct: state.product.isSimpleProduct,
  }
}

export default connect(
  mapStateToProps,
  { changeProductType }
)(BasicInfo)
