import React from 'react'
import { CSwitch } from '@coreui/react'

const Switch = ({ leftLabel, rightLabel, color, labelOn, labelOff }) => {
  return (
    <div className="d-flex align-items-center">
      <span>
        <b>{labelOn}</b>
      </span>
      &nbsp; &nbsp;
      <CSwitch
        color={color}
        checked
        value={color}
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
