import * as React from "react";

import { LayoutProps, LayoutStates } from "./interfaces";
import LayoutItem from "components/LayoutItem";
import { LayoutWrapper } from './styles';

export default class Layout extends React.Component<LayoutProps, LayoutStates> {
    render() {
        const { layout } = this.props;
        const content = layout.map((layout: any) => {
            return (<LayoutItem key={layout.id} layout={layout} />);
        });
        return (
            <LayoutWrapper>{content}</LayoutWrapper>
        );
    }
}