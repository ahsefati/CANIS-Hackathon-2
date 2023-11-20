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

import TopEntitiyOwnersInfluenceByNumberOfAccounts from '../../../assets/images/Plots/TopEntitiyOwnersInfluenceByNumberOfAccounts.png'
import TopEntitiyOwnersInfluenceByNumberOfFollowers from '../../../assets/images/Plots/TopEntitiyOwnersInfluenceByNumberOfFollowers.png'
import TopEntitiyOwnersInfluenceByAVGNumberOfFollowers from '../../../assets/images/Plots/TopEntitiyOwnersInfluenceByAVGNumberOfFollowers.png'
import TopParentEntitiesInfluenceByNumberOfAccounts from '../../../assets/images/Plots/TopParentEntitiesInfluenceByNumberOfAccounts.png'
import TopParentEntitiesInfluenceByNumberOfFollowers from '../../../assets/images/Plots/TopParentEntitiesInfluenceByNumberOfFollowers.png'
import TopParentEntitiesInfluenceByAVGNumberOfFollowers from '../../../assets/images/Plots/TopParentEntitiesInfluenceByAVGNumberOfFollowers.png'


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

const FocusOfDifferentPlatformsByCountry = () => {
  return (
    <>
      <CRow>
        <CCol sm={6}>
          <h3>1- Top Influencial Entitity Owners</h3>
          <div>We analyzed the top 5 entity owners based on the given dataset. There are two dimensions for us to explore: 
            <li>First, we explored the number of accounts that are created by each entity owner and we see if there is any unusual activities. Result for the top influencial entity owners based on the number of accounts created by them can be seen on the right side.</li>
            <li>Second, we did the same steps but based on the number of followers gained by each of these entity owners. However, later researchs showed us that many of the gained followers are fake/bots. The result for this step is also visible on the right side.</li>
          </div>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Results:
          </h5>
          <h6>As it can be seen, ...</h6>
        </CCol>
        <CCol sm={6}>
          <img style={{marginLeft:'24px'}} src={TopEntitiyOwnersInfluenceByNumberOfAccounts} width={'650px'}/>
        </CCol>
        <CRow>
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={TopEntitiyOwnersInfluenceByNumberOfFollowers} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'24px', marginLeft:'24px'}} src={TopEntitiyOwnersInfluenceByAVGNumberOfFollowers} width={'650px'}/>
          </CCol>
        </CRow>
      </CRow>
      <br/>
      <hr/>
      <br/>
      <CRow>
        <CCol sm={6}>
          <h3>2- Top Influencial Parent Entitities</h3>
          <div>We analyzed the top 5 parent entities based on the given dataset. Again, there are two dimensions for us to explore: 
            <li>First, we explored the number of accounts that are created by each of the parent entities and we see if there is any unusual activities. Result for the top influencial entity owners based on the number of accounts created by them can be seen on the right side.</li>
            <li>Second, we did the same steps but based on the number of followers gained by each of these entity owners. However, later researchs showed us that many of the gained followers are fake/bots. The result for this step is also visible on the right side.</li>
          </div>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Results:
          </h5>
          <h6>As it can be seen, ...</h6>
        </CCol>
        <CCol sm={6}>
          <img style={{marginTop:'24px', marginLeft:'24px'}} src={TopParentEntitiesInfluenceByNumberOfAccounts} width={'650px'}/>
        </CCol>
        <CRow>
          <CCol sm={6}>
            <img style={{marginTop:'24px'}} src={TopParentEntitiesInfluenceByNumberOfFollowers} width={'650px'}/>
          </CCol>
          <CCol sm={6}>
            <img style={{marginTop:'24px', marginLeft:'24px'}} src={TopParentEntitiesInfluenceByAVGNumberOfFollowers} width={'650px'}/>
          </CCol>
        </CRow>
      </CRow>
      
    </>
  )
}

export default FocusOfDifferentPlatformsByCountry
