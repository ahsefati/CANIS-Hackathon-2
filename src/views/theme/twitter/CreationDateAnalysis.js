import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CImage } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

import Creation_China_Corona from '../../../assets/images/Plots/Creation_China_Corona.jpg'
import SentimentDistribution from '../../../assets/images/Plots/SentimentDistribution.jpg'
import SentimentCategoryDistribution from '../../../assets/images/Plots/SentimentCategoryDistribution.jpg'

import MostUsedHashtagsClusteredToRealAndBot from 'src/components/MostUsedHashtagsClusteredToRealAndBot'
import CreationDateOfTwitterAccounts from 'src/components/CreationDateOfTwitterAccounts'
import CreationDateOfTwitterAccounts2 from 'src/components/CreationDateOfTwitterAccounts2'


const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-body-secondary">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-body-secondary">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const CreationDateAnalysis = () => {
  return (
    <>
      <CRow>
        <CCol sm={6}>
          <h3>Account Creation Date Analysis</h3>
          <h6>
            With our Twitter Scraper created using Selenium, we retrieved additional details for each Twitter account provided in the dataset. In this section, we focused on analyzing their join dates to uncover any interesting findings.
          </h6>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Result:
          </h5>
          <h6>
            - COVID-19 Pandemic: As you can see in the following graph, a significant number of accounts were created between September and April 2020 which corresponds to the early stages of the COVID-19 pandemic. Government of China may use social media to manage global perceptions, particularly during the pandemic. The accounts could be part of an effort to shape narratives or present a particular viewpoint. Also, government may create accounts for monitoring and surveillance purposes, both domestically and internationally (since accounts are in different languages). We can also relate high account creations until November 2021 to next stages of COVID-19 pandemic.
          </h6>
          <h6>
            - Increasing Presence and Diversity: From the second visualizitation, we can see that over the time, the number of Twitter accounts created and controlled by China have been Increasing substantially. Also, after 2019, the language diversity increases each year to support and influence on individuals in a higher scale.
          </h6>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px'}} src={Creation_China_Corona} width={'650px'}/>
        </CCol>
      </CRow>
      <br/><br/>
      <CRow>
        <CreationDateOfTwitterAccounts/>
      </CRow>
      <br/><br/>
      <CRow>
        <CreationDateOfTwitterAccounts2/>
      </CRow>
      
      
    </>
  )
}

export default CreationDateAnalysis
