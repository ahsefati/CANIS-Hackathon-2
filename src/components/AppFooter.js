import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://canis-network.ca" target="_blank" rel="noopener noreferrer">
          CANIS
        </a>
        <span className="ms-1">&copy; 2023.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://ahsefati.netlify.app/" target="_blank" rel="noopener noreferrer">
          AHS Coding.
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
