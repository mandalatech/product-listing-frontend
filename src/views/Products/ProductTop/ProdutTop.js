import React from 'react'
import {
  CCol,
  CButton,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInput,
  CRow,
} from '@coreui/react'
import FilterMenu from '../../../reusable/Filter/FilterMenu'
import { CIcon } from '@coreui/icons-react'
import { withRouter } from 'react-router-dom'

function ProductTop(props) {
  return (
    <>
      <CRow className="c-row">
        <CCol md="2" className="c-row">
          <h5 className="outside-card-title">All Products(10)</h5>
        </CCol>
        <CCol md="4">
          <CInputGroup>
            <CInputGroupPrepend>
              <CInputGroupText style={{ backgroundColor: '#ffffff' }}>
                <CIcon name="cil-magnifying-glass" />
              </CInputGroupText>
            </CInputGroupPrepend>
            <CInput placeholder="Search Groups" />
          </CInputGroup>
        </CCol>
        <CCol
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
          //   className="d-flex justify-content-center align-items-between"
          md="6"
        >
          <span style={{ fontSize: '15px', fontWeight: 400 }}>Filter by :</span>
          <CCol md="5">
            <FilterMenu
              label="Filter by :"
              name="product_filter"
              onChange={() => console.log('filter menu select')}
              selectOptions={['A', 'B', 'C']}
            />
          </CCol>
          <CCol md="4">
            <CButton
              block
              color="warning"
              onClick={() => {
                props.history.push('/add-products')
              }}
            >
              <span style={{ color: '#fff', fontWeight: 600 }}>
                + &nbsp;Add Product
              </span>
            </CButton>
          </CCol>
        </CCol>
      </CRow>
    </>
  )
}

export default withRouter(ProductTop)
