import React, { Fragment } from 'react'

function UserControls(){
  return (
    <Fragment>
      <div className="user-controls">
        <button className="login">LOG IN</button>
        <button className="signup">SIGN UP</button>
        <button><span role="img" aria-label="user-controls">👤 ⬇</span></button>
      </div>
      <button>Wutup</button>
    </Fragment>
  )
}

export default UserControls