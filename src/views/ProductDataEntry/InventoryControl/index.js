import {
  CCard,
  CCardBody,
  CCol,
  CFormGroup,
  CInputCheckbox,
  CLabel,
  CRow,
} from '@coreui/react'
import React from 'react'
import { connect } from 'react-redux'
import ComboInput from 'src/components/ComboInput'
import HorizontalRule from 'src/components/HorizontalRule'
import {
  changeProductInput,
  setInventoryWarehouseOptions,
} from 'src/reducers/actions/index'
import WarehouseContainer from './WarehouseContainer'

const InventoryControl = (props) => {
  const onSelectionInput_ = (e, name) => {
    console.log('Options name: ', name)
    console.log('options[product]', e)
    props.changeProductInput(name.name, e.value)
  }

  const setWarehouse_ = (data) => {
    props.setWarehouse(data)
  }

  const inventoryTypeOptions = [
    {
      id: 'PHYSICAL',
      name: 'Physical',
    },
    {
      id: 'VIRTUAL',
      name: 'Virtual',
    },
    {
      id: 'DROPSHIP',
      name: 'Dropship',
    },
  ]

  const stockOptions = [
    {
      id: 'OWN_STOCK',
      name: 'Own Stock',
    },
    {
      id: 'VENDOR_STOCK',
      name: 'Vendor Stock',
    },
    {
      id: 'OWN_AND_VENDOR_STOCK',
      name: 'Own and Vendor Stock',
    },
  ]

  const handleManageStockChange = (e) => {
    props.changeProductInput(e.target.name, e.target.checked)
    if (!e.target.checked) {
      props.changeProductInput('stockType', '')
    } else {
      props.changeProductInput('stockType', 'OWN_STOCK')
    }
  }

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <h4 className="outside-card-title mb-4">Inventory Control</h4>
        <CCard className="addpro-custom-card sm-pd">
          <CCardBody>
            <CRow className="mb-3">
              <CCol md="4" xs="12">
                <ComboInput
                  label="Inventory Type"
                  placeholder="Select Type"
                  name="inventoryType"
                  options={inventoryTypeOptions}
                  onChange={onSelectionInput_}
                  value={props.product.inventoryType}
                  error={props.product.errors.inventoryType}
                />
              </CCol>
            </CRow>
            <HorizontalRule />
            <CRow>
              <CCol xs="4">
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="manage_stock"
                    name="manage_stock"
                    onChange={handleManageStockChange}
                    checked={props.product.manage_stock}
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="manage_stock"
                  >
                    Manage Stock
                  </CLabel>
                </CFormGroup>
              </CCol>
            </CRow>
            {props.product.manage_stock ? (
              <>
                <CRow className="mt-4">
                  <CCol md="4" xs="12">
                    <ComboInput
                      label="Stock Type"
                      placeholder="Select Type"
                      name="stockType"
                      options={stockOptions}
                      onChange={onSelectionInput_}
                      value={props.product.stockType}
                    />
                  </CCol>
                </CRow>

                <WarehouseContainer
                  setWarehouse={setWarehouse_}
                  curretWarehouses={props.product.warehouses}
                  edit={props.edit}
                />
              </>
            ) : null}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

const mapStatetoProps = (state) => {
  return {
    product: state.product,
  }
}

export default connect(mapStatetoProps, {
  changeProductInput,
  setInventoryWarehouseOptions,
})(InventoryControl)
