import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mdp =(dispatch) => {
	return{
		login:(user)=> dispatch(login(user)),
	};
};

export default connect(null, mdp)(LoginForm);
