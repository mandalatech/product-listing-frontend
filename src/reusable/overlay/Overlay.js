import React from 'react'
import { useSelector } from 'react-redux'

export default function Overlay() {
  const loader = useSelector(state => state.settings.topLoader)

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'rgba(255,255,255,0.3)',
      }}
    />
  )
}
