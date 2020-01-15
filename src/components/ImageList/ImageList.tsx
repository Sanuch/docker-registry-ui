import * as React from "react";
import ListItem from "components/ImageListItem";

import { ListWrapper } from "./styles";
import {useEffect, useState} from "react";

import dockerClient from "utils/docker";

const fetchTags = (images: Array<string>, updateState: (a: any[]) => void) => {
    dockerClient
        .getTags(images)
        .then(response => response.map(item => item.data))
        .then(data => {
            updateState(data);
        })
        .catch(console.error)
        .finally( () =>  {} );
};

const fetchImages = (updateState: (a: any[]) => void ) => {
    dockerClient.getList( {})
        .then(({ data: { repositories } }) => repositories)
        .then(images => {
            fetchTags(images, updateState);
        })
        .catch(console.error)
        .finally( () =>  {} );
};

const ImageList: React.FC = () => {
    const [images, setImages] = useState([] as Array<string>);

    useEffect(() => {
        fetchImages(setImages);
    }, []);

    return (
        <ListWrapper>
            {images.map((image: any, index: number) => (<ListItem key={index} name={image.name} tags={image.tags} />))}
        </ListWrapper>
    );
};

export default ImageList;