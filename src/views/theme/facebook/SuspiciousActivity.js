import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CImage } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

import SuspiciousActivity_1 from '../../../assets/images/Plots/SuspiciousActivity_1.jpg'
import SuspiciousActivity_2 from '../../../assets/images/Plots/SuspiciousActivity_2.jpg'
import SuspiciousActivity_3 from '../../../assets/images/Plots/SuspiciousActivity_3.jpg'
import SuspiciousActivity_4 from '../../../assets/images/Plots/SuspiciousActivity_4.jpg'
import SuspiciousActivity_5 from '../../../assets/images/Plots/SuspiciousActivity_5.jpg'

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

const SuspiciousActivity = () => {
  return (
    <>
      <CRow>
        <CCol sm={6}>
          <h3>Suspicious Activity</h3>
          <h6>
            We researched most of the suspicious accounts to see what are their activities.
          </h6>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Some insights...
          </h5>
          <h6>- First suspicious activity that we saw many times was the people claiming to be experts in trading! You can see some of the examples on the right side. A lot of these accounts used a very similar sentence: "I begin with $X and now I have $Y in just a week!". These accounts also had lots of followers in the range of millions while they have not attracted a high number of engagements (likes/comment)!</h6>
          <h6>- Second thing was about the profile picture that some of these accounts had. They are mostly GAN generated as we can see the same styles in the face of these pictures.</h6>
          <h6>- Lastly some of the accounts had posts, comments, or biographies completely unrelated to their name/presence. For example, in the last picture, you can see an account claiming to be "The Embassy of China in Ukraine" while posting unrelated media!</h6>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px'}} src={SuspiciousActivity_1} width={'550px'}/>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm={6}>
          <img style={{marginTop:'24px'}} src={SuspiciousActivity_2} width={'550px'}/>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px', marginTop:'24px'}} src={SuspiciousActivity_5} width={'550px'}/>
        </CCol>
        <CCol sm={6}>
          <img style={{marginTop:'24px'}} src={SuspiciousActivity_3} width={'550px'}/>
        </CCol>
        <CCol sm={6}>
          <img style={{marginTop:'24px'}} src={SuspiciousActivity_4} width={'550px'}/>
        </CCol>

      </CRow>
      
      
    </>
  )
}

export default SuspiciousActivity
