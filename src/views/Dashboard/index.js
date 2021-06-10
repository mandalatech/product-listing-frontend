import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCardText, CCol, CRow } from '@coreui/react'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import isEmpty from 'src/validations/isEmpty'

const Dashboard = (props) => {
  useEffect(() => {
    if (!isEmpty(props.message)) {
      toast(props.message)
    }
  }, [props.message])

  const links = [
    { link: 'products', text: 'Product', icon: 'cil-puzzle' },
    { link: 'bundle', text: 'Bundle', icon: 'cil-puzzle' },
    { link: 'group', text: 'Product Group', icon: 'cil-puzzle' },
    { link: 'brand', text: 'Brand', icon: 'cil-puzzle' },
    { link: 'manufacturer', text: 'Manfacturer', icon: 'cil-chart-pie' },
    { link: 'color', text: 'Color', icon: 'cil-star' },
    { link: 'warehouse', text: 'Warehouse', icon: 'cil-calculator' },
    { link: 'settings', text: 'Settings', icon: 'cil-puzzle' },
  ]
  return (
    <CRow>
      {links.map((link) => (
        <CCol xs="12" md="6" lg="4">
          <Link to={link.link} style={{ textDecoration: 'none' }}>
            <CCard className="bg-white rounded py-5">
              <CCardBody className="d-flex justify-content-around">
                <CCardText className="text-dark h3 font-weight-bold">
                  <span className="p-3">
                    <CIcon name={link.icon} className="h1" />
                  </span>
                  {link.text}
                </CCardText>
              </CCardBody>
            </CCard>
          </Link>
        </CCol>
      ))}
    </CRow>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.user.message,
  }
}

export default connect(mapStateToProps, {})(Dashboard)
