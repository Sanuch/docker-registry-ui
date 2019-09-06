import * as React from "react";
import { Link } from 'react-router-dom';


import { ListItemProps, ListItemStates } from "./interfaces";
import { ItemWrapper, ItemName, ItemTags, ItemLink, ItemTagList, ItemTag, ItemActions, ActionRemove } from "./styles";

export default class ListItem extends React.Component<ListItemProps, ListItemStates> {

    componentDidMount() {
        this.setState({
            ...this.props
        });
    }

    removeItem(name: string) {
        console.log(name);
    }

    render() {
        const { name, tags } = this.props;
        const tagList = tags ? tags.sort((a, b) => a - b) : [];
        return (
            <ItemWrapper>
                <ItemLink>
                    <Link to={`/${name}`} >
                        <ItemName>{name}</ItemName>
                    </Link>
                </ItemLink>
                <ItemActions>
                    <ActionRemove onClick={() => this.removeItem(name)}>Remove</ActionRemove>
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