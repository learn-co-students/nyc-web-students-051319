import React from 'react'
import HomeButton from '../components/HomeButton'
import SearchBar from '../components/SearchBar'
import UserControls from '../components/UserControls'
import FilterBar from '../components/FilterBar'


function NavBar(props){
  return (
    <div className="navbar">
      <div className="top">
        <HomeButton />
        <SearchBar handleChange={props.handleChange} searchTerm={props.searchTerm}/>
        <UserControls logout={props.logout} currentUser={props.currentUser} />
      </div>
      <div className="bottom">
        <FilterBar cardMode={props.cardMode} listMode={props.listMode}/>
      </div>
    </div>
  )
}

export default NavBar