import { CButton, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import { deleteBundle } from 'src/api/bundleRequests'

import { connect } from 'react-redux'

import Toast from 'src/reusable/Toast/Toast'
import { ToastMessage } from 'src/reusable/Toast/ToastMessage'

import { getAllBundles } from 'src/api/bundleRequests'
import { updateBundles } from 'src/reducers/actions/bundle.actions'

const DeleteBundle = ({ item, ...props }) => {
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

  const _deleteBundle = async (item) => {
    const abortController = new AbortController()
    const signal = abortController.signal
    setDeletion(STATE.DELETING)
    console.log('[DELETE] BUNDLE: ', item)
    const deleteResponse = await deleteBundle(signal, item.id).then(
      ({ json, response }) => {
        if (response.ok) {
          setDeletion(STATE.DELETED)
          simulateEscape()
          Toast.fire({
            icon: 'success',
            title: ToastMessage('success', 'Bundle deleted.'),
          })
        }
      }
    )
    setDeletion(STATE.DELETED)
    console.log(deleteResponse)

    getAllBundles().then(({ response, json }) => {
      console.log(response, json)
      if (response.ok) {
        props.updateBundles(json)
      }
    })
  }

  return (
    <div className="text-center">
      {deletion == STATE.DELETED ? (
        <p>Bundle successfully deleted.</p>
      ) : (
        <p>Are you sure want to delete this bundle ?</p>
      )}
      {deletion == STATE.DELETED ? null : (
        <CButton
          color="danger"
          disabled={deletion == STATE.DELETING}
          onClick={() => {
            _deleteBundle(item)
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

export default connect(null, { updateBundles })(DeleteBundle)
