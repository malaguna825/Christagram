import React from 'react';

const PostIndexItem = ({ post, createLike }) => (
  <li className='whole-Item'>
  <div className = 'topusername-icon'>
  <p className='top-username'>{post.username}</p>
  <i class="fa fa-ellipsis-h"></i>
  </div>
  <img src={post.photoUrl} className='picture'/>
  <i className={`far fa-heart ${post.liked ? "red": ''}`} onClick={() => createLike(post.id)}></i>
  <p>{post.numlikes} Likes </p>
  <i className="far fa-comment"></i>
  <i className="far fa-bookmark"></i>
    <div className = 'username-body'>
    <p className='bottom-username'>{post.username}</p>
    <p className='post-body'>{post.body}</p>
    </div>
  </li>
);

export default PostIndexItem;
