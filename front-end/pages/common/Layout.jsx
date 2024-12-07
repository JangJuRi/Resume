import Nav from './Nav';
import { Fragment } from "react";
import React from "react";

const Layout = (props) => {
    const {children} = props;

    return (
        <Fragment>
            <Nav />
            {children}
        </Fragment>
    );
}

export default Layout