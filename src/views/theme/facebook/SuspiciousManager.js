import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CImage } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

import SuspiciousManager_1 from '../../../assets/images/Plots/SuspiciousManager.jpg'
import SuspiciousManager_2 from '../../../assets/images/Plots/SuspiciousManager_2.jpg'
import SuspiciousManager_3 from '../../../assets/images/Plots/SuspiciousManager_3.jpg'
import SuspiciousManager_4 from '../../../assets/images/Plots/SuspiciousManager_4.jpg'

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

const SuspiciousManager = () => {
  return (
    <>
      <CRow>
        <CCol sm={6}>
          <h3>Suspicious Manager</h3>
          <div>
            In the Facebook page details for Chinese news pages or reports or embassies, there is a part that says who is controlling this page: how many admins and from what country they are. Some pages had multiple admins from relevant countries to the purpose of the page and a lot of the manager's locations are unavailable which can be because of the China control on the page or using VPNs.
          </div>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px'}} src={SuspiciousManager_1} width={'550px'}/>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm={6}>
          <img style={{marginTop:'24px'}} src={SuspiciousManager_2} width={'550px'}/>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px', marginTop:'24px'}} src={SuspiciousManager_3} width={'550px'}/>
        </CCol>
        <CCol sm={6}>
          <img style={{marginTop:'24px'}} src={SuspiciousManager_4} width={'550px'}/>
        </CCol>

      </CRow>
      
      
    </>
  )
}

export default SuspiciousManager
