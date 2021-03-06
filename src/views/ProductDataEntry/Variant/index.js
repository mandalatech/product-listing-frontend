import React, { useState } from 'react'
import { CCol, CRow, CCardBody, CCard, CButton } from '@coreui/react'
import HorizontalRule from 'src/components/HorizontalRule'
import EmptyContent from 'src/components/EmptyContent'
import AddNewAttribute from './AddNewAttribute'
import VariantForm from './VariantForm'

const Variant = (props) => {
  const [addVariantAttribute, setAddVariantAttribute] = useState(false)

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title">Variants</h4>
          <p className="mb-4">Add variants like different sizes or colors.</p>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="font-weight-bold">Add variant fields</h5>
                </div>
                <div>
                  <CButton
                    block
                    color="warning"
                    onClick={(e) => {
                      setAddVariantAttribute(true)
                    }}
                  >
                    <p
                      style={{
                        margin: '0',
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                    >
                      + &nbsp; Add variant Field
                    </p>
                  </CButton>
                </div>
              </div>
              <HorizontalRule />
              {addVariantAttribute ? (
                <AddNewAttribute
                  setAddVariantAttribute={setAddVariantAttribute}
                />
              ) : (
                <EmptyContent content="No any variant added yet." />
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <VariantForm
        variantImage={props.variantImage}
        setVariantImage={props.setVariantImage}
        edit={props.edit}
      />
    </>
  )
}

export default Variant
