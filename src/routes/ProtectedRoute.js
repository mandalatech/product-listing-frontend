import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({
  component: Component,
  isAuthenticated: authenticationStatus,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticationStatus) {
          return <Component {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      }}
    />
  )
}

export default ProtectedRoute
