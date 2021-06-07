import React from 'react'
import { CSwitch } from '@coreui/react'

const Switch = ({
  name,
  color,
  labelOn,
  labelOff,
  onChange,
  value,
  defaultValue,
  checked
}) => {
  console.log(' value [switch] ', value)

  return (
    <div className="d-flex align-items-center">
      <span>
        <b>{labelOff}</b>
      </span>
      &nbsp; &nbsp;
      <CSwitch
        onChange={onChange}
        defaultChecked={defaultValue}
        checked={checked}
        value={value}
        color={color}
        name={name}
        shape="pill"
        size="lg"
      />
      &nbsp; &nbsp;
      <span>
        <b>{labelOn}</b>
      </span>
    </div>
  )
}

export default Switch
