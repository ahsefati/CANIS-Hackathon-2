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
          <h6>
            &#x2713; Introduction: This section examines the regional focus of the dataset users. It highlights the target regions that entities prioritize in their content dissemination and engagement strategies. For example, a significant presence is observed in the USA, China,  Canada, South Africa, and Japan. Specifically, the English-speaking countries account for a substantial portion of the entities, indicating a strategic focus on this region. Here we can see the map of world showing which countries are targeted more by these social media users. 
            Another demonstration of this fact, bigger circles have more members, circles with the same color have the same language. 
          </h6>
          <h6>
            &#x2713; Adding the dimension of language: In the right plot, we can see that the focused regions are mostly targeted by English. Based on Wikipedia (see <a href='https://en.wikipedia.org/wiki/List_of_countries_by_English-speaking_population'>here</a>), more than 1.2B people in the world can understand English which is perfectly aligned with the decision of Government of China to improve its presence in social media platforms using English-written content.  
          </h6>
          <h6>
            &#x2713; Top 5 Targeted Countries, why them? It was interesting when we found out about the top countries that are targeted by China state-controlled media. Here is why:
            <li>USA: the most powerful country in the world by many metrics such as economy and military power. USA is the most targeted country by China. While China's GDP is ~$18B, USA has a $25B economy and is the only country superior to China in this matter. The more people from USA or even from other countries hate USA government, the more benefits for China! For example, if people from other big economies such as Germany, Canada, and Japan demand their governments to stop importing products from USA, the economy of this country would collapse. (Of course, it is a very simplified example.)</li>
            <li>UK: the most strategic country in Europe which recently voted to exit EU (Brexit), while other countries in Europe can't create laws or politics indivisually, England is the only one that can do it since it's not part of the EU anymore. Therefore, any influence on the people of England, can directly influence not only UK, but also Europe.</li>
            <li>Canada: as a member of G7, Canada can be important to China in two ways. First, Canada also has a powerful and growing economy. With a 37% economic growth in 8 years (even more than USA!), it can be a threat to China's growth. Second, Canada is one of the biggest economic partners of USA, influence on people of Canada can result in collapses in USA as well.</li>
            <li>Japan: With a GDP of $4.2B, Japan is the next biggest economy after China. By controlling (or at least trying to control) the mind of people in Japan, China can create opportunities to open a market of 128 million people with the highest population density among G7 countries! Imagine if Japanese people accept to use Chinese cars or technology services. A high-density population is a dream for businesses.</li>
            <li>South Africa: This was surprising for us at the first glance to see South Africa in Top 5. However, we then realized that this country is the newest target for other countries such as China to extract gold and minerals. Also, interestingly, one of the official languages in South Africa is English and people in South Africa mostly know English as their second language. (see <a href='https://en.wikipedia.org/wiki/List_of_countries_by_English-speaking_population'>here</a>)</li>
          </h6>
        </CCol>
        <CCol style={{marginTop:'24px'}} sm={7}>
          <DistributionOfFocusedRegion2/>
        </CCol>
      </CRow>
    </>
  )
}

export default RegionalFocusDistribution
