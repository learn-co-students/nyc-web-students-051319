import React from 'react'

function PostCard(props) {

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

  function handleClick(){
    if (props.clickPost){
      props.clickPost(props.post.id)
    }
  }

  let {community, author_name, created_at, content, upvotes, comments, id} = props.post

  return (
    <div className="post-card">
      <div className="upvote-panel">
        <button onClick={() => {props.upVote(id)}}>⬆</button>
        <strong>{convertThousand(upvotes)}</strong>
        <button>⬇</button>
      </div>
      <div className="body">
        <strong>r/{community} </strong><span>· Posted by u/{author_name} {timeSince(created_at)} ago</span>
        <p>{content}</p>
        <div>
          <span onClick={handleClick}>
            <span role="img" aria-label="speech-bubble">💬</span>
            {convertThousand(comments.length)} comments
          </span>
        </div>
        {props.children}
      </div>
    </div>
  )
}


export default PostCard