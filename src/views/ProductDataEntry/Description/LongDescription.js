import React from 'react'
import { CCol, CRow, CCardBody, CCard, CFormGroup } from '@coreui/react'
import { connect } from 'react-redux'
import { changeProductInput } from '../../../reducers/actions/index'
import TextEditor from '../../components/TextEditor'

const LongDescription = props => {
  console.log('products from store[product]', props.product)

  const onProductInputChange_ = e => {
    console.log(' description change[product]', e)
    props.changeProductInput('description', e)
  }

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Long Description</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CFormGroup className="mb-4">
                <TextEditor
                  onChange={e => {
                    onProductInputChange_(e)
                  }}
                  value={props.product.description}
                  name="description"
                  label="Long Description"
                  placeholder="Detail description about Product"
                />
              </CFormGroup>
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
  { changeProductInput }
)(LongDescription)
