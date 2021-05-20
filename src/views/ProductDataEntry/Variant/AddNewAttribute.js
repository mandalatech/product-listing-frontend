import React, { useState } from 'react'
import { CCol, CRow, CButton } from '@coreui/react'
import TextField from 'src/views/components/TextField'
import { connect } from 'react-redux'
import { addProductVariant } from '../../../reducers/actions/index'

const AddNewAttribute = props => {
  const [variant, setVariant] = useState('')
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

  const addProductVariant_ = () => {
    console.log('current variant [variant] ', props.product.variant)
    let varientData = props.product.varientData
    let newVarientData = {}
    if (varientData) {
      varientData.map(data => {
        return newVarientData.push({ [variant]: '' })
      })
    }
    console.log(' new varient data : ', newVarientData)
    let currentVarient = props.product.variantModel
    const varientExist = currentVarient.find(data => data === variant)
    console.log(' varisnt exists [variant] ', varientExist)
    if (varientExist) {
      console.log('variant already exist [variant]')
    } else if (variant.length !== 0) {
      // console.log(' variant added [variant] ', currentVarient.push(variant))
      console.log(' current varienttt [variant] ', currentVarient)
      currentVarient.splice(2, 0, `${variant}`)
      props.addProductVariant(currentVarient, newVarientData)
    } else {
      console.log(' validation error [variant] ')
    }
  }

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
      />

      <CRow>
        <CCol sm="2" md="2">
          <CButton block variant="outline" color="dark">
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
  { addProductVariant }
)(AddNewAttribute)
