import React from 'react'
import PostContainer from './PostContainer'

function MainContainer(props){
  return (
    <div className="main-container">
      <PostContainer searchTerm={props.searchTerm} mode={props.mode}/>
    </div>
  )
}

export default MainContainer