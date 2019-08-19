import * as React from "react";

import { Link } from 'react-router-dom';

import { ListItemProps, ListItemStates } from "./interfaces";
import { ItemWrapper, ItemName, ItemTags } from "./styles";

export default class ListItem extends React.Component<ListItemProps, ListItemStates> {

    componentDidMount() {
        this.props.name && this.props.fetchTags(this.props.name);
    }

    render() {
        const { name, tags } = this.props;
        let tagList = tags ? tags.sort().join(', ') : '';
        return (
            <ItemWrapper>
                <Link to={`/${name}`}>
                    <ItemName>{name}</ItemName>
                    <ItemTags>{tagList}</ItemTags>
                </Link>
            </ItemWrapper>
        );
    }

}