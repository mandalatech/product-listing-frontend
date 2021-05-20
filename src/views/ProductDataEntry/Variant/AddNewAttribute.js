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
    let variantt = props.product.variant
    variantt.push(variant)

    let currentVarient = props.product.variantModel

    let modifiedCurrentVarient = []
    if (props.product.varientsData.length !== 0) {
      props.product.varientsData.forEach(element => {
        modifiedCurrentVarient.push({ ...element, [variant]: '' })
      })
    }

    let unique = [...new Set(modifiedCurrentVarient.map(item => item))]
    console.log(' newly added [var] ', modifiedCurrentVarient)
    const varientExist = currentVarient.find(data => data === variant)
    console.log(' varisnt exists [variant] ', varientExist)
    if (varientExist) {
      console.log('variant already exist [variant]')
    } else if (variant.length !== 0) {
      currentVarient.splice(2, 0, `${variant}`)
      props.addProductVariant(currentVarient, variantt, unique)
    } else {
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
