import React from 'react'
import HomeButton from './HomeButton'
import SearchBar from './SearchBar'
import UserControls from './UserControls'
import FilterBar from './FilterBar'


function NavBar(){
  return (
    <div className="navbar">
      <div className="top">
        <HomeButton />
        <SearchBar />
        <UserControls />
      </div>
      <div className="bottom">
        <FilterBar />
      </div>
    </div>
  )
}

export default NavBar