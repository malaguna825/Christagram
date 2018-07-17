import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import PostIndex from './post_index'

const msp = (state) => {
  return {
    posts: Object.values(state.entities.posts)
  };
};

const mdp = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(msp,mdp)(PostIndex);
