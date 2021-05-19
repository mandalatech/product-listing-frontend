import React, { useEffect, useState } from 'react'
import { CCol, CRow } from '@coreui/react'
import { connect } from 'react-redux'

import ComboInput from './../../components/ComboInput'
import TextField from '../../components/TextField'
import {
  PRODUCT_GROUP_URL,
  BRAND_URL,
  MANUFACTURER_URL,
} from '../../../constants/urls'
import * as actionTypes from '../../../reducers/actions'

import callAPI from '../../../api'

const SimpleProduct = (props) => {
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

  const [simpleProductInfo, setSimpleProductInfo] = useState({})

  const _getProductGroup = (value) => {
    setSimpleProductInfo({ ...simpleProductInfo, productGroup: value })
  }

  const _getManufacturer = (value) => {
    setSimpleProductInfo({ ...simpleProductInfo, manufacturer: value })
  }

  const _getBrand = (value) => {
    setSimpleProductInfo({ ...simpleProductInfo, brand: value })
  }

  const _getValue = (payload) => {
    let name = Object.keys(payload)[0]
    let obj = {}
    obj[name] = payload[name]
    setSimpleProductInfo({ ...simpleProductInfo, ...obj })
  }

  useEffect(() => {
    props._getBasicInfo(simpleProductInfo)
  }, [simpleProductInfo])

  return (
    <>
      <TextField
        name="productName"
        label="Product Name"
        placeholder="Product Name e.g Crop tee"
        _onChange={_getValue}
      />

      <CRow className="mb-4">
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
            name="brand"
            label="Brand"
            placeholder="Enter brand name"
            options={props.brands}
            _getValue={_getBrand}
          />
        </CCol>
      </CRow>

      <CRow>
        <CCol xs="3">
          <TextField
            name="sku"
            label="SKU"
            placeholder="E.g SKU16708945"
            _onChange={_getValue}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="mpn"
            label="MPN"
            placeholder="Manufacturer Pin Number"
            _onChange={_getValue}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="upc"
            label="UPC"
            placeholder="Universal Product Code"
            labelTag="(Must be unique)"
            _onChange={_getValue}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="asin"
            label="ASIN"
            placeholder="Amazon Standard Number"
            _onChange={_getValue}
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

export default connect(mapStateToProps, mapDispatchToProps)(SimpleProduct)
