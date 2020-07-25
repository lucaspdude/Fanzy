import React from 'react';
import Comment from './Comment';


function CommentList({comments}) {
  return (
      <div className="comments_container">
          {comments.length && comments.map(comment => {
              return (
                  <Comment key={comment.id} comment={comment} />
              )
          })}
      </div>
  );
}

export default CommentList;