import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CImage } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

import fakeNamingPattern from '../../../assets/images/Plots/fakeNamingPattern.jpg'

import fakeNamingPattern_JoinDate2016 from '../../../assets/images/Plots/fakeNamingPattern_JoinDate2016.jpg'
import fakeNamingPattern_JoinDate2016_2 from '../../../assets/images/Plots/fakeNamingPattern_JoinDate2016_2.jpg'
import fakeNamingPattern_JoinDate2020 from '../../../assets/images/Plots/fakeNamingPattern_JoinDate2020.jpg'
import fakeNamingPattern_JoinDate2020_2 from '../../../assets/images/Plots/fakeNamingPattern_JoinDate2020_2.jpg'


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

const FakeNamingPattern = () => {
  return (
    <>
      <CRow>
        <CCol sm={6}>
          <h3>Fake Naming Pattern</h3>
          <div>Troughout our research on Facebook profiles, we realized that there are some profiles with a naming pattern which suggests bot-created accounts.<br/>There are some interesting notes on this:  
            <li>First, there has been several accounts with names in format of “#-1111111” ending in an underline and a series of numbers. For example, someone with an id of "Tian-Wei-at-work-104942321495828" is shown in the right-side picture. Overall, when we checked these accounts they appeared to be suspicious.</li>
            <li>Second, so many of them has changed their name or joined facebook on some specific dates like 2020 (COVID-19 outbreak) or 2016 (USA elections and Donald trump). This also encourages our results in Twitter Analysis Section where we analyzed the join date of the Twitter accounts.</li>
          </div>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px'}} src={fakeNamingPattern} width={'550px'}/>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm={6}>
          <img style={{marginTop:'24px'}} src={fakeNamingPattern_JoinDate2016} width={'550px'}/>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px', marginTop:'24px'}} src={fakeNamingPattern_JoinDate2016_2} width={'550px'}/>
        </CCol>
        <CCol sm={6}>
          <img style={{marginTop:'24px'}} src={fakeNamingPattern_JoinDate2020} width={'550px'}/>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px'}} src={fakeNamingPattern_JoinDate2020_2} width={'550px'}/>
        </CCol>

      </CRow>
      
      
    </>
  )
}

export default FakeNamingPattern
