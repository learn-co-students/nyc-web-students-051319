import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton(){
  return (
    <Link to="/posts">
      <div className="home-button">
        <img src="./reddet.ico" alt='reddet icon' className="logo"/> redde<span>.</span>t<span>.</span>
      </div>
    </Link>
  )
}

export default HomeButton