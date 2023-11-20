import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import { CChartDoughnut } from '@coreui/react-chartjs'

import amirhossein from './../../assets/images/avatars/Amirhossein.jpg'
import morvarid from './../../assets/images/avatars/Morvarid.jpg'
import zahra from './../../assets/images/avatars/Zahra.jpg'
import sadaf from './../../assets/images/avatars/Sadaf.jpg'
import DistributionOfAccounts from 'src/components/DistributionOfAccounts'

const {tableau} = window;

const Dashboard = () => {
  
  return (
    <>
      <CRow>
        <CCol sm={12}>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCol sm={6}>
                  <h2 id="traffic" className="card-title mb-0">
                    Welcome to WhoIsWho platform!
                  </h2>
                  <div className="medium text-body-secondary">CANIS HACKATHON was hel between Nov 17 to Nov 21, 2023</div>
                </CCol>
                <CCol sm={6} className="d-none d-md-block">
                  <CButton color="primary" className="float-end" style={{marginLeft:'4px'}}>
                    Try Our ML Model!
                  </CButton>
                  <CButton color="success" className="float-end">
                    See Interactive Network Graph!
                  </CButton>
                </CCol>
              </CRow>
              <CRow>
                  <h5 style={{marginTop:'16px'}} id="traffic" className="card-title mb-0">
                    Throughout this hackathon, we analyzed several different aspects of the given dataset. Additionally, we used scraping libraries (selenuim) using Python to extract more information about accounts on different platforms, specially Twitter.
                  </h5>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm={4}>
          <CCard className="mb-4">
            <CCardHeader>Our Tech Stack</CCardHeader>
            <CCardBody>
              <CChartDoughnut
                data={{
                  labels: ['Python', 'Tableau', 'ReactJs', 'Git CI/CD', 'other'],
                  datasets: [
                    {
                      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#CCCCCC'],
                      data: [55, 25, 15, 4, 1],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm={8}>
          <CCard className="mb-4">
            <CCardHeader>Our Team</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol sm={6}>
                  <CAvatar src={amirhossein} size="xl" />
                  <h4 style={{marginTop:'2px'}}>Amirhossein Sefati</h4>
                  <h6>Full-Stack Developer | Data Scraping</h6>
                  <h6>MSc. Computer Science @ UofC</h6>
                  <h6><a href='https://www.linkedin.com/in/amirhossein-sefati/'>LinkedIn</a> | <a href='https://github.com/ahsefati'>Github</a></h6>
                </CCol>
                <CCol sm={6}>
                  <CAvatar src={morvarid} size="xl"/>
                  <h4 style={{marginTop:'2px'}}>Morvarid Lalenoor</h4>
                  <h6>ML Engineer & Data Scientist</h6>
                  <h6>MSc. Software Engineering @ UofC</h6>
                  <h6><a href='https://www.linkedin.com/in/amirhossein-sefati/'>LinkedIn</a> | <a href='https://github.com/ahsefati'>Github</a></h6>
                </CCol>
              </CRow>
              <CRow>
                <CCol style={{marginTop:'18px'}} sm={6}>
                  <CAvatar src={zahra} size="xl" />
                  <h4 style={{marginTop:'2px'}}>Zahra Safari</h4>
                  <h6>Full-Stack Developer</h6>
                  <h6>MSc. Computer Science @ UofC</h6>
                  <h6><a href='https://www.linkedin.com/in/amirhossein-sefati/'>LinkedIn</a> | <a href='https://github.com/ahsefati'>Github</a></h6>
                </CCol>
                <CCol style={{marginTop:'18px'}} sm={6}>
                  <CAvatar src={sadaf} size="xl" />
                  <h4 style={{marginTop:'2px'}}>Sadaf Erfanmanesh</h4>
                  <h6>Data Scientist</h6>
                  <h6>MSc. Computer Science @ UofC</h6>
                  <h6><a href='https://www.linkedin.com/in/amirhossein-sefati/'>LinkedIn</a> | <a href='https://github.com/ahsefati'>Github</a></h6>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <h3 style={{marginBottom:'12px'}}>Overview of the Given Dataset</h3>
      <WidgetsBrand className="mb-4" withCharts />
      <CRow>
        <CCol style={{marginBottom:'12px'}} sm={12}>
          <DistributionOfAccounts/>
        </CCol>
      </CRow>
      <CRow>
        <CCol style={{marginBottom:'12px'}} sm={4}>
          <CCard>
            <CCardHeader>General Dataset Summary</CCardHeader>
            <CCardBody>
              <CRow>
                <h4>759 Rows</h4>
                <h4>22 Columns</h4>
                <h4>7869 Filled Data</h4>
                <h4>8829 Null Data</h4>  
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol style={{marginBottom:'12px'}} sm={8}>
          <CCard>
            <CCardHeader>Accumulated Data Summary</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol sm={6}>
                  <h4>+1.2B Followers/Subscribers</h4>
                  <h4>1359 Social Media Accounts</h4>
                  <h4>46 Targeted Languages</h4>
                  <h4>152 Contributing Organizations</h4>
                </CCol>
                <CCol sm={6}>
                  <h4>171 Targeted Countries/Regions</h4>
                  <h4>216 Natural Persons Accounts</h4>
                  <h4>543 Legal (Organization) Accounts</h4>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
