import merge from 'lodash/merge';
import { RECEIVE_POST_ERRORS } from '../actions/post_actions'

export default(state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST_ERRORS:
      return action.errors
    default:
      return state;
  }
};
