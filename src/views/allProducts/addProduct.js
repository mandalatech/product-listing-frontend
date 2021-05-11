import React, { useState } from "react";
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,
  CButton,
  CCardFooter,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";

const Tabs = () => {
  const [active, setActive] = useState(1);
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.";

  return (
    <CRow>
      <CCol xs="12" md="12" className="mb-4">
        <h4 className="outside-card-title">Add Product</h4>
        <CCard>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>Simple Product</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>Configurable</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <CFormGroup className="mb-4">
                    <CLabel htmlFor="name">Product Name</CLabel>
                    <CInput
                      id="name"
                      placeholder="Product Name e.g Crop tee"
                      required
                    />
                  </CFormGroup>

                  <CRow>
                    <CCol xs="4">
                      <CFormGroup>
                        <CLabel htmlFor="group">Group</CLabel>
                        <CSelect
                          custom
                          name="group"
                          id="group"
                          placeholder="Select Group"
                        >
                          <option value="" disabled selected>
                            Select group
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </CSelect>
                      </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                      <CFormGroup>
                        <CLabel htmlFor="manufacturer">Manufacturer</CLabel>
                        <CSelect custom name="manufacturer" id="manufacturer">
                          <option value="" disabled selected>
                            Select manufacturer
                          </option>
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                          <option>2020</option>
                          <option>2021</option>
                          <option>2022</option>
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                          <option>2026</option>
                        </CSelect>
                      </CFormGroup>
                    </CCol>
                    <CCol xs="4">
                      <CFormGroup>
                        <CLabel htmlFor="brand">Brand</CLabel>
                        <CInput id="brand" placeholder="Enter brand name" />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                </CTabPane>
                <CTabPane>{`2. ${lorem}`}</CTabPane>
                <CTabPane>{`3. ${lorem}`}</CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardHeader>Id indentifiers</CCardHeader>
          <CCardBody>
            <CTabs activeTab="home">
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink data-tab="home">Home</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="profile">Profile</CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink data-tab="messages">Messages</CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane data-tab="home">{`1. ${lorem}`}</CTabPane>
                <CTabPane data-tab="profile">{`2. ${lorem}`}</CTabPane>
                <CTabPane data-tab="messages">{`3. ${lorem}`}</CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardHeader>No fade animation tabs</CCardHeader>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-calculator" />
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-basket" />
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-chart-pie" />
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent fade={false}>
                <CTabPane>{`1. ${lorem}`}</CTabPane>
                <CTabPane>{`2. ${lorem}`}</CTabPane>
                <CTabPane>{`3. ${lorem}`}</CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs="12" md="12" className="mb-4">
        <CCard>
          <CCardHeader>Controlled tabs</CCardHeader>
          <CCardBody>
            <CTabs
              activeTab={active}
              onActiveTabChange={(idx) => setActive(idx)}
            >
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-calculator" />
                    {active === 0 && " Home"}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-basket" />
                    {active === 1 && " Profile"}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    <CIcon name="cil-chart-pie" />
                    {active === 2 && " Messages"}
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>{`1. ${lorem}`}</CTabPane>
                <CTabPane>{`2. ${lorem}`}</CTabPane>
                <CTabPane>{`3. ${lorem}`}</CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Tabs;
