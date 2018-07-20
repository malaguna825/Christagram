import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, createLike, deleteLike } from '../../actions/post_actions';
import PostIndex from './post_index'

const msp = (state) => {
  return {
    posts: Object.values(state.entities.posts)
  };
};

const mdp = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    createLike: (post_id) => dispatch(createLike(post_id)),
    deleteLike: (post_id) => dispatch(deleteLike(post_id))
  };
};

export default connect(msp,mdp)(PostIndex);
