import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CImage } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

import fakeNamingPattern from '../../../assets/images/Plots/fakeNamingPattern.jpg'

import NetworkGraphExample_1 from '../../../assets/images/Plots/NetworkGraphExample_1.png'
import NetworkGraphExample_2 from '../../../assets/images/Plots/NetworkGraphExample_2.png'
import NetworkGraphHelper from 'src/components/NetworkGraph/NetworkGraphHelper'


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

const NetworkGraph = () => {
  return (
    <>
      <CRow>
        <CCol sm={6}>
          <h3>Network Graph</h3>
          <div>
            Using the scraped data of latest tweets. We gained ~11000 tweets with all kind of information about them: Content of it, Number of Likes, Number of Comment, and Published Date.
            <br/>
            We tried to cluster these tweets based on two facts: 1- Some of them have been published at the same time. 2- They are similar to each other based on the TF-IDF algorithm.
            <br/>
            There are some interesting notes here:  
            <li>First, we can see two big clusters based on the parent entity in the network graph. Those accounts are supported by the two most important parent entities in given dataset: Ministry of Foreign Affairs and Central Publicity Department.</li>
            <li>Second, we can see that there are some accounts that create circles, we can say that they are including one or two SEEDs and others are amplifiers. SEED profiles publish the main content and the amplifiers will spread it through the network to create engagment and increase the number of views for that content.</li>
            <li>Third, in the second image, you can see that in some cases, accounts controlled by different parent entities collaborate with each other too.</li>
          </div>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Let's try out the interactive network graph of the tweets.
          </h5>
          <h6>If we had more time, it was possible to create the same network graph using the common followers of different accounts. Additionally, we could do it for other social media platforms as well.</h6>
          <div>We should note that the results are computed and visualized using Pyvis and NetworkX library in Pyhon. These libraries helped us to create an interactive visualizitation of the connected accounts. However, it was compatible with React, our front-end technology. So, we used "IFrame" tool to point to it using another hosting provider called TiinyHost.</div>
        </CCol>
        <CCol sm={6}>
          <img style={{marginTop:'24px'}} src={NetworkGraphExample_1} width={'600px'}/>
          <img style={{marginTop:'24px'}} src={NetworkGraphExample_2} width={'600px'}/>
        </CCol>
      </CRow>
      <CRow>
        <CCol style={{marginTop:'24px', marginBottom:'24px'}}>
          <NetworkGraphHelper/>
        </CCol>
      </CRow>
      
      
    </>
  )
}

export default NetworkGraph
