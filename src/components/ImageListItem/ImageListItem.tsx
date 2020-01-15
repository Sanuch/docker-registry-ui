import * as React from "react";
import { Link } from 'react-router-dom';

import { ListItemProps } from "./interfaces";
import { ItemWrapper, ItemName, ItemTags, ItemLink, ItemTagList, ItemTag, ItemActions, ActionRemove } from "./styles";

const ImageListItem: React.FC<ListItemProps> = ({name, tags}: ListItemProps) => {

    const tagList = tags ? tags.sort((a, b) => a - b) : [];

    const removeItem = (name: string) => {
        console.log(name);
    };

    return (
        <ItemWrapper>
            <ItemLink>
                <Link to={`/${name}`} >
                    <ItemName>{name}</ItemName>
                </Link>
            </ItemLink>
            <ItemActions>
                <ActionRemove onClick={() => removeItem(name)}>Remove</ActionRemove>
            </ItemActions>
            <ItemTagList>
                <ItemTags>
                    {tagList.map(tag => (<ItemTag key={tag}>{tag}</ItemTag>))}
                </ItemTags>
            </ItemTagList>
        </ItemWrapper>
    );
};

export default ImageListItem;