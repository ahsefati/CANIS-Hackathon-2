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
          <h6>
            &#x2713; Introduction: There was a feature in the dataset as entities, parent entities and entity owners, in this section, we can see each entity owner is the subset of which parent entity and how many languages each one has . For example, the central publicity department → CMG uses a variety of languages in their accounts.  
            Also we can see that which languages are more targeted by this state controlled media. For example English and Chinese are most reached by these accounts.
          </h6>
          <h6>
            &#x2713; Relation with Parent Entities and Entity Owners: Let's see an example! The parent entity with the most diverse languages is as follows:
            Central Publicity Department. This parent entity influences a number of entity owners that produce content in different languages like English, Chinese, Arabic, etc. aiming to project its messaging globally and within the region. Also, The entity owner with the most diverse language coverage is China Media Group (CMG) which can have a high-scale influence on social media.
          </h6>
          <h6>
            &#x2713; Language Specific Analysis: Let's see why these languages are being targeted!
            <li>English: It is the most used language by the accounts provided in the dataset, suggesting a broad strategy to reach an international audience.</li>
            <li>Chinese: The second most used language by the provided accounts is Chinese, focusing on regional outreach.</li>
            <li>Spanish: The targeting of Spanish by accounts with entity owners like China Media Group (CMG) points to a strategic move to engage with the Spanish-speaking world, possibly in regions like Latin America, which are of growing interest to China.</li>
            <li>French, German, and Arabic: These languages are represented in the dataset, likely due to their importance in international diplomacy and global media. Entity owners like China Internet Information Center may use these languages to cater to specific regions—French for Africa and parts of Europe, German for the European Union, and Arabic for the Middle East.</li>
          </h6>
        </CCol>
        <CCol style={{marginTop:'24px'}} sm={4}>
          <CCard className="mb-4">
            <CCardHeader>Targeted Languages Percentage</CCardHeader>
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
