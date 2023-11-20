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
          <div>
            We researched most of the suspicious accounts to see what are their activities.
          </div>
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
