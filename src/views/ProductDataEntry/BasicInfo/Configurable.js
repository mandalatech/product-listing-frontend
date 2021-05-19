import React, { useState, useEffect } from 'react'
import { CCol, CRow, CFormGroup } from '@coreui/react'
import { connect } from 'react-redux'

import TextField from '../../components/TextField'
import ComboInput from './../../components/ComboInput'

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

  const [configurableProductInfo, setConfigurableProductInfo] = useState({})

  const _getProductGroup = (value) => {
    setConfigurableProductInfo({
      ...configurableProductInfo,
      productGroup: value,
    })
  }

  const _getManufacturer = (value) => {
    setConfigurableProductInfo({
      ...configurableProductInfo,
      manufacturer: value,
    })
  }

  const _getBrand = (value) => {
    setConfigurableProductInfo({ ...configurableProductInfo, brand: value })
  }

  useEffect(() => {
    props._getBasicInfo(configurableProductInfo)
  }, [configurableProductInfo])

  const _getValue = (payload) => {
    const name = Object.keys(payload)[0]
    let obj = {}
    obj[name] = payload[name]
    setConfigurableProductInfo({ ...configurableProductInfo, ...obj })
  }

  return (
    <>
      <CFormGroup className="mb-4">
        <TextField
          name="productName"
          label="Product Name"
          placeholder="Product Name e.g Crop tee"
          _onChange={_getValue}
        />
      </CFormGroup>

      <CRow>
        <CCol xs="4">
          <ComboInput
            name="group"
            label="Group"
            placeholder="Select Group"
            options={props.productGroups}
            _getValue={_getProductGroup}
          />
        </CCol>
        <CCol xs="4">
          <ComboInput
            name="manufacturer"
            label="Manufacturer"
            placeholder="Select Manufacturer"
            options={props.manufacturers}
            _getValue={_getManufacturer}
          />
        </CCol>
        <CCol xs="4">
          <ComboInput
            name="configBrand"
            label="Brand"
            placeholder="Enter brand name"
            options={props.brands}
            _getValue={_getBrand}
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
