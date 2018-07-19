import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts: posts
});

export const receiveErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receiveLike = like => ({
  type: RECEIVE_like,
  like
});

export const fetchPosts = () =>{
  return (dispatch) => (
    APIUtil.fetchPosts().then((posts) =>(
      dispatch(receivePosts(posts))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );
}

export const createLike = (post_id) => {
  return (dispatch) => (
    APIUtil.createLike(post_id).then(post =>(
      dispatch(receivePost(post))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );
}
