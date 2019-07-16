import React from 'react'

function SearchBar(){
  return (
    <div className="search-bar">
      <select>
        <option>Popular</option>
        <option>All</option>
        <option>Original Content</option>
      </select>
      <input placeholder="🔍 Search Redd E.T."/>
    </div>
  )
}

export default SearchBar