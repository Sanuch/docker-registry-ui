import { connect } from 'react-redux';
import App from './App';
import { Dispatch } from "redux";
import actions from '../../store/image/actions';

import {AppStates} from './App';

const mapStateToProps = (state: any) => ({
    images: state.images.images,
    tags: state.images.tags,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchImages: () => dispatch(actions.fetchImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);