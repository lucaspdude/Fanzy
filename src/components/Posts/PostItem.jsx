import React, { useState } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import { Accordion, Collapse } from 'react-bootstrap';
import CommentList from '../Comments/CommentList';
import UserBadge from '../User/UserBadge';

// import { Container } from './styles';

function Post({post}) {
    const [selected, setSelected] = useState(false)
  return (
      <div className={`post   ${selected ? 'selected' : ''}`} onClick={() => setSelected(!selected)}>
          
          <div className="post_content">
              <div className="post_content-header">
                  <UserBadge user={post.user} />
                  <span className="post_data"> 22/07/2020 </span>
              </div>
              <div className="post_content-body">
                  {post.content}
              </div>
              <div className="post_content-meta">
                  <div className="like_count">
                      <FaHeart /> ({post.like_count})
                  </div>
                  <div className="comment_count">
                      <FaComment /> ({post.like_count})
                  </div>
              </div>


            <Collapse in={selected ? true : false}>
                
                <div>
                    <CommentList comments={post.comments} />
                </div>
            </Collapse>



          </div>
      </div>
  );
}

export default Post;