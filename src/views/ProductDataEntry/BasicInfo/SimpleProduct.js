import React, { useState } from 'react'
import { CCol, CRow } from '@coreui/react'
import { connect } from 'react-redux'

import ComboInput from 'src/views/components/ComboInput'
import TextField from 'src/views/components/TextField'

import AddGroup from 'src/views/Group/AddGroup'
import AddManufacturer from 'src/views/Manufacturer/AddManufacturer'
import AddBrand from 'src/views/Brand/AddBrand'

import ErrorBody from '../../../reusable/ErrorBody'

import {
  changeProductInput,
  updateBrands,
  updateManufacturers,
  updateProductGroups,
} from 'src/reducers/actions/index'

import Modal from 'src/views/components/Modal'

const SimpleProduct = (props) => {
  const [showAddGroupModal, setShowAddGroupModal] = useState(false)
  const [showAddManuFacturerModal, setShowAddManuFacturerModal] =
    useState(false)
  const [showAddBrandModal, setShowAddBrandModal] = useState(false)

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
  const displayAddBrandModal = (e) => {
    console.log('Button clicked', showAddBrandModal)
    setShowAddBrandModal(true)
  }

  console.log(' errors : ', props.product.errors)

  return (
    <>
      <TextField
        name="productname"
        label="Product Name"
        value={props.product.productname}
        onChange={(e) => onProductInputChange_(e)}
        placeholder="Product Name e.g Crop tee"
        error={props.product.errors.productname}
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
            error={props.product.errors.group}
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
            error={props.product.errors.manufacturer}
          />
        </CCol>
        <CCol xs="4">
          {showAddBrandModal ? (
            <Modal title="Add Brand" onClose={setShowAddBrandModal}>
              <AddBrand isModal={true} />
            </Modal>
          ) : null}
          <ComboInput
            name="brand"
            label="Brand"
            value={props.product.brand}
            onChange={(e) => onSelectionInput_(e, 'brand')}
            placeholder="Enter brand name"
            options={props.brands}
            secondaryLabel="+ Add Brand"
            secondaryLabelClick={displayAddBrandModal}
            error={props.product.errors.brand}
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
            error={props.product.errors.sku}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="mpn"
            label="MPN"
            value={props.product.mpn}
            onChange={(e) => onProductInputChange_(e)}
            placeholder="Manufacturer Pin Number"
            error={props.product.errors.mpn}
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
            error={props.product.errors.upc}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="asin"
            label="ASIN"
            value={props.product.asin}
            onChange={(e) => onProductInputChange_(e)}
            placeholder="Amazon Standard Number"
            error={props.product.errors.asin}
          />
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(' state : ', state)
  return {
    productGroups: state.root.productGroups,
    brands: state.root.brands,
    manufacturers: state.root.manufacturers,
    product: state.product,
  }
}

export default connect(mapStateToProps, {
  changeProductInput,
  updateBrands,
  updateManufacturers,
  updateProductGroups,
})(SimpleProduct)
