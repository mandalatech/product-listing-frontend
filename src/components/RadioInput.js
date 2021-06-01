import React from 'react'

const RadioInput = ({ name, value, label }) => {
  return (
    <div>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
      />
      &nbsp;&nbsp;
      <label for={value}>{label}</label>
    </div>
  )
}

export default RadioInput
