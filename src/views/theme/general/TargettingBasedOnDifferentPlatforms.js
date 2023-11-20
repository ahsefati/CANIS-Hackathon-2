import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'
import DistributionOfFocusedRegion from 'src/components/DistributionOfFocusedRegion'
import DistributionOfFocusedRegion2 from 'src/components/DistributionOfFocusedRegion2'
import FocusOfDifferentPlatformsByCountryAndLanguage from 'src/components/FocusOfDifferentPlatformsByCountryAndLanguage'
import FocusOfDifferentPlatformsByLanguageAndRegion from 'src/components/FocusOfDifferentPlatformsByLanguageAndRegion'
import NumberOfSocialMediaAccountsForEachCountry from 'src/components/NumberOfSocialMediaAccountsForEachCountry'
import FocusOfDifferentPlatformsByLanguageAverageFollowers from 'src/components/FocusOfDifferentPlatformsByLanguageAndRegion'
import AverageNumberOfSocialMediaFollowersForEachCountry from 'src/components/AverageNumberOfSocialMediaFollowersForEachCountry'
import AverageNumberOfSocialMediaFollowersForEachLanguage from 'src/components/AverageNumberOfSocialMediaFollowersForEachLanguage'
import NumberOfSocialMediaFollowersForEachCountry from 'src/components/NumberOfSocialMediaFollowersForEachCountry'
import NumberOfSocialMediaAccountsForEachLanguage from 'src/components/NumberOfSocialMediaAccountsForEachLanguage'
import NumberOfSocialMediaFollowersForEachLanguage from 'src/components/NumberOfSocialMediaFollowersForEachLanguage'
import AverageNumberOfSocialMediaFollowersForEachEntity from 'src/components/AverageNumberOfSocialMediaFollowersForEachEntity'
import NumberOfSocialMediaAccountsForEachEntity from 'src/components/NumberOfSocialMediaAccountsForEachEntity'
import NumberOfSocialMediaFollowersForEachEntity from 'src/components/NumberOfSocialMediaFollowersForEachEntity'

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

const TargettingBasedOnDifferentPlatforms = () => {
  const [state, setState] = useState(0)
  const [isAverage, setIsAverage] = useState(1)

  return (
    <>
      <CRow>
        <h6>
          &#x2713; Introduction: This section demonstrates social media follower distribution across various platforms including Facebook, Instagram, TikTok, Twitter, YouTube, and Threads, segmented by entity, country, and language. 
        </h6>
        <h6>
          &#x2713; Analysis by Entity: Parent entities such as Chongqing Municipal show varied platform strengths like Facebook and TikTok. (Specially for the average case)
        </h6>
        <h6>
          &#x2713; Analysis by Language: English and Chinese languages demonstrate significant average followers on most platforms, reflecting their global reach.
        </h6>
        <h6>
          &#x2713; Analysis by Country: Countries exhibit distinct preferences, with China having high average followers on Facebook, and Canada showing a more balanced distribution across platforms showing that China's social media has a significant number of Canadian (or acting as Canadian!) followers .
        </h6>
      </CRow>
      <hr/>
      <CRow>
        <CCol sm={6}>
          <CButton color={state==0?"success":"primary"} className="float-end" onClick={()=>setState(0)} style={{marginLeft:'16px'}}>
            Based on Country
          </CButton>
          <CButton style={{marginLeft:'16px'}} color={state==1?"success":"primary"} className="float-end" onClick={()=>setState(1)}>
            Based on Language
          </CButton>
          <CButton style={{marginLeft:'16px'}} color={state==2?"success":"primary"} className="float-end" onClick={()=>setState(2)}>
            Based on Entity
          </CButton>
        </CCol>
        <CCol sm={6}></CCol>
      </CRow>
      <CRow>
        {/* BASED ON COUNTRY */}
        {state==0&&
          <>
            <CRow>
              <CRow>
                <CCard style={{marginTop:'24px'}}>
                  <CCardHeader>
                    <CButton color={isAverage==1?"warning":"secondary"} className="float-end" onClick={()=>setIsAverage(1)} style={{marginLeft:'16px'}}>
                      Average
                    </CButton>
                    <CButton color={isAverage==0?"warning":"secondary"} className="float-end" onClick={()=>setIsAverage(0)} style={{marginLeft:'16px'}}>
                      Total
                    </CButton>
                  </CCardHeader>
                  <CCardBody>
                    {isAverage==1&&
                      <CRow>
                        <h6>
                          &#x2713; Here, we see the average followers by targeted countries. We can see that China, Canada, and the UK have the highest average of followers on these platforms.
                        </h6>
                        <CCol>
                          <AverageNumberOfSocialMediaFollowersForEachCountry/>
                        </CCol>
                      </CRow>
                    }
                    {isAverage==0&&
                      <CRow>
                        <h6>
                          &#x2713; Looking at the total number of accounts for each country shows that China, the UK, and the USA are among the most repeated ones. Which is similar to the previous part.
                        </h6>
                        <h6>
                          &#x2713; Also, in the second visual, we have countries with Chinese and English languages among the top 5 targeted countries. So the previous visualizations make more sense now.
                        </h6>
                        <CCol sm={12}>
                          <NumberOfSocialMediaAccountsForEachCountry/>
                        </CCol>
                        <CCol style={{marginTop:'24px'}} sm={12}>
                          <NumberOfSocialMediaFollowersForEachCountry/>
                        </CCol>
                      </CRow>
                    }
                  </CCardBody>
                </CCard>
              </CRow>
            </CRow>
          </>
        }

        {/* BASED ON LANG */}
        {state==1&& 
          <>
            <CRow>
              <CRow>
                <CCard style={{marginTop:'24px'}}>
                  <CCardHeader>
                    <CButton color={isAverage==1?"warning":"secondary"} className="float-end" onClick={()=>setIsAverage(1)} style={{marginLeft:'16px'}}>
                      Average
                    </CButton>
                    <CButton color={isAverage==0?"warning":"secondary"} className="float-end" onClick={()=>setIsAverage(0)} style={{marginLeft:'16px'}}>
                      Total
                    </CButton>
                  </CCardHeader>
                  <CCardBody>
                    {isAverage==1&&
                      <CRow>
                        <h6>
                          &#x2713; When we change our metrics from total to average in the number of followers. Some of the orders among languages change. Here we have English at the fourth place. Showing that its followers are not balanced and the average is less than a language like Hindi.
                        </h6>
                        <CCol>
                          <AverageNumberOfSocialMediaFollowersForEachLanguage/>
                        </CCol>
                      </CRow>
                    }
                    {isAverage==0&&
                      <CRow>
                        <h6>
                          &#x2713; Here, we can see what are the number of social media accounts in each language and how much each country is engaged in that number.
                        </h6>
                        <h6>
                          &#x2713; Also, in the second visual, We can see that English, Chinese, and French are the top three in both plots.
                        </h6>
                        <CCol>
                          <NumberOfSocialMediaAccountsForEachLanguage/>
                        </CCol>
                        <CCol style={{marginTop:'24px'}} sm={12}>
                          <NumberOfSocialMediaFollowersForEachLanguage/>
                        </CCol>
                      </CRow>
                    }
                  </CCardBody>
                </CCard>
              </CRow>
            </CRow>
          </>
        }

        {/* BASED ON Entity */}
        {state==2&& 
          <>
            <CRow>
              <CRow>
                <CCard style={{marginTop:'24px'}}>
                  <CCardHeader>
                    <CButton color={isAverage==1?"warning":"secondary"} className="float-end" onClick={()=>setIsAverage(1)} style={{marginLeft:'16px'}}>
                      Average
                    </CButton>
                    <CButton color={isAverage==0?"warning":"secondary"} className="float-end" onClick={()=>setIsAverage(0)} style={{marginLeft:'16px'}}>
                      Total
                    </CButton>
                  </CCardHeader>
                  <CCardBody>
                    {isAverage==1&&
                      <CRow>
                        <CCol>
                          <AverageNumberOfSocialMediaFollowersForEachEntity/>
                        </CCol>
                      </CRow>
                    }
                    {isAverage==0&&
                      <CRow>
                        <h6>
                          &#x2713; Here, we can see what are the number of social media accounts in each language and how much each country is engaged in that number.
                        </h6>
                        <CCol>
                          <NumberOfSocialMediaAccountsForEachEntity/>
                        </CCol>
                        <CCol style={{marginTop:'24px'}} sm={12}>
                          <NumberOfSocialMediaFollowersForEachEntity/>
                        </CCol>
                      </CRow>
                    }
                  </CCardBody>
                </CCard>
              </CRow>
            </CRow>

          </>
        }
        
        <hr/>

      </CRow>
      
    </>
  )
}

export default TargettingBasedOnDifferentPlatforms
