import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CImage } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

import DistributionOfClusteredTweets from '../../../assets/images/Plots/DistributionOfClusteredTweets.jpg'
import SentimentDistribution from '../../../assets/images/Plots/SentimentDistribution.jpg'
import SentimentCategoryDistribution from '../../../assets/images/Plots/SentimentCategoryDistribution.jpg'

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

const SentimentAnalysis = () => {
  return (
    <>
      <CRow>
        <CCol sm={6}>
          <h3>Overview of Twitter Scraped Data</h3>
          <div>We used Selenium and Python using Chrome Driver to scrape last 50 tweets for each X (Twitter) account. Additionally, we vectorized the tweets at first, it gives a score to each tweet. Then, we used LDA algorithm to cluster all the tweets to Bot or Human-Generated ones. Also, we used NLTK library to pre-process all tweets as the very first step.<br/>There are some interesting notes and assumptions:  
            <li>First, ...</li>
            <li>Second, ...</li>
          </div>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Results:
          </h5>
          <h6>As it can be seen, ...</h6>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px'}} src={DistributionOfClusteredTweets} width={'550px'}/>
        </CCol>
      </CRow>
      <br/>
      <hr/>
      <br/>
      <CRow>
        <CCol sm={12}>
          <h3>Sentimental Analysis of Tweets</h3>
          <div>
            We used TextBlob library in Python with its "Sentiment Polarity" functionality to analyze how the tweets sound.
          </div>
        </CCol>
        <CRow>
          <CCol sm={7}> 
            <img style={{marginTop:'16px'}} src={SentimentDistribution} width={'700px'}/>
          </CCol>
          <CCol sm={5}> 
            <img style={{marginTop:'16px'}} src={SentimentCategoryDistribution} width={'600px'}/>
          </CCol>
        </CRow>
        <CRow>
          <CCol style={{marginTop:'24px'}}>
            <div>There are some interesting notes and assumptions:  
              <li>First, ...</li>
              <li>Second, ...</li>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Results:
          </h5>
          <h6>Here...</h6>
        </CRow>
      </CRow>
      
    </>
  )
}

export default SentimentAnalysis
