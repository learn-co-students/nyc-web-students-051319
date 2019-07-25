import React from 'react'

function PostListItem(props){

  function convertThousand(num){
    if(num >= 1000){
      return (Math.round(num / 100)/10) + "k"
    } else {
      return num
    }
  }

  function shortenText(content){
    if (content.length > 30){
      return content.slice(0, 30) + "..."
    } else {
      return content
    }
  }

  let { community, author_name, content, upvotes } = props.post

  return (
    <div className="post-card">
      <div className="upvote-panel list">
        <button >⬆</button>
        <strong>{convertThousand(upvotes)}</strong>
        <button>⬇</button>
      </div>
      <div className="body">
        <text>{shortenText(content)}</text>
        <br/>
        <strong> r/{community}</strong><span> · Posted by u/{author_name}</span>
      </div>
    </div>
  )
}


export default PostListItem