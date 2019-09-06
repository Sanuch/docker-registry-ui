import * as React from 'react';

import { HomeStates, HomeProps} from "./interfaces";
import ImageList from "components/ImageList";
import { HomeWrapper, HomeFooter, ListContainer } from "./styles";

export default class Home extends React.Component<HomeProps, HomeStates> {

    render() {
        return (
            <HomeWrapper>
                <ListContainer>
                    <ImageList />
                </ListContainer>
                <HomeFooter />
            </HomeWrapper>
        );
    }
};