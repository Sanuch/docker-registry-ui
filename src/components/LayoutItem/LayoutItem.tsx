import * as React from "react";

import { LayoutItemProps } from "./interfaces";
import { ItemRow, ItemCmd, ItemId } from './styles';

const LayoutItem: React.FC<LayoutItemProps> = ({ layout: {id, container_config} }: LayoutItemProps) => {
    return (
        <ItemRow>
            <ItemId>{id.slice(0, 8)}</ItemId>
            <ItemCmd>{container_config.Cmd.join(' ')}</ItemCmd>
        </ItemRow>
    );
};

export default LayoutItem;