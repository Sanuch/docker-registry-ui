import { Route } from 'react-router-dom';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = (props: any) => {
    const { component: Component, ...rest } = props;

    return (
        <Route {...rest} render={() => (
            <div className="DefaultLayout">
                <Header/>
                <Component {...props} />
                <Footer/>
            </div>
        )}/>
    )
};

export default DefaultLayout;