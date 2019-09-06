import { connect } from 'react-redux';
import { Dispatch } from "redux";
import ImageInfo from './ImageInfo';
import actions from "store/layout/actions";

interface LayoutReducer {
    layout: {
        tags: Array<string>,
        name: string,
        layouts: Array<any>,
    }
}

const mapStateToProps = (state: LayoutReducer) => ({
    tags: state.layout.tags,
    layouts: state.layout.layouts,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchLayouts: (name: string, tags: Array<string>) => dispatch(actions.fetchLayouts({
        name: name,
        tags: tags,
    })),
    fetchTags: (name: string) => dispatch(actions.fetchTags({name: name}))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageInfo);