import { CButton, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import { deleteProductGroup } from 'src/api/groupRequests'

import { connect } from 'react-redux'
import { updateProductGroups } from 'src/reducers/actions/index'

import callAPI from 'src/api'
import { PRODUCT_GROUP_URL } from 'src/constants/urls'

const DeleteProductGroup = ({ item, ...props }) => {
  // State of deletions.
  const STATE = Object.freeze({
    NOT_DELETED: 'NOT_DELETED',
    DELETING: 'DELETING',
    DELETED: 'DELETED',
  })

  const [deletion, setDeletion] = useState(STATE.NOT_DELETED)

  const _deleteProductGroup = async (item) => {
    const abortController = new AbortController()
    const signal = abortController.signal
    setDeletion(STATE.DELETING)
    console.log('[DELETE] PRODUCT GROUP: ', item)
    const deleteResponse = await deleteProductGroup(signal, item.id)
    setDeletion(STATE.DELETED)
    console.log(deleteResponse)

    // Get a fresh list of brands.
    callAPI(PRODUCT_GROUP_URL, 'get').then((res) => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateProductGroups(res)
      }
    })
  }

  return (
    <div className="text-center">
      {deletion == STATE.DELETED ? (
        <p>
          <strong>{item.name}</strong> group successfully deleted.
        </p>
      ) : (
        <p>
          Are you sure want to delete <strong>{item.name}</strong> group ?
        </p>
      )}
      <CButton
        color={deletion == STATE.DELETED ? 'success' : 'danger'}
        disabled={deletion == STATE.DELETING || deletion == STATE.DELETED}
        onClick={() => {
          _deleteProductGroup(item)
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

export default connect(null, { updateProductGroups })(DeleteProductGroup)
