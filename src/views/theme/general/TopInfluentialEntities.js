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
          <h3>1- Top influential Entitity Owners</h3>
          <div>We analyzed the top 5 entity owners based on the given dataset. There are two dimensions for us to explore: 
            <li>First, we explored the number of accounts that are created by each entity owner and we see if there is any unusual activities. Result for the top influential entity owners based on the number of accounts created by them can be seen on the right side.</li>
            <li>Second, we did the same steps but based on the number of followers gained by each of these entity owners. However, later researchs showed us that many of the gained followers are fake/bots. The result for this step is also visible on the right side.</li>
          </div>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; Some Results...
          </h5>
          <h6>- Number of Accounts: Among the top 5 entity owners, China Media Group (CMG) has the highest number of accounts across all examined social media platforms. So it seems this entity owner aims to have a wide influence on social media. People Daily Press, Xinhua, and China Daily Press have a relatively lower number of accounts compared to CMG, with a balanced distribution across Twitter, Instagram, Facebook, and YouTube, and a smaller presence on TikTok. This could suggest a focus on quality over quantity in their social media influence strategy.</h6>
          <h6>- Total number of followers: CMG's total follower count is higher than other entity owners. For most of the entity owners, the number of total Facebook followers is larger than other platforms’ followers, which might show the larger scale of Facebook's influence on users. However, the presence of fake or bot followers significantly diminishes the influence these numbers might suggest. While The Ministry of Foreign Affairs has a large number of accounts on social media platforms, it has relatively low total followers in comparison to other entity owners, which suggests that its accounts have more authentic followers.</h6>
          <h6>- Average number of followers: We can see that the average number of followers for CMG is smaller than 3 of 5 tops, while the total number of followers for CMG was the highest. It suggests that the variation of accounts’ followers is high for CMG accounts. This also can provide an insight about the fake followers for some of their accounts.</h6>
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
          <h3>2- Top influential Parent Entities</h3>
          <div>We analyzed the top 5 parent entities based on the given dataset. Again, there are two dimensions for us to explore: 
            <li>First, we explored the number of accounts that are created by each of the parent entities and we see if there is any unusual activities. Result for the top influential entity owners based on the number of accounts created by them can be seen on the right side.</li>
            <li>Second, we did the same steps but based on the number of followers gained by each of these parent entities. However, later researchs showed us that many of the gained followers are fake/bots. The result for this step is also visible on the right side.</li>
          </div>
          <h5 style={{marginTop:'18px'}}>
            &#x2713; The same analysis as explained in the previous section, also applies for this part. 
          </h5>
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
