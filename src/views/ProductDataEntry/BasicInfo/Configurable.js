import React, { useEffect } from 'react'
import { CCol, CRow, CFormGroup } from '@coreui/react'
import { connect } from 'react-redux'

import TextField from '../../components/TextField'
import DropdownTextField from '../../components/DropDownTextField'

import {
  PRODUCT_GROUP_URL,
  BRAND_URL,
  MANUFACTURER_URL,
} from '../../../constants/urls'
import * as actionTypes from '../../../reducers/actions'

import callAPI from '../../../api'

const Configurable = (props) => {
  useEffect(() => {
    callAPI(PRODUCT_GROUP_URL, 'get').then((res) => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateProductGroups(res)
      }
    })
    callAPI(BRAND_URL, 'get').then((res) => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateBrands(res)
      }
    })
    callAPI(MANUFACTURER_URL, 'get').then((res) => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateManufacturers(res)
      }
    })
  }, [])

  return (
    <>
      <CFormGroup className="mb-4">
        <TextField
          name="configProductName"
          label="Product Name"
          placeholder="Product Name e.g Crop tee"
        />
      </CFormGroup>

      <CRow>
        <CCol xs="4">
          <DropdownTextField
            name="group"
            label="Group"
            placeholder="Select Group"
            options={props.productGroups}
          />
        </CCol>
        <CCol xs="4">
          <DropdownTextField
            name="manufacturer"
            label="Manufacturer"
            placeholder="Select Manufacturer"
            options={props.manufacturers}
          />
        </CCol>
        <CCol xs="4">
          <DropdownTextField
            name="configBrand"
            label="Brand"
            placeholder="Enter brand name"
            options={props.brands}
          />
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    productGroups: state.productGroups,
    brands: state.brands,
    manufacturers: state.manufacturers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProductGroups: (groups) =>
      dispatch({
        type: actionTypes.UPDATE_PRODUCT_GROUP,
        payload: groups,
      }),
    updateBrands: (groups) =>
      dispatch({
        type: actionTypes.UPDATE_BRANDS,
        payload: groups,
      }),
    updateManufacturers: (groups) =>
      dispatch({
        type: actionTypes.UPDATE_MANUFACTURERS,
        payload: groups,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Configurable)
