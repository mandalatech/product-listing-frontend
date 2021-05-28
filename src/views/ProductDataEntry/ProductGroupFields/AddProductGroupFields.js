import React, { useEffect } from 'react'
import { CCardBody, CCard, CRow, CCol } from '@coreui/react'
import ComboInput from 'src/views/components/ComboInput'
import TextField from 'src/views/components/TextField'
import { connect } from 'react-redux'

import { changeProductExtrasInput } from 'src/reducers/actions/index'

const AddProductGroupFields = ({
  fields,
  title,
  edit,
  extrasWithAttributes,
  ...props
}) => {
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

  useEffect(() => {
    extrasWithAttributes.forEach(({ value, attribute }) => {
      _setValuesForProductExtras(attribute.slug, value)
    })
  }, [extrasWithAttributes])

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <h4 className="outside-card-title mb-4">{title} Attributes</h4>
        <CCard className="addpro-custom-card sm-pd">
          <CCardBody>
            {edit ? (
              <CRow>
                {extrasWithAttributes.map(({ value, attribute }) => {
                  return (
                    <CCol xs="12" md="6" lg="4">
                      {attribute.datatype === 'enum' ? (
                        <ComboInput
                          label={attribute.name}
                          name={attribute.slug}
                          placeholder={`Enter ${attribute.name}`}
                          options={optionsForCheckbox(
                            attribute.enum_group.values
                          )}
                          // TODO Dont forget to clear the old values.
                          onChange={(e) => {
                            _setValuesForProductExtras(attribute.slug, e.name)
                          }}
                          selectValueByLabel={true}
                          defaultValueByLabel={value}
                        />
                      ) : (
                        <TextField
                          label={attribute.name}
                          name={attribute.slug}
                          placeholder={`Enter ${attribute.name}`}
                          onChange={(e) => {
                            _setValuesForProductExtras(
                              attribute.slug,
                              e.target.value
                            )
                          }}
                          value={value}
                        />
                      )}
                    </CCol>
                  )
                })}
              </CRow>
            ) : (
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
                        valueByLabel={props.extras[field.slug]}
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
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

AddProductGroupFields.defaultProps = {
  edit: false,
}

const mapStateToProps = (state) => {
  return {
    extrasWithAttributes: state.product.extras_with_attributes,
    extras: state.product.extras,
  }
}

export default connect(mapStateToProps, { changeProductExtrasInput })(
  AddProductGroupFields
)
