import * as React from "react";
import { HeaderTitle, HomeHeader } from "./styles";

export default class Header extends React.Component {
    render() {
        return (
            <HomeHeader>
                <HeaderTitle>Docker Registry</HeaderTitle>
            </HomeHeader>
        );
    }
}