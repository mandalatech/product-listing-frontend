import { CButton, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import { deleteBrand } from 'src/api/brandRequests'

import { connect } from 'react-redux'
import { updateBrands } from 'src/reducers/actions/index'

import callAPI from 'src/api'
import { BRAND_URL } from 'src/constants/urls'

const DeleteBrand = ({ item, ...props }) => {
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
    console.log(deleteResponse)

    // Get a fresh list of brands.
    callAPI(BRAND_URL, 'get').then((res) => {
      if (res.message && res.message === 'Network Error') {
      } else {
        props.updateBrands(res)
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
