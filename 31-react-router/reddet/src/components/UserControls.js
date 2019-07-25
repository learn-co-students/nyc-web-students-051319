import React from 'react'
import { Link } from 'react-router-dom'

function UserControls(){
  return (
    <div className="user-controls">
      <Link to="/login"><button className="login">LOG IN</button></Link>
      <button className="signup">SIGN UP</button>
      <button><span role="img" aria-label="user-controls">👤 ⬇</span></button>
    </div>
  )
}

export default UserControls