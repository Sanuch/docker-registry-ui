import * as React from 'react';

import { HomeStates, HomeProps} from "./interfaces";
import List from "components/List";
import { WrapperApp, AppFooter, AppHeader, ListContainer } from "./styles";

export default class Home extends React.Component<HomeProps, HomeStates> {

    render() {
        return (
            <WrapperApp>
                <AppHeader />
                <ListContainer>
                    <List />
                </ListContainer>
                <AppFooter />
            </WrapperApp>
        );
    }
};