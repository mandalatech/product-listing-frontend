import { CButton, CSpinner } from '@coreui/react'
import React, { useState } from 'react'

import { deleteBrand } from 'src/api/brandRequests'

const DeleteBrand = ({ item }) => {
  const [deleting, setDeleting] = useState(false)

  const deleteGroup = async (item) => {
    const abortController = new AbortController()
    const signal = abortController.signal
    setDeleting(true)
    console.log('[DELETE] BRAND: ', item)
    const deleteResponse = await deleteBrand(signal, item.id)
    setDeleting(false)
  }

  return (
    <div className="text-center">
      <p>
        Are you sure want to delete <strong>{item.name}</strong> brand ?
      </p>
      <CButton
        color="danger"
        disabled={deleting}
        onClick={() => {
          deleteGroup(item)
        }}
      >
        {deleting ? <CSpinner color="secondary" size="sm" /> : 'Delete'}
      </CButton>
    </div>
  )
}

export default DeleteBrand
