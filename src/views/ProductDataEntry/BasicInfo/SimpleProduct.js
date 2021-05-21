import React, { useState, useEffect } from 'react'
import {
  CCol,
  CRow,
} from '@coreui/react'
import { connect } from 'react-redux'

import ComboInput from 'src/views/components/ComboInput'
import TextField from 'src/views/components/TextField'
import {
  PRODUCT_GROUP_URL,
  BRAND_URL,
  MANUFACTURER_URL,
} from 'src/constants/urls'

import AddGroup from 'src/views/Group/AddGroup'
import AddManufacturer from 'src/views/Manufacturer/AddManufacturer'

import * as actionTypes from 'src/reducers/actions'

import {
  changeProductInput,
  updateBrands,
  updateManufacturers,
  updateProductGroups,
} from 'src/reducers/actions/index'
import callAPI from 'src/api'
import Modal from 'src/views/components/Modal'

const SimpleProduct = (props) => {
  const [showAddGroupModal, setShowAddGroupModal] = useState(false)
  const [showAddManuFacturerModal, setShowAddManuFacturerModal] =
    useState(false)

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

  const onProductInputChange_ = (e) => {
    console.log('event[product]', e)
    props.changeProductInput(e.target.name, e.target.value)
  }

  const onSelectionInput_ = (e, name) => {
    console.log('options[product]', e)
    props.changeProductInput(name, e.value)
  }

  const displayAddGroupModal = (e) => {
    console.log('Button clicked', showAddGroupModal)
    setShowAddGroupModal(true)
  }

  const displayAddManuFacturerModal = (e) => {
    console.log('Button clicked', showAddManuFacturerModal)
    setShowAddManuFacturerModal(true)
  }

  return (
    <>
      <TextField
        name="productname"
        label="Product Name"
        value={props.product.productname}
        onChange={(e) => onProductInputChange_(e)}
        placeholder="Product Name e.g Crop tee"
      />

      <CRow className="mb-4">
        <CCol xs="4">
          {showAddGroupModal ? (
            <Modal title="Add Group" onClose={setShowAddGroupModal}>
              <AddGroup isModal={true} />
            </Modal>
          ) : null}
          <ComboInput
            name="group"
            label="Group"
            placeholder="Select Group"
            value={props.product.group}
            onChange={(e) => onSelectionInput_(e, 'group')}
            options={props.productGroups}
            secondaryLabel="+ Add Group"
            secondaryLabelClick={displayAddGroupModal}
          />
        </CCol>
        <CCol xs="4">
          {showAddManuFacturerModal ? (
            <Modal
              title="Add Manufacturer"
              onClose={setShowAddManuFacturerModal}
            >
              <AddManufacturer isModal={true} />
            </Modal>
          ) : null}
          <ComboInput
            name="manufacturer"
            label="Manufacturer"
            placeholder="Select Manufacturer"
            value={props.product.manufacturer}
            onChange={(e) => onSelectionInput_(e, 'manufacturer')}
            options={props.manufacturers}
            secondaryLabel="+ Add ManuFacturer"
            secondaryLabelClick={displayAddManuFacturerModal}
          />
        </CCol>
        <CCol xs="4">
          <ComboInput
            name="brand"
            label="Brand"
            value={props.product.brand}
            onChange={(e) => onSelectionInput_(e, 'brand')}
            placeholder="Enter brand name"
            options={props.brands}
          />
        </CCol>
      </CRow>

      <CRow>
        <CCol xs="3">
          <TextField
            name="sku"
            value={props.product.sku}
            onChange={(e) => onProductInputChange_(e)}
            label="SKU"
            placeholder="E.g SKU16708945"
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="mpn"
            label="MPN"
            value={props.product.mpn}
            onChange={(e) => onProductInputChange_(e)}
            placeholder="Manufacturer Pin Number"
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="upc"
            label="UPC"
            value={props.product.upc}
            onChange={(e) => onProductInputChange_(e)}
            placeholder="Universal Product Code"
            labelTag="(Must be unique)"
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="asin"
            label="ASIN"
            value={props.product.asin}
            onChange={(e) => onProductInputChange_(e)}
            placeholder="Amazon Standard Number"
          />
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(' state : ', state)
  return {
    productGroups: state.productGroups,
    brands: state.brands,
    manufacturers: state.manufacturers,
    product: state.product,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     updateProductGroups: groups =>
//       dispatch({
//         type: actionTypes.UPDATE_PRODUCT_GROUP,
//         payload: groups,
//       }),
//     updateBrands: groups =>
//       dispatch({
//         type: actionTypes.UPDATE_BRANDS,
//         payload: groups,
//       }),
//     updateManufacturers: groups =>
//       dispatch({
//         type: actionTypes.UPDATE_MANUFACTURERS,
//         payload: groups,
//       }),
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
  { changeProductInput, updateBrands, updateManufacturers, updateProductGroups }
)(SimpleProduct)
