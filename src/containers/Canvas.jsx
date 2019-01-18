import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = state => ({
    ...state.app
});

export default connect(mapStateToProps)(App);
