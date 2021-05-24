import React from 'react'
import { CRow, CCol } from '@coreui/react'
import TextField from '../../components/TextField'
import Switch from '../../components/Switch'
import { connect } from 'react-redux'
import { changeProductInput } from 'src/reducers/actions/index'

const Dimensions = (props) => {
  const labelOn = 'INCH'
  const labelOff = 'CM'

  const onProductInputChange_ = (e) => {
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
        <CCol xs="3">
          <TextField
            name="height"
            label="Height"
            placeholder="Height"
            type="number"
            step="any"
            error={props.product.errors.height}
            onChange={(e) => onProductInputChange_(e)}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="width"
            label="Width"
            placeholder="Width"
            type="number"
            step="any"
            error={props.product.errors.width}
            onChange={(e) => onProductInputChange_(e)}
          />
        </CCol>

        <CCol xs="3">
          <TextField
            name="length"
            label="Length"
            placeholder="Length"
            type="number"
            step="any"
            error={props.product.errors.length}
            onChange={(e) => onProductInputChange_(e)}
          />
        </CCol>

        <CCol xs="3" className="d-flex align-items-center">
          <Switch
            color="secondary"
            labelOn={labelOn}
            labelOff={labelOff}
            name="dimension_name"
            onChange={(e) => onSwitchInputChange_(e)}
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

export default connect(mapStateToProps, { changeProductInput })(Dimensions)
