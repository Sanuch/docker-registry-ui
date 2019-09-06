import * as React from 'react';

import { HomeStates, HomeProps} from "./interfaces";
import List from "components/List";
import { HomeWrapper, HomeFooter, ListContainer } from "./styles";

export default class Home extends React.Component<HomeProps, HomeStates> {

    render() {
        return (
            <HomeWrapper>
                <ListContainer>
                    <List />
                </ListContainer>
                <HomeFooter />
            </HomeWrapper>
        );
    }
};