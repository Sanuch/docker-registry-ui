import * as React from "react";
import { ListProps, ListStates } from "./interfaces";
import ListItem from "components/ImageListItem";

import { ListWrapper } from "./styles";

export default class ImageList extends React.Component<ListProps, ListStates> {

    componentDidMount() {
        this.props.fetchImages();
    }

    render() {
        const { images } = this.props;
        return (
            <ListWrapper>
                {images.map((image: any, index: number) => (<ListItem key={index} name={image.name} tags={image.tags} />))}
            </ListWrapper>
        );
    }
}