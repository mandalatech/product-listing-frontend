import React from 'react'
import { CCol, CRow, CCardBody, CCard, CFormGroup } from '@coreui/react'
import { connect } from 'react-redux'
import TextArea from '../../../components/TextArea'
import { changeProductInput } from '../../../reducers/actions/index'

const ShortDescription = props => {
  const onProductInputChange_ = e => {
    console.log(' description change[product]2', e.target.value)
    props.changeProductInput(e.target.name, e.target.value)
  }
  console.log('description change[product]', props.product)
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Short Description</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CFormGroup className="mb-4">
                <TextArea
                  onChange={e => onProductInputChange_(e)}
                  value={props.product.short_description}
                  name="short_description"
                  label="Short Description"
                  placeholder="Short description about Product"
                  error={props.product.errors.short_description}
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
)(ShortDescription)
