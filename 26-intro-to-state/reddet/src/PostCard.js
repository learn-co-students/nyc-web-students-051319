import React from 'react'

class PostCard extends React.Component {

  convertThousand(num){
    if(num >= 1000){
      return (Math.round(num / 100)/10) + "k"
    } else {
      return num
    }
  }

  render(){

    console.log("WHAT DIS", this)

    let {community, username, created_at, content, upvotes, comments} = this.props.post

    return (
      <div className="post-card">
        <div className="upvote-panel">
          <button >⬆</button>
          <strong>{this.convertThousand(upvotes)}</strong>
          <button>⬇</button>
        </div>
        <div className="body">
          <strong>r/{community} </strong><span>· Posted by u/{username} {created_at} hours ago</span>
          <p>{content}</p>
          <div>
            <span>💬{this.convertThousand(comments.length)} comments</span>
          </div>
        </div>
      </div>
    )
  }
}


export default PostCard