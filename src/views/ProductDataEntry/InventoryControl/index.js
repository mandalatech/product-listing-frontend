import React, { useState, useEffect } from 'react'
import {
  CCol,
  CRow,
  CCardBody,
  CCard,
  CFormGroup,
  CInputCheckbox,
  CLabel,
} from '@coreui/react'

import { connect } from 'react-redux'
import { changeProductInput } from 'src/reducers/actions/index'
import { setInventoryWarehouseOptions } from 'src/reducers/actions/index'
import WarehouseContainer from './WarehouseContainer'
import ComboInput from 'src/components/ComboInput'
import isEmpty from 'src/validations/isEmpty'
import HorizontalRule from 'src/components/HorizontalRule'

const InventoryControl = (props) => {
  const [manageStock, setManageStock] = useState(false)

  const onSelectionInput_ = (e, name) => {
    console.log('Options name: ', name)
    console.log('options[product]', e)
    props.changeProductInput(name.name, e.value)
  }
  console.log(' props.product.warehouses ', props.product.warehouses)

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

  useEffect(() => {
    if (props.edit) {
      setManageStock(!isEmpty(props.product.warehouses))
    }
  }, [])

  const handleManageStockChange = (e) => {
    if (!e.target.checked) {
      props.setInventoryWarehouseOptions([])
    }
    setManageStock(e.target.checked)
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
                    value="manageStock"
                    id="manage_stock"
                    onChange={handleManageStockChange}
                    checked={manageStock}
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
            {manageStock ? (
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
