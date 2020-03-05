import * as React from "react";
import ListItem from "components/ImageListItem";

import { ListWrapper } from "./styles";
import { useState } from "react";

import dockerClient from "utils/docker";
import Modal from "../Page/Modal";

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

const fullImageList = [{"name":"image-00001","tags":[17,29,40,63,64,65,75,96,103,"latest"]},{"name":"image-00002","tags":[12,46,53,58,59,69,76,86,101,"latest"]},{"name":"image-00003","tags":[30,36,44,49,50,77,"latest"]},{"name":"image-00004","tags":[32,37,78,"latest"]},{"name":"image-00005","tags":[14,28,31,33,56,71,76,84,95,103,"latest"]},{"name":"image-00006","tags":[15,22,44,53,62,107,"latest"]},{"name":"image-00007","tags":[17,19,21,32,56,66,77,82,86,97,"latest"]},{"name":"image-00008","tags":[17,18,28,29,50,67,70,107,"latest"]},{"name":"image-00009","tags":[40,41,79,"latest"]},{"name":"image-00010","tags":[36,46,56,64,89,"latest"]},{"name":"image-00011","tags":[18,29,"latest"]},{"name":"image-00012","tags":[12,41,50,77,87,88,104,"latest"]},{"name":"image-00013","tags":[12,29,39,54,77,95,97,"latest"]},{"name":"image-00014","tags":[106,"latest"]},{"name":"image-00015","tags":[42,43,49,54,65,66,68,92,103,104,"latest"]},{"name":"image-00016","tags":[26,36,51,79,82,96,109,110,"latest"]},{"name":"image-00017","tags":[22,30,48,56,65,68,77,83,110,"latest"]},{"name":"image-00018","tags":[61,94,"latest"]},{"name":"image-00019","tags":[23,39,"latest"]},{"name":"image-00020","tags":[84,"latest"]}];
const ImageContext = React.createContext(fullImageList);

const ImageList: React.FC = () => {
    const [images, setImages] = useState(fullImageList);

    const [selectedItem, setSelectedItem] = useState('');

    if (images.length === 0) {
        return (<div />);
    }

    const removeImage = (imageName: string) => {
        setImages(
            images.filter(({name}) => name !== imageName)
        );
        setSelectedItem('');
    };
    const dialog = (name: string) => (
        <Modal
            onCancel={() => setSelectedItem('')}
            onYes={() => removeImage(name)}
        >
            Do you really want to remove image "<b>{name}</b>"?
        </Modal>
    );

    const handleRemove = (name: string) => setSelectedItem(name);

    return (
        <ListWrapper>
            {images.map((image: any, index: number) => (
                <ListItem key={index} name={image.name} tags={image.tags} handleRemove={handleRemove}/>
                )
            )}
            {selectedItem && dialog(selectedItem)}
        </ListWrapper>
    );
};

export default ImageList;