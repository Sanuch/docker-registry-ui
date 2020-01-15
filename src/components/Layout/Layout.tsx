import * as React from "react";

import { LayoutProps } from "./interfaces";
import LayoutItem from "components/LayoutItem";
import {LayoutWrapper, LayoutTag, LayoutContent, LayoutTagTitle, LayoutTagContent} from './styles';
import { sorterById } from "utils/layouts";

const Layout: React.FC<LayoutProps> = ({ layout }: LayoutProps) =>{
    const { tag } = layout;
    const layoutList = sorterById(layout.rows);
    const content = layoutList.map((layout: any) => {
        return (<LayoutItem key={layout.id} layout={layout} />);
    });
    return (
        <LayoutWrapper>
            <LayoutTag>
                <LayoutTagTitle>Tags:</LayoutTagTitle>
                <LayoutTagContent>{tag}</LayoutTagContent>
            </LayoutTag>
            <LayoutContent>{content}</LayoutContent>
        </LayoutWrapper>
    );
};

export default Layout;