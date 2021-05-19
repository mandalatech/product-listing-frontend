import React, { useState, useEffect } from 'react'
import { CSwitch } from '@coreui/react'

const Switch = ({ color, labelOn, labelOff, _onChange, name }) => {
  const [switchState, setSwitchState] = useState({})

  useEffect(() => {
    _onChange(switchState)
  }, [switchState])

  const handleChange = (e) => {
    let value
    if (e.target.checked) {
      value = labelOn
    } else {
      value = labelOff
    }

    let obj = {}
    obj[name] = value

    setSwitchState(obj)
  }

  return (
    <div className="d-flex align-items-center">
      <span>
        <b>{labelOn}</b>
      </span>
      &nbsp; &nbsp;
      <CSwitch
        color={color}
        shape="pill"
        labelOn={labelOn.slice(0, 2)}
        labelOff={labelOff.slice(0, 2)}
        size="lg"
        onChange={(e) => {
          handleChange(e)
        }}
      />
      &nbsp; &nbsp;
      <span>
        <b>{labelOff}</b>
      </span>
    </div>
  )
}

export default Switch
