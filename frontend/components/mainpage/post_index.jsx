import React from 'react';
import PostIndexItem from './post_index_item';
import NavBar from '../navBar/nav_bar_container';

class PostIndex extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    const post = this.props.posts.map(post =>{
      return <PostIndexItem post={post} key={post.id}/>;
    });
    return (
      <div className="post-index">
        <ul>
          {post}
        </ul>
      </div>
    );
  }
}

export default PostIndex;
