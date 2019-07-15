import React from 'react'
import PostCard from './PostCard'

const posts = [
  {
    community: "Area51",
    username: "Beefy McSteaker",
    timestamp: 9,
    title: "They can't stop us all",
    num_upvotes: 34000,
    num_comments: 2542
  },
  {
    community: "StormArea51",
    username: "Will Smith",
    timestamp: 15,
    title: "Welcome to Urf",
    num_upvotes: 83000,
    num_comments: 242
  },
  {
    community: "ProtectArea51",
    username: "Jeff Goldblum",
    timestamp: 23,
    title: "Life finds a way",
    num_upvotes: 4000,
    num_comments: 542
  },
]

function PostContainer(){

  function renderCards() {
    return posts.map(post => {
      return <PostCard post={post}/>
    })
  }

  return (
    <div>
      {
        renderCards()
      }
    </div>
  )
}

export default PostContainer