import Nav from './Nav';
import { Fragment } from "react";
import React from "react";

const Layout = (props: {
    children: React.ReactNode
}) => {
    return (
        <Fragment>
            <Nav />
            {props.children}
        </Fragment>
    );
}

export default Layout