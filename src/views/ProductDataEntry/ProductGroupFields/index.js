import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import isEmpty from 'src/validations/isEmpty'
import AddProductGroupFields from './AddProductGroupFields'

const ProductGroupFields = (props) => {
  const { productGroup } = props
  const [fields, setFields] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    // If fields are defined for the product group.
    if (productGroup && productGroup.fields && productGroup.fields.length > 0) {
      console.log('Fetching Fields : ', productGroup)
      setFields(productGroup.fields)
      setTitle(productGroup.name)
    } else {
      setFields([])
      setTitle('')
    }
  }, [productGroup])

  return (
    <>
      {!isEmpty(fields) ? (
        <AddProductGroupFields fields={fields} title={title} />
      ) : null}
    </>
  )
}

const mapStateToProps = (state) => {
  const productGroupID = state.product.group
  let productGroup = null
  if (!isEmpty(productGroupID)) {
    productGroup = state.root.productGroups.filter(
      (group) => group.id === productGroupID
    )[0]
  }
  return {
    productGroup: productGroup,
  }
}

export default connect(mapStateToProps, null)(ProductGroupFields)
