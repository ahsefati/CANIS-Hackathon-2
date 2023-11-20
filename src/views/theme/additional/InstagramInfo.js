import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CImage } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'
import DistributionOfFocusedRegion from 'src/components/DistributionOfFocusedRegion'
import DistributionOfFocusedRegion2 from 'src/components/DistributionOfFocusedRegion2'
import FocusOfDifferentPlatformsByCountryAndLanguage from 'src/components/FocusOfDifferentPlatformsByCountryAndLanguage'
import FocusOfDifferentPlatformsByLanguageAndRegion from 'src/components/FocusOfDifferentPlatformsByLanguageAndRegion'

import Insta_ChinaState1 from '../../../assets/images/Plots/Insta_ChinaState1.jpg'
import Insta_ChinaState2 from '../../../assets/images/Plots/Insta_ChinaState2.jpg'
import Insta_ChinaState3 from '../../../assets/images/Plots/Insta_ChinaState3.jpg'
import Insta_ChinaState4 from '../../../assets/images/Plots/Insta_ChinaState4.jpg'

import Insta_noPost from '../../../assets/images/Plots/Insta_noPost.jpg'
import Insta_noPost2 from '../../../assets/images/Plots/Insta_noPost2.jpg'
import Insta_noPost3 from '../../../assets/images/Plots/Insta_noPost3.jpg'
import Insta_noPost4 from '../../../assets/images/Plots/Insta_noPost4.jpg'

import Insta_notFound from '../../../assets/images/Plots/Insta_notFound.jpg'
import Insta_LowEngagement from '../../../assets/images/Plots/Insta_LowEngagement.jpg'
import Insta_HighEngagement from '../../../assets/images/Plots/Insta_HighEngagement.jpg'
import { CChartPie } from '@coreui/react-chartjs'



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

const InstagramInfo = () => {
  return (
    <>
      <CRow>
        <CCol sm={7}>
          <h3>General Information on Instagram Profiles</h3>
          <div>Due to the time limits, we were not able to systematically analyze Instagram profiles. However, we manually visited all the 139 pages. Here are some facts about them: 
            <li>First, we explored the number of accounts that are created by each entity owner and we see if there is any unusual activities. Result for the top influencial entity owners based on the number of accounts created by them can be seen on the right side.</li>
            <li>Second, we did the same steps but based on the number of followers gained by each of these entity owners. However, later researchs showed us that many of the gained followers are fake/bots. The result for this step is also visible on the right side.</li>
          </div>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Results:
          </h5>
          <h6>As it can be seen, ...</h6>
        </CCol>
        <CCol sm={5}>
          <CChartPie
            data={{
              labels: ['Normal', 'China State-Controlled', 'Deleted', 'No Posts', 'No Likes',],
              datasets: [
                {
                  data: [90, 31, 7, 6, 5],
                  backgroundColor: ['green',  'orange', 'red', 'yellow', 'blue' ],
                },
              ],
            }}
          />
        </CCol>
        <CRow>
          Below are some images that prove above mentioned facts.
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={Insta_ChinaState1} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={Insta_ChinaState2} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={Insta_ChinaState3} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={Insta_ChinaState4} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={Insta_noPost} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={Insta_noPost2} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={Insta_noPost3} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={Insta_noPost4} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={Insta_notFound} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={Insta_HighEngagement} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={Insta_LowEngagement} width={'650px'}/>
          </CCol>
        </CRow>
      </CRow>
      
    </>
  )
}

export default InstagramInfo
