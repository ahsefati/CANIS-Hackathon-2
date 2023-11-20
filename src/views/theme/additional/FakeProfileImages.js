import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CImage, CAvatar } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'
import DistributionOfFocusedRegion from 'src/components/DistributionOfFocusedRegion'
import DistributionOfFocusedRegion2 from 'src/components/DistributionOfFocusedRegion2'
import FocusOfDifferentPlatformsByCountryAndLanguage from 'src/components/FocusOfDifferentPlatformsByCountryAndLanguage'
import FocusOfDifferentPlatformsByLanguageAndRegion from 'src/components/FocusOfDifferentPlatformsByLanguageAndRegion'


import Insta_notFound from '../../../assets/images/Plots/Insta_notFound.jpg'

import Profile_repetetivePosts from '../../../assets/images/Plots/Profile_repetetivePosts.png'
import Profile_repetetivePosts2 from '../../../assets/images/Plots/Profile_repetetivePosts2.png'
import Profile_repetetivePosts3 from '../../../assets/images/Plots/Profile_repetetivePosts3.png'
import Profile_repetetivePosts4 from '../../../assets/images/Plots/Profile_repetetivePosts4.png'

import ProfileImageReal_1 from '../../../assets/images/Plots/ProfileImageReal_1.jpeg'
import ProfileImageReal_2 from '../../../assets/images/Plots/ProfileImageReal_2.jpeg'
import ProfileImageReal_3 from '../../../assets/images/Plots/ProfileImageReal_3.jpeg'
import ProfileImageReal_4 from '../../../assets/images/Plots/ProfileImageReal_4.jpeg'
import ProfileImageReal_5 from '../../../assets/images/Plots/ProfileImageReal_5.jpeg'
import ProfileImageReal_6 from '../../../assets/images/Plots/ProfileImageReal_6.jpeg'

import ProfileImage_1 from '../../../assets/images/Plots/ProfileImage_1.jpeg'
import ProfileImage_2 from '../../../assets/images/Plots/ProfileImage_2.jpeg'
import ProfileImage_3 from '../../../assets/images/Plots/ProfileImage_3.jpeg'
import ProfileImage_4 from '../../../assets/images/Plots/ProfileImage_4.jpeg'
import ProfileImage_5 from '../../../assets/images/Plots/ProfileImage_5.jpeg'
import ProfileImage_6 from '../../../assets/images/Plots/ProfileImage_6.jpeg'
import ProfileImage_7 from '../../../assets/images/Plots/ProfileImage_7.jpeg'
import ProfileImage_8 from '../../../assets/images/Plots/ProfileImage_8.jpeg'


import fakeProfile_Comb1 from '../../../assets/images/Plots/fakeProfile_Comb1.jpg'
import fakeProfile_Comb2 from '../../../assets/images/Plots/fakeProfile_Comb2.jpg'



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

const FakeProfileImages = () => {
  return (
    <>
      <CRow>
        <CCol sm={6}>
          <h3>Fake Images as their Profile Picture!</h3>
          <div>
            In our research, we found out that there are many accounts that are using GAN-generated images for their profiles. The reason to use it may be related to bot-generated accounts where they try to create and signup accounts without using any labors.
            <br/>
            It may be useful to create a tool which can detect images detected by GAN. It can help platforms identify and detect fake accounts effectively.
            <br/>
            In this page, you can see some suspicious profile images which are all very similar to each other as GAN generated images follow an specific pattern. For example, the location of eyes are all very close to each otehr or the hair styles look like the same.
            <br/>
            Also, in many cases, their account had suspicious activities such as posting the same media too many times which clearly is a sign of bot-managed profile. As it can be seen in the right side, the contents are also suspicious to be AI generated.
            <br/><br/>
            Additionally, in the second picture, we can see another suspicious account with a fake profile image (probably from internet) with posts that encourages things like "Europe is betraying US!" or "Putin `CHOOSING` the War!", etc. These type of contents are also fake and misleading. 
          </div>
          <CRow>
            <CCol style={{marginTop:'24px'}} sm={9}>
              <CCard>
                <CCardHeader>Probable Fake Profile Images</CCardHeader>
                <CRow>
                  <CCol sm={4}>
                    <CAvatar style={{margin:'16px', marginLeft:'34px'}} src={ProfileImage_1} size="xl" />
                  </CCol>
                  <CCol sm={4}>
                    <CAvatar style={{margin:'16px', marginLeft:'34px'}} src={ProfileImage_2} size="xl" />
                  </CCol>
                  <CCol sm={4}>
                    <CAvatar style={{margin:'16px', marginLeft:'34px'}} src={ProfileImageReal_1} size="xl" />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol sm={4}>
                    <CAvatar style={{margin:'16px', marginLeft:'34px'}} src={ProfileImage_5} size="xl" />
                  </CCol>
                  <CCol sm={4}>
                    <CAvatar style={{margin:'16px', marginLeft:'34px'}} src={ProfileImage_4} size="xl" />
                  </CCol>
                  <CCol sm={4}>
                    <CAvatar style={{margin:'16px', marginLeft:'34px'}} src={ProfileImageReal_4} size="xl" />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol sm={4}>
                    <CAvatar style={{margin:'16px', marginLeft:'34px'}} src={ProfileImage_6} size="xl" />
                  </CCol>
                  <CCol sm={4}>
                    <CAvatar style={{margin:'16px', marginLeft:'34px'}} src={ProfileImage_7} size="xl" />
                  </CCol>
                  <CCol sm={4}>
                    <CAvatar style={{margin:'16px', marginLeft:'34px'}} src={ProfileImage_8} size="xl" />
                  </CCol>
                </CRow>
              </CCard>
            </CCol>

            <CCol style={{marginTop:'24px'}} sm={3}>
              <CCard>
                <CCardHeader>Real Images</CCardHeader>
                <CRow>
                  <CCol style={{marginLeft:'24px'}} sm={6}>
                    <CAvatar style={{margin:'16px'}} src={ProfileImageReal_2} size="xl" />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol style={{marginLeft:'24px'}} sm={6}>
                    <CAvatar style={{margin:'16px'}} src={ProfileImageReal_3} size="xl" />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol style={{marginLeft:'24px'}} sm={6}>
                    <CAvatar style={{margin:'16px'}} src={ProfileImageReal_5} size="xl" />
                  </CCol>
                </CRow>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
            <CCol sm={12}>
              <img src={Profile_repetetivePosts4} width={'620px'} style={{marginTop:'36px'}}/>
            </CCol>
          </CRow>
        </CCol>
        <CCol sm={6}>
          <img src={Profile_repetetivePosts} width={'700px'}/>
          <img src={Profile_repetetivePosts2} width={'700px'} style={{marginTop:'36px'}}/>
          <img src={Profile_repetetivePosts3} width={'700px'} style={{marginTop:'36px'}}/>          
        </CCol>
      </CRow>
      <hr/>
      <CRow>
        <h4>Combination of AI Profile Picture and Fake Posts/Comments</h4>
        <div>
          Below, you can see an example of creating an account using bots. There, the image is most probably created by AI using GAN algorithms. 
          <br/>
          Also, this account published at least one review about trading which, as described in Facebook Analysis Section, is one of the fields that the contents are mostly fake.
          <br/>
          Finally, as it can be seen below, to make the profile less suspicious, bots try to upload some random pictures as posts.
        </div>
        <img src={fakeProfile_Comb1} width={'700px'} style={{marginTop:'36px'}}/>  
        <img src={fakeProfile_Comb2} width={'700px'} style={{marginTop:'36px'}}/>          
      </CRow>

      
    </>
  )
}

export default FakeProfileImages
