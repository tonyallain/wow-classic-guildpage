import { connect } from 'react-redux';
import NavbarMenu from '../components/navbar';
import { selectNavbarChoice } from '../actions/navbarActions';

const mapStateToProps = state => ({
    ...state.navbar
});

const mapDispatchToProps = { selectNavbarChoice };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarMenu);
