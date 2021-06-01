import React, { useState, useEffect } from 'react'
import { CCardBody, CCard, CRow, CCol } from '@coreui/react'
import ComboInput from 'src/components/ComboInput'
import TextField from 'src/components/TextField'
import { connect } from 'react-redux'

import { changeProductExtrasInput } from 'src/reducers/actions/index'
import isEmpty from 'src/validations/isEmpty'
import HorizontalRule from 'src/components/HorizontalRule'

const AddProductGroupFields = ({
  fields,
  title,
  edit,
  extrasWithAttributes,
  productGroups,
  currentProductGroupID,
  ...props
}) => {
  const [newlyAddedAttributes, setNewlyAddedAttributes] = useState([])

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
    // Initial populating the fields from store to UI.
    extrasWithAttributes.forEach(({ value, attribute }) => {
      _setValuesForProductExtras(attribute.slug, value)
    })
  }, [extrasWithAttributes])

  useEffect(() => {
    const productGroup = productGroups.find(
      (pg) => pg.id === currentProductGroupID
    )
    if (productGroup) {
      // Get lists of attribute IDs that are already populated.
      const currentlyPopulatedFieldIDs = extrasWithAttributes.map(
        (extra) => extra.attribute.id
      )
      // Filter from the whole group of attributes that are not populated.
      const unPopulatedAttributes = productGroup.fields.filter((field) => {
        if (!currentlyPopulatedFieldIDs.includes(field.id)) {
          return true
        }
        return false
      })
      setNewlyAddedAttributes(unPopulatedAttributes)
    }
  }, [extrasWithAttributes, productGroups])

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <h4 className="outside-card-title mb-4">{title} Attributes</h4>
        <CCard className="addpro-custom-card sm-pd">
          <CCardBody>
            {edit ? (
              <div>
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
                            valueByLabel={props.extras[attribute.slug]}
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
                            value={props.extras[attribute.slug]}
                          />
                        )}
                      </CCol>
                    )
                  })}
                </CRow>

                {/* Populate the newly added fields */}
                {!isEmpty(newlyAddedAttributes) ? (
                  <div>
                    {/* Hidden because display is not better. */}
                    {/* <HorizontalRule />
                    <h5 className="font-weight-bold my-4">
                      Unpopulated Attributes
                    </h5> */}
                    <CRow>
                      {newlyAddedAttributes.map((field) => (
                        <CCol xs="12" md="6" lg="4">
                          {field.datatype === 'enum' ? (
                            <ComboInput
                              label={field.name}
                              name={field.slug}
                              placeholder={`Enter ${field.name}`}
                              options={optionsForCheckbox(
                                field.enum_group.values
                              )}
                              // TODO Dont forget to clear the old values.
                              onChange={(e) => {
                                _setValuesForProductExtras(field.slug, e.name)
                              }}
                              selectValueByLabel={true}
                              valueByLabel={props.extras[field.slug]}
                            />
                          ) : (
                            <TextField
                              label={field.name}
                              name={field.slug}
                              placeholder={`Enter ${field.name}`}
                              onChange={(e) => {
                                _setValuesForProductExtras(
                                  field.slug,
                                  e.target.value
                                )
                              }}
                              value={props.extras[field.slug]}
                            />
                          )}
                        </CCol>
                      ))}
                    </CRow>
                  </div>
                ) : null}
              </div>
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
                        selectValueByLabel={true}
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
                        value={props.extras[field.slug]}
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
    extrasWithAttributes: state.product.extras_with_attributes || [],
    extras: state.product.extras,
    productGroups: state.root.productGroups,
    currentProductGroupID: state.product.group,
  }
}

export default connect(mapStateToProps, {
  changeProductExtrasInput,
})(AddProductGroupFields)
