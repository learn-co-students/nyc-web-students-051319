import React from 'react'

class PostCard extends React.Component {

  convertThousand(num){
    if(num >= 1000){
      return (Math.round(num / 100)/10) + "k"
    } else {
      return num
    }
  }

  timeSince(time){

    let hours = Math.floor((Date.now() - new Date(time)) / (1000*60*60))

    if (hours > 24){
      return Math.floor(hours/24) + " days"
    } else {
      return hours + " hours"
    }

  }

  handleClick = () => {
    if (this.props.clickPost){
      this.props.clickPost(this.props.post.id)
    }
  }

  render(){
    let {community, author_name, created_at, content, upvotes, comments, id} = this.props.post

    return (
      <div className="post-card">
        <div className="upvote-panel">
          <button onClick={() => {this.props.upVote(id)}}>⬆</button>
          <strong>{this.convertThousand(upvotes)}</strong>
          <button>⬇</button>
        </div>
        <div className="body">
          <strong>r/{community} </strong><span>· Posted by u/{author_name} {this.timeSince(created_at)} ago</span>
          <p>{content}</p>
          <div>
            <span onClick={this.handleClick}>
              <span role="img" aria-label="speech-bubble">💬</span>
              {this.convertThousand(comments.length)} comments
            </span>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default PostCard