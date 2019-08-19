import * as React from 'react';

import { HomeStates, HomeProps} from "./interfaces";
import List from "components/List";
import { HomeWrapper, HomeFooter, HomeHeader, ListContainer, HeaderTitle } from "./styles";

export default class Home extends React.Component<HomeProps, HomeStates> {

    render() {
        return (
            <HomeWrapper>
                <HomeHeader>
                    <HeaderTitle>Docker Registry</HeaderTitle>
                </HomeHeader>
                <ListContainer>
                    <List />
                </ListContainer>
                <HomeFooter />
            </HomeWrapper>
        );
    }
};