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
          <h3>Creation Date Analysis</h3>
          <div>Using the Twitter Scraper we implemented using Selenium, we were able to extract more information on each Twitter account given in the dataset. We used the joined date of them and analyze it to see if anything interesting is waiting for us! <br/>There are some interesting notes and assumptions:  
            <li>First, Corona Virus and China....</li>
            <li>Second, ...</li>
          </div>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Results:
          </h5>
          <h6>As it can be seen, ...</h6>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px'}} src={Creation_China_Corona} width={'550px'}/>
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
