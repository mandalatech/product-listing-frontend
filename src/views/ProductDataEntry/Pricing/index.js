import { CCard, CCardBody, CCol, CFormGroup, CRow } from '@coreui/react'
import React from 'react'
import TextField from 'src/components/TextField'
import { changeProductInput } from 'src/reducers/actions/index'
import { connect } from 'react-redux'
import infoIcon from 'src/assets/icons/info.svg'

const Pricing = (props) => {
  const onProductInputChange_ = (e) => {
    console.log(' pricing change', e.target.name, ' : ', e.target.value)
    props.changeProductInput(e.target.name, e.target.value)
  }
  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <h4 className="outside-card-title mb-4">Pricing</h4>
        <CCard className="addpro-custom-card sm-pd">
          <CCardBody>
            <CFormGroup>
              <CRow>
                <CCol md="6" xs="12">
                  <TextField
                    value={props.product.cost}
                    onChange={(e) => {
                      onProductInputChange_(e)
                    }}
                    name="cost"
                    label="Cost"
                    placeholder="Cost of Product"
                    error={props.product.errors.cost}
                    type="number"
                  />
                </CCol>
                <CCol md="6" xs="12">
                  <TextField
                    value={props.product.price}
                    onChange={(e) => {
                      onProductInputChange_(e)
                    }}
                    name="price"
                    label="Price"
                    placeholder="Price of Product"
                    error={props.product.errors.price}
                    type="number"
                  />
                </CCol>
              </CRow>
            </CFormGroup>
            <div className="d-flex align-items-center">
              <img
                src={infoIcon}
                alt="Info"
                style={{ paddingRight: '0.5rem' }}
              />
              <span>If nothing provided, defaults to 0.</span>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
  }
}

export default connect(mapStateToProps, { changeProductInput })(Pricing)
