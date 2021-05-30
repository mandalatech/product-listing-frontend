import React, { useState, useEffect } from 'react'
import { CRow, CCol, CButton } from '@coreui/react'

import ComboInput from '../../components/ComboInput'
import TextField from 'src/views/components/TextField'
import CIcon from '@coreui/icons-react'

import { connect } from 'react-redux'

const Warehouse = ({ warehouseId, onDelete, options, getRecord, ...props }) => {
  const [warehouse, setWarehouse] = useState(null)
  const [stock, setStock] = useState(0)

  const [warehouseError, setWarehouseError] = useState('')
  const [stockError, setStockError] = useState('')

  const recordState = {
    id: warehouseId,
    warehouse: warehouse,
    stock: stock,
  }

  useEffect(() => {
    if (
      props.errors.warehouses &&
      props.errors.warehouses.hasOwnProperty(warehouseId)
    ) {
      const _errors = props.errors.warehouses[warehouseId]
      if (_errors && _errors.warehouse) {
        setWarehouseError(_errors.warehouse)
      }
      if (_errors && _errors.stock) {
        setStockError(_errors.stock)
      }
    }
  }, [props.errors])

  useEffect(() => {
    getRecord(recordState)
  }, [warehouse, stock])

  return (
    <div>
      <CRow className="mb-4 d-flex justify-content-between align-items-center">
        <CCol xs="4">
          <ComboInput
            name="wareHouse"
            label="Name"
            placeholder="Select Warehouse Name"
            onChange={val => {
              setWarehouse(val.id)
            }}
            options={options}
            error={warehouseError}
          />
        </CCol>

        <CCol xs="4">
          <TextField
            name="stock"
            label="Stock"
            placeholder="No. of Stock"
            type="number"
            onChange={e => {
              setStock(e.target.value)
            }}
            error={stockError}
          />
        </CCol>

        <CCol xs="4">
          <CButton
            variant="outline"
            type="reset"
            size="sm"
            color="danger"
            onClick={e => {
              if (onDelete && typeof onDelete == 'function') {
                onDelete(warehouseId)
              }
            }}
          >
            <CIcon name="cil-trash" /> Delete
          </CButton>
        </CCol>
      </CRow>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    errors: state.product.errors,
  }
}

export default connect(
  mapStateToProps,
  null
)(Warehouse)
