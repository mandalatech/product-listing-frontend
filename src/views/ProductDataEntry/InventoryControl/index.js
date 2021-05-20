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

const InventoryControl = (props) => {
  // const onProductInputChange_ = e => {
  //   console.log('event[product]', e)
  //   props.changeProductInput(e.target.name, e.target.value)
  // }

  // const onSelectionInput_ = (e, name) => {
  //   console.log('options[product]', e)
  //   props.changeProductInput(name, e.value)
  // }

  const [manageStock, setManageStock] = useState(false)

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <h4 className="outside-card-title mb-4">Inventory Control</h4>
        <CCard className="addpro-custom-card sm-pd">
          <CCardBody>
            <CRow>
              <CCol xs="4">
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    value="manageStock"
                    onChange={(e) => {
                      setManageStock(e.target.checked)
                    }}
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox1"
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

export default InventoryControl
