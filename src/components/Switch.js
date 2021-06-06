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
}) => {
  console.log(' value [switch] ', value)

  return (
    <div className="d-flex align-items-center">
      <span>
        <b>{labelOn}</b>
      </span>
      &nbsp; &nbsp;
      <CSwitch
        onChange={onChange}
        defaultChecked={defaultValue}
        value={value}
        color={color}
        name={name}
        shape="pill"
        labelOn={labelOn.slice(0, 2)}
        labelOff={labelOff.slice(0, 2)}
        size="lg"
      />
      &nbsp; &nbsp;
      <span>
        <b>{labelOff}</b>
      </span>
    </div>
  )
}

export default Switch
