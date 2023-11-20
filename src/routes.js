import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const RegionalFocusDistribution = React.lazy(() => import('./views/theme/colors/RegionalFocusDistribution'))
const LanguageDistribution = React.lazy(() => import('./views/theme/typography/LanguageDistribution'))
const EntityOwnersInflunceByPlatforms = React.lazy(() => import('./views/theme/general/EntityOwnersInflunceByPlatforms'))
const ParentEntityInflunceByPlatforms = React.lazy(() => import('./views/theme/general/ParentEntityInflunceByPlatforms'))
const TargettingBasedOnDifferentPlatforms = React.lazy(() => import('./views/theme/general/TargettingBasedOnDifferentPlatforms'))
const TopInfluentialEntities = React.lazy(() => import('./views/theme/general/TopInfluentialEntities'))

// TWITTER
const TopHashtags = React.lazy(() => import('./views/theme/twitter/TopHashtags'))
const SentimentAnalysis = React.lazy(() => import('./views/theme/twitter/SentimentAnalysis'))
const WordCloudAnalysis = React.lazy(() => import('./views/theme/twitter/WordCloudAnalysis'))
const CreationDateAnalysis = React.lazy(() => import('./views/theme/twitter/CreationDateAnalysis'))

// FACEBOOK
const FakeNamingPattern = React.lazy(() => import('./views/theme/facebook/FakeNamingPattern'))
const SuspiciousManager = React.lazy(() => import('./views/theme/facebook/SuspiciousManager'))
const SuspiciousActivity = React.lazy(() => import('./views/theme/facebook/SuspiciousActivity'))

// INTERESTINGS
const NetworkGraph = React.lazy(() => import('./views/theme/interesting/NetworkGraph'))
const MLModel = React.lazy(() => import('./views/theme/interesting/MLModel'))

// Additional
const InstagramInfo = React.lazy(() => import('./views/theme/additional/InstagramInfo'))
const PlatformsDetectionPower = React.lazy(() => import('./views/theme/additional/PlatformsDetectionPower'))
const FakeProfileImages = React.lazy(() => import('./views/theme/additional/FakeProfileImages'))


// Base
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/general', name: 'Theme', element: RegionalFocusDistribution, exact: true },
  { path: '/general/RegionalFocusDistribution', name: 'Regional Focus Distribution', element: RegionalFocusDistribution },
  { path: '/general/LanguageDistribution', name: 'LanguageDistribution', element: LanguageDistribution },
  { path: '/general/EntityOwnersInflunceByPlatforms', name: 'EntityOwnersInflunceByPlatforms', element: EntityOwnersInflunceByPlatforms },
  { path: '/general/ParentEntityInflunceByPlatforms', name: 'ParentEntityInflunceByPlatforms', element: ParentEntityInflunceByPlatforms },
  { path: '/general/TargettingBasedOnDifferentPlatforms', name: 'TargettingBasedOnDifferentPlatforms', element: TargettingBasedOnDifferentPlatforms },
  { path: '/general/TopInfluentialEntities', name: 'TopInfluentialEntities', element: TopInfluentialEntities },

  { path: '/twitter/SentimentAnalysis', name: 'SentimentAnalysis', element: SentimentAnalysis },
  { path: '/twitter/TopHashtags', name: 'TopHashtags', element: TopHashtags },
  { path: '/twitter/WordCloudAnalysis', name: 'WordCloudAnalysis', element: WordCloudAnalysis },
  { path: '/twitter/CreationDateAnalysis', name: 'CreationDateAnalysis', element: CreationDateAnalysis },
  
  { path: '/facebook/FakeNamingPattern', name: 'FakeNamingPattern', element: FakeNamingPattern },
  { path: '/facebook/SuspiciousManager', name: 'SuspiciousManager', element: SuspiciousManager },
  { path: '/facebook/SuspiciousActivity', name: 'SuspiciousActivity', element: SuspiciousActivity },
  
  { path: '/additional/InstagramInfo', name: 'InstagramInfo', element: InstagramInfo },
  { path: '/additional/PlatformsDetectionPower', name: 'PlatformsDetectionPower', element: PlatformsDetectionPower },
  { path: '/additional/FakeProfileImages', name: 'FakeProfileImages', element: FakeProfileImages },
  
  { path: '/interesting/NetworkGraph', name: 'NetworkGraph', element: NetworkGraph },
  { path: '/interesting/MLModel', name: 'MLModel', element: MLModel },


  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
