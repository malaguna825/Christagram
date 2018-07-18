import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mdp =(dispatch) => {
	return {
		signup: (user)=> dispatch(signup(user)),
		login: (user)=> dispatch(login(user)),
	};
};

export default connect(null, mdp)(SignupForm);
