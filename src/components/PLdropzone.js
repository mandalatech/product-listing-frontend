import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { connect } from 'react-redux'
import addImage from 'src/assets/images/addImage.png'
import deleteProductImageIcon from 'src/assets/images/deleteProductImage.png'
import getBase64 from '../helpers/getBase64'
import { setProductImageFiles } from '../reducers/actions/index'

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderWidth: 3,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out',
}

const activeStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}

const PLdropzone = (props) => {
  const {
    placeholder,
    padding,
    imagePreviewSize,
    previewOnSide,
    displayFlex,
    type,
    isSingle,
  } = props
  console.log(' imggg ', props.imageFiles)
  const onDrop = useCallback(async (acceptedFiles) => {
    let images = []
    for (let file of acceptedFiles) {
      await getBase64(file)
        .then((result) => {
          console.log('base64:', result)
          images.push({ image: { encoded: result, url: result }, type: type })
        })
        .catch((e) => console.log(e))
    }

    console.log(' imageFiles ondrop [imagee] ', props.imageFiles, images)
    if (images.length !== 0) {
      if (!props.update) {
        props.setImages(images)
        props.setImageFiles(images, 'add')
      } else {
        props.setImages(images)
        props.setImageFiles(images, 'variant-update')
      }
    }
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
  })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      padding: `${padding}px`,
    }),
    [isDragActive, isDragReject, isDragAccept, padding]
  )

  const deleteProductImage = (index) => {
    if (!props.update) {
      const newProductImages = props.imageFiles.filter(
        (img, el_index) => el_index !== index
      )

      props.setImages(newProductImages, 'delete')
      console.log('new image files :', newProductImages)
      props.setImageFiles(newProductImages, 'delete')
    } else {
      props.setImageFiles([], 'variant-delete')
    }
  }

  // let thumbnail = <span></span>
  // if (!props.update && props.type !== 'PRODUCT_VARIANT_IMAGE') {
  const thumbnail = props.imageFiles.map((file, index) => (
    <>
      {console.log('imggg2', file.image.encoded)}
      <div key={index}>
        <div
          style={{
            border: '1px dashed #E7E7E7',
            boxSizing: 'border-box',
            borderRadius: '5px',
            padding: '1rem',
            maxHeight: { imagePreviewSize },
            width: 'auto',
            borderWidth: 3,
            borderColor: '#eeeeee',
            borderStyle: 'dashed',
            marginRight: '1rem',
          }}
        >
          <div class="d-flex justify-content-between align-items-start">
            <img
              src={file.image.encoded}
              alt={file.type}
              height={imagePreviewSize}
            />
            <img
              src={deleteProductImageIcon}
              alt="Delete Product"
              onClick={() => deleteProductImage(index)}
            />
          </div>
        </div>
      </div>
    </>
  ))

  // Clean up
  useEffect(
    () => () => {
      props.imageFiles.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [props.imageFiles]
  )

  return (
    <section
      className={
        previewOnSide
          ? 'd-flex flex-row-reverse justify-content-end align-items-center'
          : null
      }
    >
      {isSingle && props.imageFiles.length === 1 ? null : (
        <div {...getRootProps({ style })} className={displayFlex ? 'px-5' : ''}>
          <input {...getInputProps()} />
          <div className={displayFlex ? 'd-flex justify-content-around' : ''}>
            <div
              style={{
                backgroundImage: `url(${addImage})`,
                backgroundRepeat: 'no-repeat',
                width: '94px',
                height: '94px',
              }}
              className={displayFlex ? 'px-5' : 'mx-auto'}
            ></div>
            <div
              style={{
                fontWeight: 500,
                marginBottom: '-1rem',
                marginTop: '1rem',
              }}
              className={displayFlex ? 'px-5' : ''}
            >
              {parse(placeholder)}
            </div>
          </div>
        </div>
      )}
      <aside className="d-flex" style={{ overflowX: 'auto' }}>
        {thumbnail}
      </aside>
    </section>
  )
}

PLdropzone.defaultProps = {
  placeholder: '',
  padding: 5,
  imagePreviewSize: 50,
  previewOnSide: false,
  displayFlex: false,
  isSingle: true,
}

PLdropzone.propTypes = {
  placeholder: PropTypes.string,
  padding: PropTypes.number,
  imagePreviewSize: PropTypes.number,
  previewOnSide: PropTypes.bool,
  displayFlex: PropTypes.bool,
  isSingle: PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    productImages: state.product.images,
  }
}

export default connect(mapStateToProps, { setProductImageFiles })(PLdropzone)
