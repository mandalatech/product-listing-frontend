import React from 'react'
import { CRow, CCol } from '@coreui/react'
import TextField from '../../components/TextField'
import Switch from './../../components/Switch'
import { connect } from 'react-redux'
import { changeProductInput } from '../../../reducers/actions/index'

const Weight = props => {
  const onProductInputChange_ = e => {
    console.log(' description change[product]2', e.target.value)
    props.changeProductInput(e.target.name, e.target.value)
  }
  console.log('description change[product]', props.product)

  return (
    <>
      <CRow className="mb-4">
        <CCol xs="4">
          <TextField
            value={props.product.major_weight}
            onChange={e => onProductInputChange_(e)}
            name="major_weight"
            label="Major Weight"
            placeholder="Major Weight"
            type="number"
            step="any"
          />
        </CCol>

        <CCol xs="4">
          <TextField
            value={props.product.minor_weight}
            onChange={e => onProductInputChange_(e)}
            name="minorWeight"
            label="Minor Weight"
            placeholder="Minor Weight"
            type="number"
            step="any"
          />
        </CCol>
        <CCol xs="4" className="d-flex align-items-center">
          <Switch
            onChange={(e, v) => {
              console.log(
                'description change[product]switch',
                e.target.value,
                ' : ',
                v
              )
            }}
            color="secondary"
            labelOn="KG"
            labelOff="LB"
          />
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
)(Weight)
