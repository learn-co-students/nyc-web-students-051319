import React from 'react'

// function PostCard(props){
//   return (
//     <div>
//       <p><strong>r/{props.community} </strong> - Posted by u/{props.username} {props.timestamp} hours ago</p>
//       <h4>{props.title}</h4>
//       <p>Upvotes {props.num_upvotes}</p>
//       <p>Comments {props.num_comments}</p>
//     </div>
//   )
// }

class PostCard extends React.Component {
  render(){

    console.log(this.props)

    let {community, username, timestamp, title, num_upvotes, num_comments} = this.props.post

    return (
      <div>
        <p><strong>r/{community} </strong> - Posted by u/{username} {timestamp} hours ago</p>
        <h4>{title}</h4>
        <p>Upvotes {num_upvotes}</p>
        <p>Comments {num_comments}</p>
      </div>
    )
  }
}


export default PostCard