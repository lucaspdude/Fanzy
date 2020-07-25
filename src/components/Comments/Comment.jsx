import React from 'react';
import UserBadge from '../User/UserBadge';


function Comment({comment}) {
    console.log(comment)
  return (
      <div className="comment">
          <UserBadge user={comment.user} alt={true} />
          <div className="comment_content">
              {comment.content}
          </div>
      </div>
  );
}

export default Comment;