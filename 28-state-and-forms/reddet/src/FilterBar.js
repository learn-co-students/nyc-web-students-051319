import React from 'react'

function FilterBar(props){
  return (
    <div className="filter-bar">
      <div className="view-controls">
        <span>VIEW</span>
        <button onClick={props.cardMode}>CARD</button>
        <button>CLASSIC</button>
        <button onClick={props.listMode}>COMPACT</button>
      </div>
      <select>
        <option>HOT</option>
        <option>NEW</option>
        <option>CONTROVERSIAL</option>
        <option>TOP</option>
        <option>RISING</option>
      </select>
      <select>
        <option>UNITED STATES</option>
        <option>CHINA</option>
        <option>UNITED KINGDOM</option>
      </select>
      <select>
        <option>ALL STATES</option>
        <option>NEW YORK</option>
        <option>NEW JERSEY</option>
        <option>CALIFORNIA</option>
        <option>IDAHO</option>
        <option>FLORIDA</option>
      </select>
    </div>
  )
}

export default FilterBar