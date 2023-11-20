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

import Tweeter_suspended from '../../../assets/images/Plots/Tweeter_suspended.jpg'

import { CChartBar, CChartPie } from '@coreui/react-chartjs'



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

const PlatformsDetectionPower = () => {
  return (
    <>
      <CRow>
        <CCol sm={7}>
          <h3>Platforms Fake Profile Detection Power</h3>
          <div>In our research, we found out that there are many accounts that are no longer visible in different platforms. For example, there are some Twitter handles that when visited, there was no accounts. After searching about the causes of it, we realized that each platform such as Instagram, Facebook, and Twitter uses specific algorithms to detect fake accounts. Those algorithms often use fake engagement patterns or suspicious activities and they will remove the account permanently. Here are some facts about them: 
            <li>First, we explored the number of accounts that are created by each entity owner and we see if there is any unusual activities. Result for the top influencial entity owners based on the number of accounts created by them can be seen on the right side.</li>
            <li>Second, we did the same steps but based on the number of followers gained by each of these entity owners. However, later researchs showed us that many of the gained followers are fake/bots. The result for this step is also visible on the right side.</li>
          </div>
          <br/>
          <h6>In addition to what is presented in the Facebook Analysis section, we can see other platforms suspending or completely removing accounts. For example, below is the Twitter account of Wang Yingying (given in the dataset) which has been suspended.</h6>
          <img src={Tweeter_suspended} height={'300px'}/>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Results:
          </h5>
          <h6>As it can be seen, ...</h6>
        </CCol>
        <CCol sm={5}>
          <CCard>
            <CCardHeader>
              Number of Accounts in the Dataset by Platforms
            </CCardHeader>
            <CCardBody>
              <CChartPie
                data={{
                  labels: ['Twitter', 'Facebook', 'Youtube', 'Instagram', 'TikTok', 'Threads'],
                  datasets: [
                    {
                      data: [574, 327, 160, 140, 122, 36],
                      backgroundColor: ['green',  'blue', 'red', 'orange', 'yellow', 'black' ],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
          <CCard style={{marginTop:'24px'}}>
            <CCardHeader>
              Fake-Account Detection per 100 Accounts by Platforms
            </CCardHeader>
            <CCardBody>
              <CChartBar
                  data={{
                    labels: ['Twitter', 'Facebook', 'Youtube', 'Instagram', 'TikTok', 'Threads'],
                    datasets: [
                      {
                        backgroundColor: ['green',  'blue', 'red', 'orange', 'yellow', 'black' ],
                        data: [(39/574)*100, (78/327)*100, (4/160)*100, (7/140)*100, (4/122)*100, (1/36)*100] ,
                      },
                    ],
                  }}
                  labels="months"
                />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      
    </>
  )
}

export default PlatformsDetectionPower
