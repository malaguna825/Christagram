import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mdp =(dispatch) => {
	return{
		signup:(user)=> dispatch(signup(user)),
	};
};

export default connect(null, mdp)(SignupForm);