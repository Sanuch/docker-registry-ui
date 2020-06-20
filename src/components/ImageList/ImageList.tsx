import * as React from "react";
import ListItem from "components/ImageListItem";

import { ListWrapper } from "./styles";
import {useContext, useState} from "react";

import Modal from "components/Page/Modal";
import {fetchImages} from "components/ImageList/util";
import dockerClient from "utils/docker";
import {StoreContext} from "utils/context";

interface ImageStorage {
    addImage: Function
}
const ImageList: React.FC = () => {

    const context: ImageStorage = useContext(StoreContext);

    const [images, setImages] = useState([] as Array<any>);
    const [selectedItem, setSelectedItem] = useState('');

    if (images.length === 0) {
        fetchImages(setImages);
        return (<div />);
    }

    const removeImage = (imageName: string) => {
        const tags = dockerClient.getImageTags(imageName)
            .then(({tags}) => {
                tags.map((tag: string) => {
                    dockerClient.getManifestReference(imageName, tag)
                        .then((digest: any) => {
                            dockerClient.deleteImage(imageName, digest);
                        });
                });
                setImages(
                    images.filter(({name}) => name !== imageName)
                );
            });

        // dockerClient.getManifestReference(imageName, '7.2');
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

    images.map((imageName: string) => context.addImage(imageName));

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