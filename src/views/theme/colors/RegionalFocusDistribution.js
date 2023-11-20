import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'
import DistributionOfFocusedRegion from 'src/components/DistributionOfFocusedRegion'
import DistributionOfFocusedRegion2 from 'src/components/DistributionOfFocusedRegion2'

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

const RegionalFocusDistribution = () => {
  return (
    <>
      <CRow>
        <DistributionOfFocusedRegion/>
      </CRow>
      <CRow>
        <CCol style={{marginTop:'24px'}} sm={5}>
          HELLO!
        </CCol>
        <CCol style={{marginTop:'24px'}} sm={7}>
          <DistributionOfFocusedRegion2/>
        </CCol>
      </CRow>
    </>
  )
}

export default RegionalFocusDistribution
