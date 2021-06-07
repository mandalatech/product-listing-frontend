import React from 'react'
import { CRow, CCol } from '@coreui/react'
import TextField from '../../../components/TextField'
import Switch from '../../../components/Switch'
import { connect } from 'react-redux'
import { changeProductInput } from 'src/reducers/actions/index'

const Dimensions = props => {
  const labelOn = 'CM'
  const labelOff = 'INCH'

  const onProductInputChange_ = e => {
    props.changeProductInput(e.target.name, e.target.value)
  }

  const choices = e => {
    if (e.target.checked) {
      return labelOn
    } else {
      return labelOff
    }
  }

  const onSwitchInputChange_ = e => {
    console.log(' e.target ', e.target)
    props.changeProductInput(e.target.name, choices(e))
  }

  return (
    <>
      <CRow className="mb-4">
        <CCol xs="3">
          <TextField
            name="height"
            label="Height"
            placeholder="Height"
            type="number"
            step="any"
            value={props.product.height}
            error={props.product.errors.height}
            onChange={e => onProductInputChange_(e)}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="width"
            label="Width"
            placeholder="Width"
            type="number"
            step="any"
            value={props.product.width}
            error={props.product.errors.width}
            onChange={e => onProductInputChange_(e)}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="length"
            label="Length"
            placeholder="Length"
            type="number"
            step="any"
            value={props.product.length}
            error={props.product.errors.length}
            onChange={e => onProductInputChange_(e)}
          />
        </CCol>

        <CCol xs="3" className="d-flex align-items-center">
          <Switch
            color="secondary"
            labelOn={labelOn}
            labelOff={labelOff}
            value={props.product.dimension_name === labelOn ? 1 : 0}
            defaultValue={props.product.dimension_name === labelOn ? 1 : 0}
            checked={props.product.dimension_name === labelOn}
            name="dimension_name"
            onChange={e => onSwitchInputChange_(e)}
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
)(Dimensions)
