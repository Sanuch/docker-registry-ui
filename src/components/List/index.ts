import { connect } from 'react-redux';
import List from "./List";
import {Dispatch} from "redux";
import actions from 'store/image/actions';

const mapStateToProps = (state: any) => ({
    images: state.app.images,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchImages: () => dispatch(actions.fetchImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);