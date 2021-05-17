import React from 'react'
import { CCol, CRow, CInput } from '@coreui/react'
import { CIcon } from '@coreui/icons-react'

import Dropzone from 'src/views/components/Dropzone'

const VariantRecord = (props) => {
  const { symbol, state } = props

  const removeRecord = (id) => {
    props.removeRecord(id)
  }

  return (
    <div>
      <CRow className="variant-attributes">
        <CCol
          md="1"
          className="text-bold d-flex flex-column justify-content-around"
          style={{ marginRight: '-5rem' }}
        >
          <div>{symbol}</div>
          <CIcon
            name="cilPencil"
            onClick={() => {
              removeRecord(state.id)
            }}
          />
        </CCol>
        <CCol className="variant-image">
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
