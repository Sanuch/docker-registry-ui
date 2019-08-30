import * as React from "react";

import { LayoutProps, LayoutStates } from "./interfaces";
import LayoutItem from "components/LayoutItem";
import { LayoutWrapper, LayoutTag, LayoutContent } from './styles';
import { sorterById } from "utils/layouts";

export default class Layout extends React.Component<LayoutProps, LayoutStates> {
    render() {
        const { layout } = this.props;
        const { tag } = layout;
        const layoutList = sorterById(layout.rows);
        const content = layoutList.map((layout: any) => {
            return (<LayoutItem key={layout.id} layout={layout} />);
        });
        return (
            <LayoutWrapper>
                <LayoutTag>{tag}</LayoutTag>
                <LayoutContent>{content}</LayoutContent>
            </LayoutWrapper>
        );
    }
}