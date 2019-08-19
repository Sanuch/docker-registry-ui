import * as React from "react";

import { LayoutItemProps, LayoutItemStates } from "./interfaces";
import { ItemRow, ItemCmd, ItemId } from './styles';

export default class LayoutItem extends React.Component<LayoutItemProps, LayoutItemStates> {
    render() {
        const { layout } = this.props;
        return (
            <ItemRow>
                <ItemId>{layout.id}</ItemId>
                <ItemCmd>{layout.container_config.Cmd.join(' ')}</ItemCmd>
            </ItemRow>
        );
    }
}