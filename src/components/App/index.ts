import { connect } from 'react-redux';
import App from './App';
import { Dispatch } from "redux";
import actions from '../../store/image/actions';

const mapStateToProps = (state: any) => ({
    images: state.app.images,
    tags: state.app.tags,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchImages: () => dispatch(actions.fetchImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);