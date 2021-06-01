import { CButton, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import { deleteBrand, getAllBrands } from 'src/api/brandRequests'

import { connect } from 'react-redux'
import { updateBrands } from 'src/reducers/actions/index'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

const DeleteBrand = ({ item, ...props }) => {
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

  const _deleteBrand = async (item) => {
    const abortController = new AbortController()
    const signal = abortController.signal
    setDeletion(STATE.DELETING)
    console.log('[DELETE] BRAND: ', item)
    const deleteResponse = await deleteBrand(signal, item.id).then(
      ({ json, response }) => {
        if (response.ok) {
          setDeletion(STATE.DELETED)
          simulateEscape()
          Toast.fire({
            icon: 'success',
            title: ToastMessage('success', 'Brand deleted.'),
          })
        }
      }
    )
    console.log(deleteResponse)

    // Get a fresh list of brands.
    getAllBrands().then(({ response, json }) => {
      if (response.ok) {
        props.updateBrands(json)
      }
    })
  }

  return (
    <div className="text-center">
      {deletion == STATE.DELETED ? (
        <p>
          <strong>{item.name}</strong> brand successfully deleted.
        </p>
      ) : (
        <p>
          Are you sure want to delete <strong>{item.name}</strong> brand ?
        </p>
      )}
      {deletion == STATE.DELETED ? null : (
        <CButton
          color="danger"
          disabled={deletion == STATE.DELETING}
          onClick={() => {
            _deleteBrand(item)
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

export default connect(null, { updateBrands })(DeleteBrand)
