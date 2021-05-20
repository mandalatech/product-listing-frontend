import React, { useState, useEffect } from 'react'
import { CCol, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import { connect } from 'react-redux'
import { updateWarehouses } from 'src/reducers/actions/index'

import Warehouse from './Warehouse'
import HorizontalRule from 'src/views/components/HorizontalRule'
import callAPI from 'src/api/'
import { WAREHOUSE_URL } from 'src/constants/urls'

const WarehouseContainer = (props) => {
  const [warehouseList, setWarehouseList] = useState([1564135]) // Stores ID of each record.
  const [error, setError] = useState('')

  const handleAddWarehouseClick = (e) => {
    if (warehouseList.length === props.warehouses.length) {
      setError(
        'The warehouses cannot be duplicated. Please add more warehouses first.'
      )
      return
    }
    setWarehouseList((prevList) => {
      return prevList.concat(Math.floor(Math.random() * 100000000 + 1))
    })
  }

  const handleDelete = (id) => {
    setError('')
    setWarehouseList((prevList) => {
      return prevList.filter((warehouseId) => warehouseId !== id)
    })
  }

  useEffect(() => {
    callAPI(WAREHOUSE_URL, 'get').then((res) => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateWarehouses(res)
      }
    })
  }, [])

  return (
    <div>
      <HorizontalRule />

      <div className="mb-4">
        <h4 style={{ color: 'black' }}>Warehouse</h4>
        <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.5)' }}>
          Inventory can be set to multiple warehouses
        </p>
      </div>

      {warehouseList.map((warehouseId) => (
        <Warehouse
          warehouseId={warehouseId}
          onDelete={handleDelete}
          options={props.warehouses}
        />
      ))}

      <HorizontalRule />

      <CButton
        className="mb-0"
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={handleAddWarehouseClick}
      >
        <div style={{ marginRight: 14 }}>
          <CIcon content={freeSet.cilPlus} size={'lg'} />
        </div>
        Add Another Warehouse
      </CButton>
      <div className="mt-3 text-danger small">{error}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    warehouses: state.root.warehouses,
  }
}

export default connect(mapStateToProps, { updateWarehouses })(
  WarehouseContainer
)
