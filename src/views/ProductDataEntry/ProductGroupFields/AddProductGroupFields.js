import React from 'react'
import { CCardBody, CCard, CRow, CCol } from '@coreui/react'
import ComboInput from 'src/views/components/ComboInput'
import TextField from 'src/views/components/TextField'
import { connect } from 'react-redux'

import { changeProductExtrasInput } from 'src/reducers/actions/index'

const AddProductGroupFields = ({ fields, title, ...props }) => {
  // Generate options for checkbox
  const optionsForCheckbox = (arr) => {
    return arr.map((val, index) => {
      return {
        id: index,
        name: val.value,
      }
    })
  }

  const _setValuesForProductExtras = (name, data) => {
    props.changeProductExtrasInput(name, data)
  }

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <h4 className="outside-card-title mb-4">{title} Attributes</h4>
        <CCard className="addpro-custom-card sm-pd">
          <CCardBody>
            <CRow>
              {fields.map((field) => (
                <CCol xs="12" md="6" lg="4">
                  {field.datatype === 'enum' ? (
                    <ComboInput
                      label={field.name}
                      name={field.slug}
                      placeholder={`Enter ${field.name}`}
                      options={optionsForCheckbox(field.enum_group.values)}
                      // TODO Dont forget to clear the old values.
                      onChange={(e) => {
                        _setValuesForProductExtras(field.slug, e.name)
                      }}
                    />
                  ) : (
                    <TextField
                      label={field.name}
                      name={field.slug}
                      placeholder={`Enter ${field.name}`}
                      onChange={(e) => {
                        _setValuesForProductExtras(field.slug, e.target.value)
                      }}
                    />
                  )}
                </CCol>
              ))}
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default connect(null, { changeProductExtrasInput })(
  AddProductGroupFields
)
