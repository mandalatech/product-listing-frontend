import { CButton, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import { deleteBrand } from 'src/api/brandRequests'

const DeleteBrand = ({ item }) => {
  // State of deletions.
  const STATE = Object.freeze({
    NOT_DELETED: 'NOT_DELETED',
    DELETING: 'DELETING',
    DELETED: 'DELETED',
  })

  const [deletion, setDeletion] = useState(STATE.NOT_DELETED)

  const _deleteBrand = async (item) => {
    const abortController = new AbortController()
    const signal = abortController.signal
    setDeletion(STATE.DELETING)
    console.log('[DELETE] BRAND: ', item)
    const deleteResponse = await deleteBrand(signal, item.id)
    setDeletion(STATE.DELETED)
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
      <CButton
        color={deletion == STATE.DELETED ? 'success' : 'danger'}
        disabled={deletion == STATE.DELETING || deletion == STATE.DELETED}
        onClick={() => {
          _deleteBrand(item)
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

export default DeleteBrand
