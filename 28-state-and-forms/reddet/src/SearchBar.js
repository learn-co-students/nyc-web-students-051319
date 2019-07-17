import React from 'react'

class SearchBar extends React.Component {

  render(){
    return (
      <div className="search-bar">
        <select>
          <option>Community</option>
          <option>Content</option>
          <option>Author</option>
        </select>
        <input onChange={this.props.handleChange} value={this.props.searchTerm} placeholder="🔍 Search Redd E.T."/>
      </div>
    )
  }
}

export default SearchBar