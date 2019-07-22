import React from 'react'
import PostCard from '../components/PostCard'
import PostListItem from '../components/PostListItem'
import CommentList from './CommentList'

class PostContainer extends React.Component{
  state = {
    posts: [],
    selectedPost: null,
    loading: true
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
        posts: data,
        loading: false
      })
    })
  }

  componentDidMount(){
    this.fetchData()
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
    if (this.state.loading){
      return (
        <div class="wrapper">
          <div class="loader">
              <svg class="loading-animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <path class="loading-animation__path" d="M17.9 91.1V8.9h33.5s28.8-1.4 28.8 24.7c0 19.6-17.5 23.2-17.5 23.2L85 91.2H69.8l-21-33h-8.1V47.1h9.6s16.1 1.6 16.1-13.5-16.1-13.4-16.1-13.4H31.1v70.9H17.9z"/>
              </svg>
          </div>
      </div>

      )
    } else {
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
            {
              this.renderCards()
            }
          </div>
        )
      }

      }
 
  }
}

export default PostContainer