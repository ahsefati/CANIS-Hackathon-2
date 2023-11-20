import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cibFacebook,
  cibInstagram,
  cibTwitter,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilFace,
  cilFaceDead,
  cilHappy,
  cilLanguage,
  cilLineStyle,
  cilMap,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSearch,
  cilShieldAlt,
  cilSitemap,
  cilSpeedometer,
  cilStar,
  cilTouchApp,
  cilUserPlus,
  cilVector,
  cilVoiceOverRecord,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Overview',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'Most Interesting',
  },
  {
    component: CNavItem,
    name: 'Network Graphs Using Tweet Info',
    to: '/interesting/NetworkGraph',
    icon: <CIcon icon={cilVector} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'ML Model: Account Detection Tool',
    to: '/interesting/MLModel',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Analysis of Scraped Data',
  },
  {
    component: CNavGroup,
    name: 'Twitter: Analysis of Tweets & Profiles',
    to: '/twitter',
    icon: <CIcon icon={cibTwitter} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Overview and sentiment Analysis',
        to: '/twitter/SentimentAnalysis',
      },
      {
        component: CNavItem,
        name: 'Hashtags Analysis',
        to: '/twitter/TopHashtags',
      },
      {
        component: CNavItem,
        name: 'Word Cloud Analysis',
        to: '/twitter/WordCloudAnalysis',
      },
      {
        component: CNavItem,
        name: 'Account Creation Date Analysis',
        to: '/twitter/CreationDateAnalysis',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Facebook: Analysis of Profiles',
    to: '/facebook',
    icon: <CIcon icon={cibFacebook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Fake Accounts Naming Patterns',
        to: '/facebook/FakeNamingPattern',
      },
      {
        component: CNavItem,
        name: 'Suspicious Managers',
        to: '/facebook/SuspiciousManager',
      },
      {
        component: CNavItem,
        name: 'Suspicious Activities',
        to: '/facebook/SuspiciousActivity',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Instagram: General Analysis of Profiles',
    to: '/additional/InstagramInfo',
    icon: <CIcon icon={cibInstagram} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Platforms Fake Detection Power',
    to: '/additional/PlatformsDetectionPower',
    icon: <CIcon icon={cilTouchApp} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Fake Profile Images Analysis',
    to: '/additional/FakeProfileImages',
    icon: <CIcon icon={cilFace} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'General Analysis',
  },
  {
    component: CNavItem,
    name: 'Regional Focus Distribution',
    to: '/general/RegionalFocusDistribution',
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Distribution of Languages',
    to: '/general/LanguageDistribution',
    icon: <CIcon icon={cilLanguage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Targeting based on Different Platforms',
    to: '/general/TargettingBasedOnDifferentPlatforms',
    icon: <CIcon icon={cilFaceDead} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Top influential Entities',
    to: '/general/TopInfluentialEntities',
    icon: <CIcon icon={cilLineStyle} customClassName="nav-icon" />,
  },
]

export default _nav
