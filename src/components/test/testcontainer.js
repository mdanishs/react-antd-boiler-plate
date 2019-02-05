import { connect } from 'react-redux';
import { loginUser } from '../../store/actions';
import test from './test';

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: () => dispatch(loginUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(test);