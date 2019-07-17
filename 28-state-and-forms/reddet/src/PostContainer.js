import React from 'react'
import PostCard from './PostCard'
import PostListItem from './PostListItem'
import CommentList from './CommentList'

class PostContainer extends React.Component{
  state = {
    posts: [],
    selectedPost: null
  }

  clickPost = (id) => {
    this.setState({
      selectedPost: id
    })
  }

  closePost = () => {
    this.setState({
      selectedPost: null
    })
  }

  upVote = (id) => {    
    fetch(`http://localhost:3001/api/v1/posts/${id}/up_vote`, {
      method: "PATCH"
    })
    .then(res => res.json())
    .then(newPost => {
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
    let posts = this.state.posts.filter(post => post.community.toLowerCase().includes(this.props.searchTerm.toLowerCase()))

    return posts.map(post => {
      if (this.props.mode === "card"){
        return <PostCard upVote={this.upVote} key={post.id} post={post} clickPost={this.clickPost}/>
      } else {
        return <PostListItem key={post.id} post={post}/>
      }
    })
  }

  fetchData = () => {
    fetch("http://localhost:3001/api/v1/posts")
    .then(res => res.json())
    .then(data => {
      this.setState({
        posts: data
      })
    })
  }

  addComment = (postId, newComment) => {
    const foundPost = {...this.state.posts.find(post => post.id === postId)}
    foundPost.comments = [...foundPost.comments, newComment]

    const newPosts = this.state.posts.map(post => {
        if(post.id === postId){
          return foundPost
        } else {
          return post
        }
      })

    this.setState({
      posts: newPosts
    })
  }



  
  render(){    
    const foundPost = this.state.posts.find(post => post.id === this.state.selectedPost)

    if (foundPost){
      return(
        <PostCard upVote={this.upVote} post={foundPost}>
          <button className="back-button" onClick={this.closePost}>CLOSE</button>
          <CommentList addComment={this.addComment} postId={foundPost.id} comments={foundPost.comments}/>
        </PostCard>
      )
    } else {
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
}

export default PostContainer