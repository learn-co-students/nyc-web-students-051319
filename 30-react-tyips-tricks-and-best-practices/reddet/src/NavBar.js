import React from 'react'
import HomeButton from './HomeButton'
import SearchBar from './SearchBar'
import UserControls from './UserControls'
import FilterBar from './FilterBar'


function NavBar(props){
  return (
    <div className="navbar">
      <div className="top">
        <HomeButton />
        <SearchBar handleChange={props.handleChange} searchTerm={props.searchTerm}/>
        <UserControls />
      </div>
      <div className="bottom">
        <FilterBar cardMode={props.cardMode} listMode={props.listMode}/>
      </div>
    </div>
  )
}

export default NavBar