import React, { useState, useRef, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { CFormGroup, CLabel } from '@coreui/react'

const TextEditor = ({
  name,
  label,
  placeholder,
  require,
  labelTag,
  _onChange,
}) => {
  const [textValue, setTextValue] = useState('')

  const editorRef = useRef(null)

  const content = () => {
    if (editorRef.current) {
      return editorRef.current.getContent()
    }
  }

  useEffect(() => {
    let obj = {}
    obj[name] = textValue
    if (_onChange && typeof _onChange == 'function') {
      _onChange(obj)
    }
  }, [textValue])

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
        initialValue={placeholder}
        onChange={(e) => {
          setTextValue(content)
        }}
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

export default TextEditor
