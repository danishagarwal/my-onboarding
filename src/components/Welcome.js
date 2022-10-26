import React from 'react'
import './welcome.css'
function Welcome(formData, setFormData) {
  return (

    <div className="welcome">
      <p>Full Name</p>
      <input type="text" placeholder='Danish Agarwal'  />
      <p>Display Name </p>
      <input type="text" placeholder='Danish' value = {formData.displayName}
      onChange= {(event) => setFormData({...formData, displayName:event.target.value})} />
    </div>
  )
}



export default Welcome