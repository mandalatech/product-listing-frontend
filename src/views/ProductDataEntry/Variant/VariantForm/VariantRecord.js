import React from 'react'
import { CCol, CRow, CInput } from '@coreui/react'

import Dropzone from 'src/views/components/Dropzone'

const VariantRecord = (props) => {
  const { count } = props

  return (
    <div>
      <CRow className="variant-attributes">
        <CCol md="1" className="text-bold">
          {count}
        </CCol>
        <CCol
          className="variant-image"
          style={{ marginLeft: '-5rem', marginRight: '3rem' }}
        >
          <Dropzone />
        </CCol>
        <CCol>
          <CInput placeholder="Variant Name" />
        </CCol>
        <CCol>
          <CInput placeholder="SKU" />
        </CCol>
        <CCol>
          <CInput placeholder="MPN" />
        </CCol>
        <CCol>
          <CInput placeholder="UPC" />
        </CCol>
        <CCol>
          <CInput placeholder="ASIN" />
        </CCol>
        <CCol>
          <CInput placeholder="Major Weight" type="number" />
        </CCol>
        <CCol>
          <CInput placeholder="Minor Weight" type="number" />
        </CCol>
      </CRow>
    </div>
  )
}

export default VariantRecord
