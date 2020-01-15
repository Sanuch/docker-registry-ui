import * as React from 'react';

import ImageList from "components/ImageList";
import { HomeWrapper, HomeFooter, ListContainer } from "./styles";

const Home: React.FC = () => {

    return (
        <HomeWrapper>
            <ListContainer>
                <ImageList />
            </ListContainer>
            <HomeFooter />
        </HomeWrapper>
    );
};

export default Home;