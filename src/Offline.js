import React from 'react'

export default function Offline() {
  return (
    <div
      style={{
        width: '100%',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Oopse!!</h1>
      <span
        style={{
          borderBottomStyle: 'dashed',
          borderBottomColor: 'rgba(0,0,0,0.2)',
          borderBottomWidth: '1px',
        }}
      >
        It seems like you are offline
      </span>
      <br />
      <p
        style={{
          marginTop: '15px',
          width: '40%',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        This page cannot be displayed at the moment. Try once again later when
        your internet connection improves!
      </p>
    </div>
  )
}
