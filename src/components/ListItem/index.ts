import { connect } from 'react-redux';
import {Dispatch} from "redux";

import ListItem from "./ListItem";
import actions from "store/image-item/actions";

const mapStateToProps = (state: any) => ({
    tags: state.item.tags,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchTags: (name: string) => dispatch(actions.fetchTags({name: name})),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);