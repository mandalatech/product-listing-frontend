import React, { useState } from 'react'
import { CCol, CRow, CFormGroup } from '@coreui/react'
import { connect } from 'react-redux'
import {
  changeProductInput,
  updateBrands,
  updateManufacturers,
  updateProductGroups,
} from '../../../reducers/actions/index'

import TextField from '../../components/TextField'
import ComboInput from './../../components/ComboInput'

import AddGroup from 'src/views/Group/AddGroup'
import AddManufacturer from 'src/views/Manufacturer/AddManufacturer'
import AddBrand from 'src/views/Brand/AddBrand'

import Modal from 'src/views/components/Modal'

const Configurable = (props) => {
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

  console.log(' prodddd: ', props.product)
  return (
    <>
      <CFormGroup className="mb-4">
        <TextField
          onChange={(e) => onProductInputChange_(e)}
          value={props.product.productname}
          name="productname"
          label="Product Name"
          placeholder="Product Name e.g Crop tee"
          error={props.product.errors.productname}
        />
      </CFormGroup>

      <CRow>
        <CCol xs="4">
          {showAddGroupModal ? (
            <Modal title="Add Group" onClose={setShowAddGroupModal}>
              <AddGroup isModal={true} />
            </Modal>
          ) : null}
          <ComboInput
            onChange={(e) => onSelectionInput_(e, 'group')}
            value={props.product.group}
            name="group"
            label="Group"
            placeholder="Select Group"
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
            onChange={(e) => onSelectionInput_(e, 'manufacturer')}
            value={props.product.manufacturer}
            name="manufacturer"
            label="Manufacturer"
            placeholder="Select Manufacturer"
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
            onChange={(e) => onSelectionInput_(e, 'brand')}
            value={props.product.brand}
            name="configBrand"
            label="Brand"
            placeholder="Enter brand name"
            options={props.brands}
            secondaryLabel="+ Add Brand"
            secondaryLabelClick={displayAddBrandModal}
            error={props.product.errors.brand}
          />
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = (state) => {
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
})(Configurable)
