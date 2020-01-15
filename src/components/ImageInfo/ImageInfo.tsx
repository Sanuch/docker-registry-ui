import * as React from "react";

import { ImageProps } from "./interfaces";
import { ImageContainer, ImageLayouts, ImageHeader, HeaderTitle } from "./styles";
import Layout from "components/Layout";
import { merger, sorterByTags } from "utils/layouts";
import {useEffect, useState} from "react";

import dockerClient from "utils/docker";

const fetchLayouts = (image: string, setLayouts: (o: []) => void) => {
    dockerClient
        .getImageTags(image)
        .then(({ data }) => data)
        .then(({ tags }: any) => {
            tags = tags ? tags : [];

            dockerClient.getLayouts(image, tags)
                .then(reposponse => {
                    const previousValue: any[] = [];
                    const data = reposponse.reduce((previousValue, row ) => {
                        const { data } = row;
                        const history = data.history.reduce((c: any[], i: any) => {
                            const d = JSON.parse(i.v1Compatibility);
                            c.push(d);
                            return c;
                        }, []);
                        previousValue.push({ history, tag: data.tag });
                        return previousValue;
                    }, previousValue) as [];
                    setLayouts(data);
                })
            ;
        })
        .catch(console.error)
        .finally( () =>  {} );
};

// const fetchLayouts = () => {
//     dockerClient.getLayouts()
// };

const ImageInfo: React.FC<ImageProps> = ({ image }: ImageProps) => {
    const [layouts, setLayouts] = useState([]);

    useEffect(() => {
        fetchLayouts(image, setLayouts)
    }, []);

    if (layouts === []) {
        return (<div />);
    }

    const mergeLayouts = merger(layouts).sort(sorterByTags);
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
};

export default ImageInfo;