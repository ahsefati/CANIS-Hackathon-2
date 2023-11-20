import React from 'react'
import { CCard, CCardHeader, CCardBody, CRow, CCol } from '@coreui/react'
import { DocsLink } from 'src/components'
import DistributionOfLanguages from 'src/components/DistributionOfLanguages'
import DistributionOfLanguages2 from 'src/components/DistributionOfLanguages2'
import { CChartDoughnut } from '@coreui/react-chartjs'

const LanguageDistribution = () => {
  return (
    <>
      <CRow>
        <CCol sm={12}>
          <DistributionOfLanguages/>
        </CCol>
      </CRow>
      <CRow>
        <CCol style={{marginTop:'24px'}} sm={8}>
          Hi!
        </CCol>
        <CCol style={{marginTop:'24px'}} sm={4}>
          <CCard className="mb-4">
            <CCardHeader>Targeted Languages Peercentage</CCardHeader>
            <CCardBody>
              <CChartDoughnut
                data={{
                  labels: [
                    'English',
                    'Chinese',
                    'Spanish',
                    'French',
                    'Arabic',
                    'Japanese',
                    'German',
                    'Portuguese',
                    'Others'
                  ],
                  datasets: [
                    {
                      data: [58.18, 10.16, 5.28, 3.96, 3.82, 2.64, 1.71, 1.45, 14.2],
                      backgroundColor: [
                        '#FF6384', // English
                        '#36A2EB', // Chinese
                        '#FFCE56', // Spanish
                        '#4BC0C0', // French
                        '#F77825', // Arabic
                        '#9966FF', // Japanese
                        '#C9CBCF', // German
                        '#7BC225', // Portuguese
                        '#F7464A',  // Others
                      ],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default LanguageDistribution
