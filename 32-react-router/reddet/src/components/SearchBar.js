import React from 'react'

function SearchBar(props) {

  return (
    <div className="search-bar">
      <select>
        <option>Community</option>
        <option>Content</option>
        <option>Author</option>
      </select>
      <input onChange={props.handleChange} value={props.searchTerm} placeholder="🔍 Search Redd E.T."/>
    </div>
  )
}

export default SearchBar