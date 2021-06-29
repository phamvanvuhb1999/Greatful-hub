import { connect } from 'react-redux';
import LoginForm from '../../components/login/LoginForm';
import { login } from '../../redux/auth';
import jwt from 'jsonwebtoken';

const mapActionToProps = { login };
const mapStateToProps = (state) => {
    if (state.auth) {
        return {
            profile: state.auth.profile,
        }
    } else {
        return {
            profile: null
        }
    }

}

export default connect(mapStateToProps, mapActionToProps)(LoginForm);