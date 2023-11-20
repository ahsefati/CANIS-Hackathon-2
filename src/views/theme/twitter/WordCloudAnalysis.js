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
import WordCloudAllDashboard from 'src/components/WordCloudAllDashboard'


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
          <h6>
            In this section, we used WordCloud library in Python (v11.0) to extract the WordCloud of the tweets. WordCloud is important becuase we can see the most repeated words and it can be helpful to understand the China's influence on social media.  
          </h6>
          <h6>
            In the right side, we can see the visualization of all the words used in the tweets. This WordCloud is generated using Tableau and it is presnted here by using its APIs (just like other visualizations by Tableau in this project). The difference is that this plot has a lot of information and that makes it longer to load. Please wait for it! 
          </h6>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Some Results...
          </h5>
          <h6>- Real People's Discussions: Real people appear to be engaged in diverse discussions about China, including specific regions, the Covid-19 pandemic, local events, and international affairs. As it can be seen, the WordCloud of the tweets that are from real people have more balanced words.</h6>
          <h6>- Bot Activities: Bots seem to focus on political figures (Xi Jinping) and international events (APEC). Despite of the real accounts, bots have a lower diversity of words. As it can be seen, there are only a limited big words compared to the real accounts.</h6>
        </CCol>
        <CCol sm={6} style={{height:'400px'}}>
          <WordCloudAllDashboard/>
        </CCol>
        <CRow>
          <CCol sm={6}>
            <img style={{marginTop:'48px'}} src={WorldCloudReal} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'48px', marginLeft:'24px'}} src={WorldCloudBot} width={'650px'}/>
          </CCol>
        </CRow>
      </CRow>
      
    </>
  )
}

export default WordCloudAnalysis
