import React from 'react'

function CommentCard(props){

  function convertThousand(num){
    if(num >= 1000){
      return (Math.round(num / 100)/10) + "k"
    } else {
      return num
    }
  }

  function timeSince(time){
    let hours = Math.floor((Date.now() - new Date(time)) / (1000*60*60))

    if (hours > 24){
      return Math.floor(hours/24) + " days"
    } else {
      return hours + " hours"
    }
  }

  const { content, upvotes, created_at, username } = props.comment

  return (
    <div className="post-card">
      <div className="upvote-panel">
        <button>⬆</button>
        <strong>{convertThousand(upvotes)}</strong>
        <button>⬇</button>
      </div>
      <div className="body">
        <span>Posted by u/{username} {timeSince(created_at)} ago</span>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default CommentCard