import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserLogs } from 'src/api/userRequests'
import isEmpty from 'src/validations/isEmpty'
import clockIcon from 'src/assets/icons/clock.svg'
import createIcon from 'src/assets/icons/create.svg'
import editIcon from 'src/assets/icons/edit.svg'
import trashIcon from 'src/assets/icons/trash.svg'

const Logs = (props) => {
  const [userLogsResponse, setUserLogsResponse] = useState({})
  const [userLogs, setUserLogs] = useState([])

  const getActionIcon = (action_flag) => {
    switch (action_flag) {
      case 1:
        return createIcon
      case 2:
        return editIcon
      case 3:
        return trashIcon
      default:
        return null
    }
  }

  useEffect(() => {
    if (isEmpty(props.token)) {
      return
    }
    const signal = new AbortController().signal
    getUserLogs(signal, props.token).then(({ json, response }) => {
      if (response.ok) {
        setUserLogsResponse({
          count: json.count,
          next: json.next,
          previous: json.previous,
        })
        setUserLogs(json.results)
      }
    })
  }, [])

  return (
    <div style={{ overflowY: 'scroll' , overflowX:'hidden'}}>
      <CRow>
        <CCol xs="12" md="12" className="mb-4">
          <h4 className="outside-card-title mb-4">Logs</h4>
          <CCard className="addpro-custom-card sm-pd">
            <CCardBody>
              <CRow>
                {userLogs.map((log) => {
                  return (
                    <CCol xs="12" md="4" className="mb-3">
                      <CCard
                        key={log.id}
                        className="shadow-sm m-2 p-3 bg-light"
                      >
                        <p className="mb-1 font-weight-bold d-flex align-items-center">
                          <img
                            src={getActionIcon(log.action_flag)}
                            alt="Action"
                            height="17"
                          />
                          <span className="pl-2">{log.str_repr}</span>
                        </p>
                        <p className="m-0 d-flex align-items-center">
                          <img src={clockIcon} alt="Time" height="11" />
                          <span className="pl-2">{log.humanized_time}</span>
                        </p>
                      </CCard>
                    </CCol>
                  )
                })}
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  }
}

export default connect(mapStateToProps, null)(Logs)
