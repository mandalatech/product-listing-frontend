import React from 'react'
import { CRow, CCol } from '@coreui/react'
import TextField from '../../components/TextField'
import Switch from './../../components/Switch'
import { connect } from 'react-redux'
import { changeProductInput } from '../../../reducers/actions/index'

const Weight = (props) => {
  const labelOn = 'KG'
  const labelOff = 'LB'

  const onProductInputChange_ = (e) => {
    console.log(' description change[product]2', e.target.value)
    props.changeProductInput(e.target.name, e.target.value)
  }

  const choices = (e) => {
    if (e.target.checked) {
      return labelOn
    } else {
      return labelOff
    }
  }

  const onSwitchInputChange_ = (e) => {
    props.changeProductInput(e.target.name, choices(e))
  }

  return (
    <>
      <CRow className="mb-4">
        <CCol xs="4">
          <TextField
            value={props.product.major_weight}
            onChange={(e) => onProductInputChange_(e)}
            name="major_weight"
            label="Major Weight"
            placeholder="Major Weight"
            type="number"
            step="any"
            error={props.product.errors.major_weight}
          />
        </CCol>

        <CCol xs="4">
          <TextField
            value={props.product.minor_weight}
            onChange={(e) => onProductInputChange_(e)}
            name="minor_weight"
            label="Minor Weight"
            placeholder="Minor Weight"
            type="number"
            step="any"
            error={props.product.errors.minor_weight}
          />
        </CCol>
        <CCol xs="4" className="d-flex align-items-center">
          <Switch
            onChange={(e) => onSwitchInputChange_(e)}
            color="secondary"
            labelOn={labelOn}
            labelOff={labelOff}
            name="weight_name"
          />
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

export default connect(mapStateToProps, { changeProductInput })(Weight)
