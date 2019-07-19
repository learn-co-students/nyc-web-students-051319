import React from 'react'

class PostListItem extends React.Component {

  convertThousand(num){
    if(num >= 1000){
      return (Math.round(num / 100)/10) + "k"
    } else {
      return num
    }
  }

  shortenText(content){
    if (content.length > 30){
      return content.slice(0, 30) + "..."
    } else {
      return content
    }
  }

  render(){
    let { community, author_name, content, upvotes } = this.props.post

    return (
      <div className="post-card">
        <div className="upvote-panel list">
          <button >⬆</button>
          <strong>{this.convertThousand(upvotes)}</strong>
          <button>⬇</button>
        </div>
        <div className="body">
          <text>{this.shortenText(content)}</text>
          <br/>
          <strong> r/{community}</strong><span> · Posted by u/{author_name}</span>
        </div>
      </div>
    )
  }
}


export default PostListItem