import React from 'react'

const IsEmpty = props => {
  return (
    <>
      <h3
        className="display-5"
        style={{ fontSize: '1.4em', textAlign: 'center', marginTop: '10vh' }}
      >
        {props.children}
      </h3>
    </>
  )
}

export default IsEmpty
