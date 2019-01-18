import { connect } from 'react-redux';
import NavbarMenu from '../components/navbar';

const mapStateToProps = state => ({
    ...state.navbar
});

export default connect(mapStateToProps)(NavbarMenu);
