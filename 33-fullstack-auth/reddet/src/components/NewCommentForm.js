import React from 'react'

class NewCommentForm extends React.Component{

  state = {
    newContent: ""
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    fetch(`http://localhost:3001/api/v1/posts/${this.props.postId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "Authorization": localStorage.token
      },
      body: JSON.stringify({content: this.state.newContent})
    })
    .then(res => res.json())
    .then(newComment => {

      this.props.addComment(this.props.postId, newComment)

    })

    this.setState({
      newContent: ""
    })
  }

  render(){
    return (
      <div className="comment-form">
        <textarea onChange={this.handleChange} name="newContent" value={this.state.newContent} placeholder="What are your thoughts?"/>        
        <div className="comment-form-bottom-panel">
          <button onClick={this.handleSubmit}>Comment</button>
        </div>
      </div>
    )
  }
  
}

export default NewCommentForm