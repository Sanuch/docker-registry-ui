import * as React from "react";
import { Link } from 'react-router-dom';

import { ListItemProps } from "./interfaces";
import { ItemWrapper, ItemName, ItemTags, ItemLink, ItemTagList, ItemTag, ItemActions, ActionRemove } from "./styles";
import {useState} from "react";
import Modal from "../Page/Modal";

const ImageListItem: React.FC<ListItemProps> = ({name, tags}: ListItemProps) => {

    const tagList = tags ? tags.sort((a, b) => a - b) : [];

    const [modalWindow, setModalWindow] = useState(false);

    const dialog = modalWindow
        ? (
            <Modal
                onCancel={() => setModalWindow(false)}
                onYes={() => console.log(name)}
            >
                Do you really want to remove image "<b>{name}</b>"?
            </Modal>
        )
        : null
    ;

    return (
        <ItemWrapper>
            <ItemLink>
                <Link to={`/${name}`} >
                    <ItemName>{name}</ItemName>
                </Link>
            </ItemLink>
            <ItemActions>
                <ActionRemove onClick={() => setModalWindow(true)}>Remove</ActionRemove>
            </ItemActions>
            <ItemTagList>
                <ItemTags>
                    {tagList.map(tag => (<ItemTag key={tag}>{tag}</ItemTag>))}
                </ItemTags>
            </ItemTagList>
            {dialog}
        </ItemWrapper>
    );
};

export default ImageListItem;