import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CImage } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

import TopTenHashtags from '../../../assets/images/Plots/TopTenHashtags.jpg'
import NumberOfSocialMediaAccountsForEachCountry from 'src/components/NumberOfSocialMediaAccountsForEachCountry'
import MostUsedHashtagsClusteredToRealAndBot from 'src/components/MostUsedHashtagsClusteredToRealAndBot'


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

const TopHashtags = () => {
  return (
    <>
      <CRow>
        <CCol sm={6}>
          <h3>Top Hastags </h3>
          <div>We analyzed the top 10 hashtags used in the recent tweets withing the accounts given in the dataset. Note that we we only able to scrape their 50 last tweets using Selenium and Python.<br/>There are some interesting notes here:  
            <li>First, ...</li>
            <li>Second, ...</li>
          </div>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Results:
          </h5>
          <h6>As it can be seen, ...</h6>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px'}} src={TopTenHashtags} width={'650px'}/>
        </CCol>
      </CRow>
      <br/>
      <hr/>
      <br/>
      <CRow>
        <CCol sm={12}>
          <h3>Clustering of Most Used Hashtags</h3>
          <div>
            We were able to identify two clusters based on the tweets contents and the use of hashtags. Below, you can an interactive plot for the most used hashtags. They are also labelled by Bot or Human generated tweets. Let's play with the following interactive plot! 
          </div>
        </CCol>
        <CRow>
          <MostUsedHashtagsClusteredToRealAndBot/>
        </CRow>
        <CRow>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Results:
          </h5>
          <h6></h6>
        </CRow>
      </CRow>
      
    </>
  )
}

export default TopHashtags
