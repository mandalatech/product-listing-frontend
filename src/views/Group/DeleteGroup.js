import { CButton, CSpinner } from '@coreui/react'
import React, { useState, useEffect } from 'react'
import { deleteProductGroup } from 'src/api/groupRequests'

import { connect } from 'react-redux'
import { updateProductGroups } from 'src/reducers/actions/index'

import callAPI from 'src/api'
import { PRODUCT_GROUP_URL } from 'src/constants/urls'

const DeleteProductGroup = ({ item, ...props }) => {
  const [message, setMessage] = useState(
    <p>
      Are you sure want to delete <strong>{item.name}</strong> group ?
    </p>
  )

  // State of deletions.
  const STATE = Object.freeze({
    CANT_DELETE: 'CANT_DELETE',
    NOT_DELETED: 'NOT_DELETED',
    DELETING: 'DELETING',
    DELETED: 'DELETED',
  })

  const [deletion, setDeletion] = useState(STATE.NOT_DELETED)

  const _deleteProductGroup = async (item) => {
    const abortController = new AbortController()
    const signal = abortController.signal
    setDeletion(STATE.DELETING)
    setMessage(
      <p>
        Deleting <strong>{item.name}</strong> on progress
      </p>
    )
    console.log('[DELETE] PRODUCT GROUP: ', item)
    await deleteProductGroup(signal, item.id).then(({ json, response }) => {
      console.log(json, response)
      if (response.ok) {
        setDeletion(STATE.DELETED)
        setMessage(
          <p>
            <strong>{item.name}</strong> successfully deleted.
          </p>
        )
      } else {
        setDeletion(STATE.CANT_DELETE)
        setMessage(
          <p>
            <strong>{item.name}</strong> group cant be deleted.
          </p>
        )
      }
    })

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
      {message}
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
        ) : deletion == STATE.CANT_DELETE ? (
          'Cant delete'
        ) : (
          'Deleted'
        )}
      </CButton>
    </div>
  )
}

export default connect(null, { updateProductGroups })(DeleteProductGroup)
