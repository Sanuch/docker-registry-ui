import { Route } from 'react-router-dom';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = (props: any) => {
    const { Component, computedMatch: { params:  match }  , ...rest } = props;

    const params = {...rest, ...match};

    console.log(params);

    return (
        <Route {...params} render={matchProps => (
            <div className="DefaultLayout">
                <Header/>
                <Component {...matchProps} />
                <Footer/>
            </div>
        )}/>
    )
};

export default DefaultLayout;