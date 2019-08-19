import * as React from "react";

import { ImageProps, ImageStates } from "./interfaces";
import { ImageContainer, ImageLayouts, ImageHeader, HeaderTags, HeaderTitle } from "./styles";
import Layout from "components/Layout";

export default class Image extends React.Component<ImageProps, ImageStates> {

    componentDidMount() {
        this.props.fetchTags(this.props.image);
    }

    expandImage(name: string, tags: Array<string>) {
        if (this.props.fetchLayouts && tags) {
            this.props.fetchLayouts(name, tags)
        }
    }

    render() {
        const { image, tags, layouts } = this.props;
        if (layouts) {

        }
        return (
            <ImageContainer>
                <ImageHeader>
                    <HeaderTitle>{image}</HeaderTitle>
                    <HeaderTags>{tags.join(', ')}</HeaderTags>
                </ImageHeader>
                <ImageLayouts>
                    {layouts && layouts.map((layout, index) => (<Layout key={index} layout={layout} />))}
                </ImageLayouts>
            </ImageContainer>
        );
    }
}