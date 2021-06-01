import React, { useState } from 'react'
import { CCol, CRow, CButton } from '@coreui/react'
import TextField from 'src/components/TextField'
import { connect } from 'react-redux'
import {
  addProductVariant,
  setProductErrors,
} from '../../../reducers/actions/index'

const AddNewAttribute = props => {
  const [variant, setVariant] = useState('')

  const addProductVariant_ = () => {
    console.log('current variant [variant] ', props.product.variant)
    let variantt = [...props.product.variant]
    variantt.push(variant)

    let currentVarient = [...props.product.variantModel]
    let varientsData = [...props.product.varientsData]

    let modifiedCurrentVarient = []
    if (varientsData.length !== 0) {
      varientsData.forEach(element => {
        modifiedCurrentVarient.push({ ...element, [variant]: '' })
      })
    }

    console.log(' newly added [var] ', modifiedCurrentVarient)
    const varientExist = currentVarient.find(data => data === variant)
    console.log(' varisnt exists [variant] ', varientExist)
    let errors = { ...props.product.errors }

    if (varientExist) {
      console.log('variant already exist [variant]')
      errors = {
        ...errors,
        new_variant: 'Variant already exist!',
      }
      props.setProductErrors(errors)
    } else if (variant.length !== 0) {
      errors = {
        ...errors,
        new_variant: '',
      }
      props.setProductErrors(errors)
      currentVarient.splice(2, 0, `${variant}`)
      props.addProductVariant(currentVarient, variantt, modifiedCurrentVarient)
      setVariant('')
    } else {
      errors = {
        ...errors,
        new_variant: 'Cant submit empty variant',
      }
      props.setProductErrors(errors)
      console.log(' validation error [variant] ')
    }
  }

  console.log(' variantsData :[var] ', props.product.varientsData)

  return (
    <div>
      <h4 className="font-weight-bold mb-4">Add New Attribute</h4>
      <TextField
        onChange={e => setVariant(e.target.value)}
        value={variant}
        name="attributeName"
        placeholder="Eg: color"
        label="Attribute Name"
        require={true}
        error={props.product.errors.new_variant}
      />

      <CRow>
        <CCol sm="2" md="2">
          <CButton
            onClick={() => props.setAddVariantAttribute(false)}
            block
            variant="outline"
            color="dark"
          >
            Cancel
          </CButton>
        </CCol>

        <CCol sm="2" md="2">
          <CButton onClick={() => addProductVariant_()} block color="dark">
            Add
          </CButton>
        </CCol>
      </CRow>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    product: state.product,
  }
}

export default connect(
  mapStateToProps,
  { addProductVariant, setProductErrors }
)(AddNewAttribute)
