import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CImage, CInputGroupText, CButton, CFormInput } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

import SuspiciousManager_1 from '../../../assets/images/Plots/SuspiciousManager.jpg'
import SuspiciousManager_2 from '../../../assets/images/Plots/SuspiciousManager_2.jpg'
import SuspiciousManager_3 from '../../../assets/images/Plots/SuspiciousManager_3.jpg'
import SuspiciousManager_4 from '../../../assets/images/Plots/SuspiciousManager_4.jpg'
import CIcon from '@coreui/icons-react'
import { cilFindInPage } from '@coreui/icons'

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

const MLModel = () => {
  const [tweetToVerify, setTweetToVerify] = useState("")
  const [isLoading, setIsLoading] = useState(0)
  const [result, setResult] = useState({user:[{authorized:"Results will be shown here...!"}]})

  const handleRequest = async () => {
    setIsLoading(1)
    await fetch("https://easyfood4me.pythonanywhere.com/canisii", {method:'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({tweetToVerify:tweetToVerify})}).then(res => res.json().then((finalresult)=>setResult(finalresult)))
    setIsLoading(2)
  }

  const handleDetection = () => {
    handleRequest()
  }

  return (
    <>
      <CRow>
        <CCol sm={6}>
          <h3>ML Model - Try It!</h3>
          <div>
            Try our interactive model by writing a tweet and verify it!
          </div>
          <CRow>
            <CCol style={{marginTop:'32px'}} sm={12}>
              <textarea placeholder='writie your tweet here...' value={tweetToVerify} onChange={(e)=>setTweetToVerify(e.target.value)} style={{width:'100%', height:'350px'}} type='text'></textarea>
            </CCol>
            <CCol sm={12}>
              <CButton style={{width:'100%'}} onClick={handleDetection} type='button' disabled={isLoading==1?true:false} color={isLoading==1?'secondary':'primary'}>Detect It!</CButton>
              {isLoading==1 && <h6 style={{marginTop:'8px'}}> <CIcon icon={cilFindInPage}/> We are processing your tweet...</h6>}
              {isLoading==2 && <h6 style={{marginTop:'8px'}}> <CIcon icon={cilFindInPage}/> {result.user[0].authorized}</h6>}
            </CCol>

          </CRow>
        </CCol>
        <CCol sm={6}>
          <CCard>
            <CCardHeader>Testing Tweets</CCardHeader>
            <CCardBody>
              <h6>Is this a prediction about #BRICS?</h6>
              <h6>The two presidents acknowledged the efforts of their respective teams.</h6>
              <h6>I'm so happy to share that I trained this model after much efforts.</h6>
              <h6>China is a great free country.</h6>
              <h6>China beach san francisco!</h6>
            </CCardBody>
          </CCard>
          <CCard style={{marginTop:'32px'}}>
            <CCardHeader>Performance Evaluation of the Model</CCardHeader>
            <CCardBody>
              <h6>Overall Accuracy on the Test data is <strong>96%</strong>.</h6>
              <table border="1" style={{width:'100%'}}>
                <tr>
                    <th></th>
                    <th>Precision</th>
                    <th>Recall</th>
                    <th>F1-Score</th>
                    <th>Support</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>0.95</td>
                    <td>1.00</td>
                    <td>0.97</td>
                    <td>1716</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1.00</td>
                    <td>0.85</td>
                    <td>0.92</td>
                    <td>597</td>
                </tr>
                <tr>
                    <td>Accuracy</td>
                    <td colspan="3"></td>
                    <td>0.96</td>
                </tr>
                <tr>
                    <td>Macro Avg</td>
                    <td>0.97</td>
                    <td>0.92</td>
                    <td>0.95</td>
                    <td>2313</td>
                </tr>
                <tr>
                    <td>Weighted Avg</td>
                    <td>0.96</td>
                    <td>0.96</td>
                    <td>0.96</td>
                    <td>2313</td>
                </tr>
            </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      
      
    </>
  )
}

export default MLModel
