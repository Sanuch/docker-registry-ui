import * as React from "react";

import { ImageProps, ImageStates } from "./interfaces";
import { ImageContainer, ImageLayouts, ImageHeader, HeaderTags, HeaderTitle } from "./styles";
import Layout from "components/Layout";
import { merger, sorterByTags } from "utils/layouts";

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
        const { layouts, match: { params: image } } = this.props;
        console.log(image);
        if (typeof layouts === 'undefined') {
            return (<div />);
        }
        const mergeLayouts = merger(layouts).sort(sorterByTags);
        console.log(mergeLayouts);
        return (
            <ImageContainer>
                <ImageHeader>
                    <HeaderTitle>{image}</HeaderTitle>
                </ImageHeader>
                <ImageLayouts>
                    {mergeLayouts && mergeLayouts.map((layout: any, index: number) => (<Layout key={index} layout={layout} />))}
                </ImageLayouts>
            </ImageContainer>
        );
    }
}