import React from 'react';

const PostIndexItem = ({ post }) => (
  <li className='whole-Item'>
  <div className = 'topusername-icon'>
  <p className='top-username'>{post.username}</p>
  <i class="fa fa-ellipsis-h"></i>
  </div>
  <img src={post.photoUrl} className='picture'/>
  <i class="far fa-heart"></i>
  <i class="far fa-comment"></i>
  <i class="far fa-bookmark"></i>
    <div className = 'username-body'>
    <p className='bottom-username'>{post.username}</p>
    <p className='post-body'>{post.body}</p>
    </div>
  </li>
);

export default PostIndexItem;
