import { CButton, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import { deleteColor } from 'src/api/colorRequests'

import { connect } from 'react-redux'
import { updateColors } from 'src/reducers/actions/index'

import callAPI from 'src/api'
import { COLOR_URL } from 'src/constants/urls'

const DeleteColor = ({ item, ...props }) => {
  // State of deletions.
  const STATE = Object.freeze({
    NOT_DELETED: 'NOT_DELETED',
    DELETING: 'DELETING',
    DELETED: 'DELETED',
  })

  const [deletion, setDeletion] = useState(STATE.NOT_DELETED)

  const _deleteColor = async (item) => {
    const abortController = new AbortController()
    const signal = abortController.signal
    setDeletion(STATE.DELETING)
    console.log('[DELETE] COLOR: ', item)
    const deleteResponse = await deleteColor(signal, item.id)
    setDeletion(STATE.DELETED)
    console.log(deleteResponse)

    // Get a fresh list of colors.
    callAPI(COLOR_URL, 'get').then((res) => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateColors(res)
      }
    })
  }

  return (
    <div className="text-center">
      {deletion == STATE.DELETED ? (
        <p>
          <strong>{item.name}</strong> color successfully deleted.
        </p>
      ) : (
        <p>
          Are you sure want to delete <strong>{item.name}</strong> color ?
        </p>
      )}
      <CButton
        color={deletion == STATE.DELETED ? 'success' : 'danger'}
        disabled={deletion == STATE.DELETING || deletion == STATE.DELETED}
        onClick={() => {
          _deleteColor(item)
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

export default connect(null, { updateColors })(DeleteColor)
