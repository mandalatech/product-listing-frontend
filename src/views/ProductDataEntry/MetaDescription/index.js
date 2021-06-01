import React from 'react'
import { CCol, CRow, CCardBody, CCard, CFormGroup } from '@coreui/react'
import { connect } from 'react-redux'
import TextArea from '../../../components/TextArea'
import TextField from '../../../components/TextField'
import { changeProductInput } from '../../../reducers/actions/index'
import infoIcon from 'src/assets/icons/info.svg'

const MetaDescription = (props) => {
  const onProductInputChange_ = (e) => {
    console.log(
      ' meta description change[meta]',
      e.target.name,
      ' : ',
      e.target.value
    )
    props.changeProductInput(e.target.name, e.target.value)
  }
  console.log(' product state [meta] ', props.product)
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">
            Meta Description (Optional)
          </h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CFormGroup className="mb-4">
                <TextField
                  value={props.product.mtitle}
                  onChange={(e) => {
                    onProductInputChange_(e)
                  }}
                  name="mtitle"
                  label="Title"
                  placeholder="Meta title of product"
                  error={props.product.errors.mtitle}
                />
                <TextArea
                  onChange={(e) => {
                    onProductInputChange_(e)
                  }}
                  value={props.product.mdescription}
                  name="mdescription"
                  label="Description"
                  placeholder="Short meta description about product"
                  error={props.product.errors.mdescription}
                />
                <TextField
                  onChange={(e) => {
                    onProductInputChange_(e)
                  }}
                  value={props.product.mkeyword}
                  name="mkeyword"
                  label="Keywords"
                  placeholder="Keyword e.g. furniture, wood, chair"
                  error={props.product.errors.mkeyword}
                />

                <div className="d-flex align-items-center">
                  <img
                    src={infoIcon}
                    alt="Info"
                    style={{ paddingRight: '0.5rem' }}
                  />
                  <span>Add multiple keyword seperated by “,” comma</span>
                </div>
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
  }
}

export default connect(mapStateToProps, { changeProductInput })(MetaDescription)
