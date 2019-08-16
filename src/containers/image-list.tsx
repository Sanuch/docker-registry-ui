import React, {Component} from "react";
import {bindActionCreators, Dispatch} from "redux";
import {connect } from "react-redux";
import {select} from "../actions";

interface ImageListProps {
    images: Array<{name: string}>,
    select: Function
}

interface ImageListState {

}
class ImageListComponent extends Component<ImageListProps, ImageListState> {
    showImages() {
        let images = this.props.images || [];
        return images.map((image, key) => {
            return (
                <li onClick={() => {this.props.select(image)}} key={key}>{image.name}</li>
            );
        });
    }

    render()  {
        return (
            <ul>
                {this.showImages()}
            </ul>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        images: state.images,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({select: select}, dispatch);
}

const ImageList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageListComponent);

export default ImageList;