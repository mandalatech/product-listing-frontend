import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import addImage from 'src/assets/images/addImage.png'
import deleteProductImageIcon from 'src/assets/images/deleteProductImage.png'
import getBase64 from '../helpers/getBase64'

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

const Dropzone = (props) => {
  const {
    placeholder,
    padding,
    imagePreviewSize,
    previewOnSide,
    displayFlex,
    type,
    isSingle,
    clearFiles,
  } = props
  const [files, setFiles] = useState([])

  useEffect(() => {
    if (clearFiles) {
      setFiles([])
    }
  }, [clearFiles])

  const onDrop = useCallback(async (acceptedFiles) => {
    let images = []
    for (let file of acceptedFiles) {
      await getBase64(file)
        .then((result) => {
          console.log('base64:', result)
          images.push({ image: result, type: type })
        })
        .catch((e) => console.log(e))
    }

    if (images.length !== 0) {
      setFiles((prevFiles) => {
        console.log('base64:2', images)
        props.setImageFiles(prevFiles.concat(images))
        return prevFiles.concat(images)
      })
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
    const newProductImages = files.filter((img, el_index) => el_index !== index)
    setFiles((currentFiles) => newProductImages)
    props.setImageFiles(newProductImages)
  }
  console.log(' files: ', files)
  const thumbnail = files.map((file, index) => (
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
          <img src={file.image} alt={file.type} height={imagePreviewSize} />
          <img
            src={deleteProductImageIcon}
            alt="Delete Product"
            onClick={() => deleteProductImage(index)}
          />
        </div>
      </div>
    </div>
  ))
  console.log(' product list[iu] ', props.product)
  // Clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  console.log(' Files [image] ', files)

  return (
    <section
      className={
        previewOnSide
          ? 'd-flex flex-row-reverse justify-content-end align-items-center'
          : null
      }
    >
      {isSingle && files.length === 1 ? null : (
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

Dropzone.defaultProps = {
  placeholder: '',
  padding: 5,
  imagePreviewSize: 50,
  previewOnSide: false,
  displayFlex: false,
  isSingle: true,
  clearFiles: false,
}

Dropzone.propTypes = {
  placeholder: PropTypes.string,
  padding: PropTypes.number,
  imagePreviewSize: PropTypes.number,
  previewOnSide: PropTypes.bool,
  displayFlex: PropTypes.bool,
  isSingle: PropTypes.bool,
  clearFiles: PropTypes.bool,
}

export default Dropzone
