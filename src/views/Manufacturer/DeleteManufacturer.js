import { CButton, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import { deleteManufacturer } from 'src/api/manufacturerRequests'
import { connect } from 'react-redux'
import { updateManufacturers } from 'src/reducers/actions/index'

import callAPI from 'src/api'
import { MANUFACTURER_URL } from 'src/constants/urls'

const DeleteManufacturer = ({ item, ...props }) => {
  // State of deletions.
  const STATE = Object.freeze({
    NOT_DELETED: 'NOT_DELETED',
    DELETING: 'DELETING',
    DELETED: 'DELETED',
  })

  const [deletion, setDeletion] = useState(STATE.NOT_DELETED)

  const _deleteManufacturer = async (item) => {
    const abortController = new AbortController()
    const signal = abortController.signal
    setDeletion(STATE.DELETING)
    console.log('[DELETE] BRAND: ', item)
    const deleteResponse = await deleteManufacturer(signal, item.id)
    setDeletion(STATE.DELETED)
    console.log(deleteResponse)

    // Get a fresh list of brands.
    callAPI(MANUFACTURER_URL, 'get').then((res) => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateManufacturers(res)
      }
    })
  }

  return (
    <div className="text-center">
      {deletion == STATE.DELETED ? (
        <p>
          <strong>{item.name}</strong> manufacturer successfully deleted.
        </p>
      ) : (
        <p>
          Are you sure want to delete <strong>{item.name}</strong> manufacturer
          ?
        </p>
      )}
      <CButton
        color={deletion == STATE.DELETED ? 'success' : 'danger'}
        disabled={deletion == STATE.DELETING || deletion == STATE.DELETED}
        onClick={() => {
          _deleteManufacturer(item)
        }}
      >
        {deletion == STATE.DELETING ? (
          <CSpinner color="secondary" size="sm" />
        ) : deletion == STATE.NOT_DELETED ? (
          'Delete'
        ) : (
          'Deleted'
        )}
      </CButton>
    </div>
  )
}

export default connect(null, { updateManufacturers })(DeleteManufacturer)
