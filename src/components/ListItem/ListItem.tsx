import * as React from "react";

import { ListItemProps, ListItemStates } from "./interfaces";
import { ItemWrapper, ItemName, ItemTags, ItemLink, ItemTagList, ItemTag, ItemActions, ActionRemove } from "./styles";

export default class ListItem extends React.Component<ListItemProps, ListItemStates> {

    componentDidMount() {
        this.setState({
            ...this.props
        });
    }

    render() {
        const { name, tags } = this.props;
        const tagList = tags ? tags.sort() : [];
        return (
            <ItemWrapper>
                <ItemLink href={`/${name}`}>
                    <ItemName>{name}</ItemName>
                </ItemLink>
                <ItemActions>
                    <ActionRemove>Remove</ActionRemove>
                </ItemActions>
                <ItemTagList>
                    <ItemTags>
                        {tagList.map(tag => (<ItemTag key={tag}>{tag}</ItemTag>))}
                    </ItemTags>
                </ItemTagList>
            </ItemWrapper>
        );
    }

}