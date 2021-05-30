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

  console.log(' variantsData :[var] ', props.product.varientsData)

  const addVariantForm = () => {
    let currentVarient = props.product.varientsData

    console.log(' productVarientData [var]', currentVarient)
    let productVarientModel = props.product.variantModel.map(data => {
      return data
        .toLowerCase()
        .split(' ')
        .join('_')
    })
    var modelObj = {}
    for (var i = 0, length = productVarientModel.length; i < length; i += 1) {
      console.log(' vava ', productVarientModel[i])
      if (productVarientModel[i] === 'image') {
        modelObj[productVarientModel[i]] = []
      } else {
        modelObj[productVarientModel[i]] = ''
      }
    }

    console.log(
      ' add varient model :[var] ',
      productVarientModel,
      ' : ',
      modelObj
    )

    currentVarient.push({
      ...modelObj,
      new: true,
      id: Math.floor(Math.random() * 100 + 1),
    })
    props.addVriantProductState(currentVarient)
    setCurrentFormCount(prevCount => {
      return prevCount + 1
    })
    console.log('variant added [var] ', currentVarient)
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
          <CCard
            className={
              props.product.variant.length > 0 ||
              (props.edit && props.product.varientsData.length !== 0)
                ? 'addpro-custom-card sm-pd'
                : ''
            }
          >
            {props.product.variant.length > 0 ||
            (props.edit && props.product.varientsData.length !== 0) ? (
              <>
                <CCardBody>
                  <CFormGroup className="mb-4 variant-form-table">
                    <CRow className="heading">
                      {[...props.product.variantModel].map(data => {
                        return <CCol className="mb-3">{data}</CCol>
                      })}
                    </CRow>
                    <div className="divider" />
                    {[...props.product.varientsData].map((state, index) => (
                      <div key={index}>
                        {console.log(' variant data here ', state)}
                        <VariantRecord
                          variantImage={props.variantImage}
                          setVariantImage={props.setVariantImage}
                          edit={props.edit}
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
                  <div className="d-flex justify-content-around">
                    <CButton color="light" onClick={addVariantForm}>
                      <span style={{ color: '#17171A', fontWeight: 600 }}>
                        + &nbsp;Add New Row
                      </span>
                    </CButton>
                  </div>
                </CCardBody>
              </>
            ) : null}
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
