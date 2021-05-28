import React from 'react'
import {
  CCol,
  CRow,
  CCardBody,
  CCard,
  CFormGroup,
  CCardText,
} from '@coreui/react'

import Dropzone from '../../components/Dropzone'
import { connect } from 'react-redux'
import {
  setProductImageFiles,
  updateProductImageFile,
} from '../../../reducers/actions/index'
import PLdropzone from 'src/views/components/PLdropzone'

const Images = props => {
  const setProductImageFiles_ = files => {
    props.setProductImageFiles(files)
  }

  const updateProductImageFiles_ = (files, type) => {
    console.log(' type[imagee] ', type)
    if (type === 'add') {
      console.log('add[imagee]')
      props.updateProductImageFile(files)
    } else {
      props.setProductImageFiles(files)
    }
  }

  console.log(' iamges[imagee] ', props.product.images)
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Images</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CCardText style={{ fontWeight: 600, fontSize: '1.25rem' }}>
                Add Product Image
              </CCardText>
              <div
                style={{
                  border: '1px solid #DFE0EB',
                  boxSizing: 'border-box',
                  borderRadius: '8px',
                  borderStyle: 'solid',
                  padding: '1rem',
                  borderWidth: '1px',
                }}
              >
                <CFormGroup style={{ marginBottom: 0 }}>
                  {props.edit ? (
                    <PLdropzone
                      type="PRODUCT_IMAGES"
                      setImageFiles={(files, type) =>
                        updateProductImageFiles_(files, type)
                      }
                      placeholder="<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here"
                      padding={50}
                      imageFiles={props.imageFiles}
                      setImages={props.setImages}
                      imagePreviewSize={200}
                      previewOnSide={true}
                      isSingle={false}
                    />
                  ) : (
                    <Dropzone
                      type="PRODUCT_IMAGES"
                      setImageFiles={files => setProductImageFiles_(files)}
                      placeholder="<u>Click here</u> to select image <br/><b>OR</b> Drag and drop here"
                      padding={50}
                      currentImages={props.product.images}
                      imagePreviewSize={200}
                      previewOnSide={true}
                      isSingle={false}
                    />
                  )}
                </CFormGroup>
              </div>
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
  { setProductImageFiles, updateProductImageFile }
)(Images)
