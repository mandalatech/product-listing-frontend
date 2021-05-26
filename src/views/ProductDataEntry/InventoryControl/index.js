import React, { useState } from 'react'
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
import { changeProductInput } from '../../../reducers/actions/index'

import WarehouseContainer from './WarehouseContainer'
import ComboInput from 'src/views/components/ComboInput'

const InventoryControl = (props) => {
  // const onProductInputChange_ = e => {
  //   console.log('event[product]', e)
  //   props.changeProductInput(e.target.name, e.target.value)
  // }

  const onSelectionInput_ = (e, name) => {
    console.log('Options name: ', name)
    console.log('options[product]', e)
    props.changeProductInput(name.name, e.value)
  }

  const [manageStock, setManageStock] = useState(false)

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
            <CRow>
              <CCol xs="4">
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    value="manageStock"
                    id="manage_stock"
                    onChange={(e) => {
                      setManageStock(e.target.checked)
                    }}
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
                <WarehouseContainer />
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

export default connect(mapStatetoProps, { changeProductInput })(
  InventoryControl
)
