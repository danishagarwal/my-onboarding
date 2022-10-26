import React from 'react'
import './setup.css'

function Setup() {
  return (
    <div className="setup">
      
      <p>Workspace Name</p>
      <input type="text" placeholder='Eden'  />
      <p>Workspace URL (Optional)
      </p>
      <input type="text" placeholder='www.noobengineer.com'  />
    </div>
  )
}

export default Setup