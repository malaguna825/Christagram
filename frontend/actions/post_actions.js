
import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts: posts
});

export const receiveErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const fetchPosts = () =>{
  return (dispatch) => (
    APIUtil.fetchPosts().then(posts =>(
      dispatch(receivePosts(posts))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );
}
