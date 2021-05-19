import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { CFormGroup, CLabel } from '@coreui/react'
import { connect } from 'react-redux'
import { changeProductInput } from '../../reducers/actions/index'

const TextEditor = ({
  name,
  label,
  placeholder,
  require,
  labelTag,
  onChange,
  value,
}) => {
  const editorRef = useRef(null)

  const content = () => {
    if (editorRef.current) {
      return editorRef.current.getContent()
    }
  }

  return (
    <CFormGroup className="mb-4">
      <CLabel htmlFor={name}>
        {label}{' '}
        {labelTag ? (
          <small>
            <code>{labelTag}</code>
          </small>
        ) : null}
      </CLabel>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        // initialValue={placeholder}
        onEditorChange={onChange}
        value={value}
        // onKeyDown={e => onProductInputChange_(e)}
        // onChange={() => {
        //   onProductInputChange_()
        // }}
        value={value}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family: "Mulish",Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </CFormGroup>
  )
}

TextEditor.defaultProps = {
  name: 'Name',
  label: 'Label',
  placeholder: 'Placeholder here',
  require: false,
  labelTag: false,
}

const mapStateToProps = state => {
  return {
    product: state.product,
  }
}

export default connect(
  mapStateToProps,
  {}
)(TextEditor)
