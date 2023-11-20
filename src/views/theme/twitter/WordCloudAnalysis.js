import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CImage } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

import WorldCloudAll from '../../../assets/images/Plots/WorldCloudAll.jpg'
import WorldCloudBot from '../../../assets/images/Plots/WorldCloudBot.jpg'
import WorldCloudReal from '../../../assets/images/Plots/WorldCloudReal.jpg'

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

const WordCloudAnalysis = () => {
  return (
    <>
      <CRow>
        <CCol sm={6}>
          <h3>WordCloud Analysis</h3>
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
          <img style={{marginLeft:'24px'}} src={WorldCloudAll} width={'650px'}/>
        </CCol>
      </CRow>
      <br/>
      <hr/>
      <br/>
      <CRow>
        <CCol sm={6}>
          <h3>1- WordCloud Of Human Generated Tweets</h3>
          <div>
            We were able to identify two clusters based on the tweets contents and the use of hashtags. Below, you can an interactive plot for the most used hashtags. They are also labelled by Bot or Human generated tweets. Let's play with the following interactive plot! 
          </div>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px'}} src={WorldCloudReal} width={'650px'}/>
        </CCol>
      </CRow>
      <br/>
      <br/>
      <CRow>
        <CCol sm={6}>
          <h3>2- WordCloud Of Bot Generated Tweets</h3>
          <div>
            We were able to identify two clusters based on the tweets contents and the use of hashtags. Below, you can an interactive plot for the most used hashtags. They are also labelled by Bot or Human generated tweets. Let's play with the following interactive plot! 
          </div>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px'}} src={WorldCloudBot} width={'650px'}/>
        </CCol>
      </CRow>
      
    </>
  )
}

export default WordCloudAnalysis
