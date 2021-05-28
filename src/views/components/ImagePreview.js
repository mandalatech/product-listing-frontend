import deleteProductImageIcon from 'src/assets/images/deleteProductImage.png'

const ImagePreview = ({ image, alt, imagePreviewSize, showPreview_ }) => {
  return (
    <div>
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
          <img src={image} alt={alt} height={imagePreviewSize} />
          <img
            src={deleteProductImageIcon}
            alt="Delete Product"
            onClick={() => {
              showPreview_(false)
            }}
          />
        </div>
      </div>
    </div>
  )
}

ImagePreview.defaultProps = {
  imagePreviewSize: 100,
  alt: '',
}

export default ImagePreview
