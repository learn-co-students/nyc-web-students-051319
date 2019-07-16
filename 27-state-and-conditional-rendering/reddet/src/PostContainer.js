import React from 'react'
import PostCard from './PostCard'
import PostListItem from './PostListItem'

class PostContainer extends React.Component{


  // constructor(props){
  //   super()


  //   this.state = {
  //     posts: []
  //   }

  //   this.fetchData = this.fetchData.bind(this)
  // }

  state = {
    posts: []
  }

  upVote = (id) => {    
    fetch(`http://localhost:3001/api/v1/posts/${id}/up_vote`, {
      method: "PATCH"
    })
    .then(res => res.json())
    .then(newPost => {

      // find the index of the target post
      // use index to splice out old data
      // replace with new data

      // find the index of the target post
      // update value at that index

      const newPosts = this.state.posts.map(post => {
        if(post.id === id){
          return newPost
        } else {
          return post
        }
      })


      this.setState({
        posts: newPosts
      })
    })
  }

  

  renderCards = () => {
    return this.state.posts.map(post => {
      if (this.props.mode === "card"){
        return <PostCard upVote={this.upVote} key={post.id} post={post}/>
      } else if (this.props.mode === "list"){
        return <PostListItem key={post.id} post={post}/>
      }
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
        <strong>Popular Posts</strong>
        <button onClick={this.fetchData}>GET POSTS</button>
        {
          this.renderCards()
        }
      </div>
    )
  }
}

export default PostContainer