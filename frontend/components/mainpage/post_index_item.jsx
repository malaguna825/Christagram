import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleLike = this.handleLike.bind(this)
  }

  handleLike(e) {
    if (this.props.post.liked){
      this.props.deleteLike(this.props.post.id)
    }else{
      this.props.createLike(this.props.post.id)
      }
  }

  render () {
  const { post, createLike, deleteLike} = this.props;
  return (
    <li className='whole-Item'>
    <div className = 'topusername-icon'>
    <p className='top-username'>{post.username}</p>
    <i className="fa fa-ellipsis-h"></i>
    </div>
    <img src={post.photoUrl} className='picture'/>
    <i className={`fas fa-heart ${post.liked ? "red": ''}`} onClick={this.handleLike}></i>
    <i className="far fa-comment"></i>
    <i className="far fa-bookmark"></i>
    <p className="like-count">{post.numlikes} Likes </p>
    <div className = 'username-body'>
    <p className='bottom-username'>{post.username}</p>
    <p className='post-body'>{post.body}</p>
    </div>
    </li>
    );
  }
}

export default PostIndexItem;









// import React from 'react';
//
// class PostIndexItem extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   render () {
//   const { post, createLike, deleteLike} = this.props;
//   return (
//     <li className='whole-Item'>
//     <div className = 'topusername-icon'>
//     <p className='top-username'>{post.username}</p>
//     <i className="fa fa-ellipsis-h"></i>
//     </div>
//     <img src={post.photoUrl} className='picture'/>
//     <i className={`fas fa-heart ${post.liked ? "red": ''}`} onClick={() => createLike(post.id)}></i>
//     <i className="far fa-comment"></i>
//     <i className="far fa-bookmark"></i>
//     <p className="like-count">{post.numlikes} Likes </p>
//     <div className = 'username-body'>
//     <p className='bottom-username'>{post.username}</p>
//     <p className='post-body'>{post.body}</p>
//     </div>
//     </li>
//     );
//   }
// }
//
// export default PostIndexItem;
