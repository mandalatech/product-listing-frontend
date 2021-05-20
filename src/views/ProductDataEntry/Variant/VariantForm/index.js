import React, { useState, useEffect } from 'react'
import {
  CCol,
  CRow,
  CCardBody,
  CCard,
  CFormGroup,
  CButton,
} from '@coreui/react'
import VariantRecord from './VariantRecord'
import HorizontalRule from 'src/views/components/HorizontalRule'
import { connect } from 'react-redux'
import {
  addProductVariant,
  addVriantProductState,
} from '../../../../reducers/actions/index'

const VariantForm = props => {
  const [activeVariantFormState, setActiveVariantFormState] = useState({})
  const [currentFormCount, setCurrentFormCount] = useState(0)
  const [variantFormState, setVariantFormState] = useState([])
  console.log(' variant form state : ', variantFormState)

  const variantModel = {
    id: '',
    image: '',
    name: '',
    sku: '',
    mpn: '',
    upc: '',
    asin: '',
    major_weight: '',
    minor_weight: '',
  }

  const addVariantForm = () => {
    let currentVarient = props.product.variant
    let productVarientModel = props.product.variantModel.map(data => {
      return data
        .toLowerCase()
        .split(' ')
        .join('_')
    })
    var modelObj = {}
    for (var i = 0, length = productVarientModel.length; i < length; i += 1) {
      modelObj[productVarientModel[i]] = ''
    }
    console.log(' add varient model : ', productVarientModel, ' : ', modelObj)

    currentVarient.push({
      ...modelObj,
      id: Math.floor(Math.random() * 100000000 + 1),
    })
    props.addVriantProductState(currentVarient)
    setCurrentFormCount(prevCount => {
      return prevCount + 1
    })
    console.log('variant added [variant] ', variantFormState)
  }

  useEffect(() => {
    console.log(' inside use effect [variant] ', props.product.variant)
    setVariantFormState([...props.product.variant])
    setCurrentFormCount(prevCount => {
      return prevCount + 1
    })
  }, [props.product.variant])

  // To be passed as Prop.
  const _removeRecord = id => {
    const newVariantFormState = variantFormState.filter(form => form.id !== id)
    setVariantFormState(newVariantFormState)
    setCurrentFormCount(prevCount => prevCount - 1)
  }
  console.log(' varient data [variant] ', props.product.varientsData)
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              {currentFormCount > 0 ? (
                <CFormGroup className="mb-4 variant-form-table">
                  <CRow className="heading">
                    {/* <CCol md="1">#</CCol> */}
                    {[...props.product.variantModel].map(data => {
                      return <CCol className="mb-3">{data}</CCol>
                    })}
                    {/* <CCol style={{ marginLeft: '-5rem', marginRight: '3rem' }}>
                      Image
                    </CCol>
                    <CCol>Variant Name</CCol>
                    <CCol>SKU</CCol>
                    <CCol>MPN</CCol>
                    <CCol>UPC</CCol>
                    <CCol>ASIN</CCol>
                    <CCol>Major Weight</CCol>
                    <CCol>Minor Weight</CCol> */}
                  </CRow>
                  <div className="divider" />
                  {[...props.product.varientsData].map((state, index) => (
                    <div key={index}>
                      <VariantRecord
                        state={state}
                        symbol={index + 1}
                        removeRecord={id => {
                          _removeRecord(id)
                        }}
                      />
                      <HorizontalRule
                        marginBottom="0.8rem"
                        marginTop="0.8rem"
                      />
                    </div>
                  ))}
                </CFormGroup>
              ) : null}

              <div className="d-flex justify-content-around">
                <CButton color="light" onClick={addVariantForm}>
                  <span style={{ color: '#17171A', fontWeight: 600 }}>
                    + &nbsp;Add New Row
                  </span>
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = state => {
  return {
    product: state.product,
  }
}

export default connect(
  mapStateToProps,
  { addProductVariant, addVriantProductState }
)(VariantForm)
