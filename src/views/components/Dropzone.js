import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import addImage from 'src/assets/images/addImage.png'
import deleteProductImageIcon from 'src/assets/images/deleteProductImage.png'

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
  const { placeholder, padding, imagePreviewSize, previewOnSide, displayFlex } =
    props
  const [files, setFiles] = useState([])

  const onDrop = useCallback((acceptedFiles) => {
    const uploadedFiles = acceptedFiles.map((file) => {
      return Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    })
    setFiles((prevFiles) => {
      return prevFiles.concat(uploadedFiles)
    })
  }, [])
  console.log(' saved files : ', files)
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
  }

  const thumbnail = files.map((file, index) => (
    <div key={file.name}>
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
          <img src={file.preview} alt={file.name} height={imagePreviewSize} />
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
            className={displayFlex ? 'px-5' : ''}
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
}

Dropzone.propTypes = {
  placeholder: PropTypes.string,
  padding: PropTypes.number,
  imagePreviewSize: PropTypes.number,
  previewOnSide: PropTypes.bool,
  displayFlex: PropTypes.bool,
}

export default Dropzone
