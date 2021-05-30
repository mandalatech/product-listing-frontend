import { CButton, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import { deleteWarehouse } from 'src/api/warehouseRequests'

import { connect } from 'react-redux'
import { updateWarehouses } from 'src/reducers/actions/index'

import callAPI from 'src/api'
import { WAREHOUSE_URL } from 'src/constants/urls'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

const DeleteWarehouse = ({ item, ...props }) => {
  // State of deletions.
  const STATE = Object.freeze({
    NOT_DELETED: 'NOT_DELETED',
    DELETING: 'DELETING',
    DELETED: 'DELETED',
  })

  // Simulate the ESC key for exiting modal.
  const simulateEscape = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
  }

  const [deletion, setDeletion] = useState(STATE.NOT_DELETED)

  const _deleteWarehouse = async (item) => {
    const abortController = new AbortController()
    const signal = abortController.signal
    setDeletion(STATE.DELETING)
    console.log('[DELETE] WAREHOUSE: ', item)
    const deleteResponse = await deleteWarehouse(signal, item.id).then(
      ({ json, response }) => {
        if (response.ok) {
          setDeletion(STATE.DELETED)
          simulateEscape()
          Toast.fire({
            icon: 'success',
            title: ToastMessage('success', 'Warehouse deleted.'),
          })
        }
      }
    )
    setDeletion(STATE.DELETED)
    console.log(deleteResponse)

    // Get a fresh list of warehouses.
    callAPI(WAREHOUSE_URL, 'get').then((res) => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateWarehouses(res)
      }
    })
  }

  return (
    <div className="text-center">
      {deletion == STATE.DELETED ? (
        <p>
          <strong>{item.name}</strong> warehouse successfully deleted.
        </p>
      ) : (
        <p>
          Are you sure want to delete <strong>{item.name}</strong> warehouse ?
        </p>
      )}
      {deletion == STATE.DELETED ? null : (
        <CButton
          color="danger"
          disabled={deletion == STATE.DELETING}
          onClick={() => {
            _deleteWarehouse(item)
          }}
        >
          {deletion == STATE.DELETING ? (
            <CSpinner color="secondary" size="sm" />
          ) : deletion == STATE.NOT_DELETED ? (
            'Delete'
          ) : null}
        </CButton>
      )}
    </div>
  )
}

export default connect(null, { updateWarehouses })(DeleteWarehouse)
