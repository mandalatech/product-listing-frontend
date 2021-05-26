import React, { useState, useEffect } from 'react'
import { CCol, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import {
  updateWarehouses,
  setInventoryWarehouseOptions,
} from 'src/reducers/actions/index'

import Warehouse from './Warehouse'
import HorizontalRule from 'src/views/components/HorizontalRule'
import callAPI from 'src/api/'
import { WAREHOUSE_URL } from 'src/constants/urls'

import { connect } from 'react-redux'
import AddWarehouse from 'src/views/Warehouse/AddWarehouse'
import Modal from 'src/views/components/Modal'

const WarehouseContainer = (props) => {
  const [warehouseList, setWarehouseList] = useState([1564135]) // Stores ID of each record.
  const [error, setError] = useState('')
  const [showAddWarehouseModal, setShowAddWarehouseModal] = useState(false)

  const handleAddWarehouseClick = (e) => {
    if (warehouseList.length === props.warehouses.length) {
      setError(
        `Cant add more warehouse options. The available warehouses is ${props.warehouses.length}`
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

  const getEachRecordState = (record) => {
    const changedRecord = props.warehouseOptions.filter(
      (el) => el.id !== record.id
    )
    props.setInventoryWarehouseOptions(changedRecord.concat(record))
  }

  useEffect(() => {
    // Remove data of id `id` from warehouseList if element `id` of
    // warehouseRecord gets deleted.
    props.setInventoryWarehouseOptions(
      props.warehouseOptions.filter((el) => warehouseList.includes(el.id))
    )
  }, [warehouseList])

  return (
    <div>
      <HorizontalRule />

      <div className="mb-4">
        {showAddWarehouseModal ? (
          <Modal title="Add Group" onClose={setShowAddWarehouseModal} size="xl">
            <AddWarehouse isModal={true} />
          </Modal>
        ) : null}
        <div className="d-flex align-items-baseline">
          <h4 style={{ color: 'black' }}>Warehouse</h4>
          <div
            className="font-weight-bold text-secondary ml-5"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setShowAddWarehouseModal(true)
            }}
          >
            {'+ Add Warehouse'}
          </div>
        </div>

        <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.5)' }}>
          Inventory can be set to multiple warehouses
        </p>
      </div>

      {warehouseList.map((warehouseId) => (
        <Warehouse
          warehouseId={warehouseId}
          onDelete={handleDelete}
          options={props.warehouses}
          getRecord={getEachRecordState}
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
    warehouseOptions: state.product.warehouses,
  }
}

export default connect(mapStateToProps, {
  updateWarehouses,
  setInventoryWarehouseOptions,
})(WarehouseContainer)
