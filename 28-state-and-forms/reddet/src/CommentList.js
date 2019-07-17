import React from 'react'
import CommentCard from './CommentCard.js'
import NewCommentForm from './NewCommentForm.js'

function CommentList(props){

  function renderComments(){
    return props.comments.reverse().map(comment => {
      return <CommentCard key={comment.id} comment={comment}/>
    })
  }
  return (
    <div>
      <NewCommentForm postId={props.postId} addComment={props.addComment}/>
      { renderComments() }
    </div>
  )
}

export default CommentList