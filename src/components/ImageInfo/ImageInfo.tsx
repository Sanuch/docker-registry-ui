import * as React from "react";

import { ImageProps } from "./interfaces";
import {ImageContainer, ImageLayouts, ImageHeader, HeaderTitle, Breadcrumbs} from "./styles";
import Layout from "components/Layout";
import { merger, sorterByTags } from "utils/layouts";
import { useState } from "react";

import {Link} from "react-router-dom";
import { fetchLayouts } from "./util";

const ImageInfo: React.FC<ImageProps> = ({ image }: ImageProps) => {
    const [layouts, setLayouts] = useState([]);

    if (layouts.length === 0) {
        fetchLayouts(image, setLayouts);
        return (<div />);
    }
    const mergeLayouts = merger(layouts).sort(sorterByTags);
    return (
        <ImageContainer>
            <Breadcrumbs>
                <Link to="/">Explorer</Link>
            </Breadcrumbs>
            <ImageHeader>
                <HeaderTitle>{image}</HeaderTitle>
            </ImageHeader>
            <ImageLayouts>
                {mergeLayouts && mergeLayouts.map((layout: any, index: number) => (<Layout key={index} layout={layout} />))}
            </ImageLayouts>
        </ImageContainer>
    );
};

export default ImageInfo;