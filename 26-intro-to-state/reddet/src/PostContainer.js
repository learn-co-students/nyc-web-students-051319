import React from 'react'
import PostCard from './PostCard'

class PostContainer extends React.Component{


  // constructor(props){
  //   super()


  //   this.state = {
  //     posts: []
  //   }
  // }

  state = {
    posts: []
  }

  renderCards() {
    return this.state.posts.map(post => {
      return <PostCard post={post}/>
    })
  }

  fetchData = () => {
    fetch("http://localhost:3001/api/v1/posts")
    .then(res => res.json())
    .then(data => {
      // WHAT DO I DO WITH THIS DATA????

      // DON'T DO THIS
      // this.state.posts = data

      // DO THIS
      // setState changes state AND THEN triggers a rerender
      this.setState({
        posts: data
      })
    })
  }

  
  render(){
    return (
      <div className="post-container">
        <strong >Popular Posts</strong>
        <button onClick={this.fetchData}>GET POSTS</button>
        {
          this.renderCards()
        }
      </div>
    )
  }
}

export default PostContainer