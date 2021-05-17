import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

import addImage from 'src/assets/images/addImage.png'

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
  const { placeholder, padding, imagePreviewSize, previewOnSide } = props
  const [files, setFiles] = useState([])

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
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

  const thumbnail = files.map((file) => (
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
        <img src={file.preview} alt={file.name} height={imagePreviewSize} />
      </div>
    </div>
  ))

  // Clean up
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <section
      className={
        previewOnSide
          ? 'd-flex flex-row-reverse justify-content-end align-items-center'
          : null
      }
    >
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div
          style={{
            backgroundImage: `url(${addImage})`,
            backgroundRepeat: 'no-repeat',
            width: '94px',
            height: '94px',
          }}
        ></div>
        <div
          style={{ fontWeight: 500, marginBottom: '-1rem', marginTop: '1rem' }}
        >
          {parse(placeholder)}
        </div>
      </div>
      <aside>{thumbnail}</aside>
    </section>
  )
}

Dropzone.defaultProps = {
  placeholder: 'Image',
  padding: 5,
  imagePreviewSize: 50,
  previewOnSide: false,
}

Dropzone.propTypes = {
  placeholder: PropTypes.string,
  padding: PropTypes.number,
  imagePreviewSize: PropTypes.number,
  previewOnSide: PropTypes.bool,
}

export default Dropzone
