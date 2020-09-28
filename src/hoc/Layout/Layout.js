import React from 'react';
import classes from './Layout.module.scss';
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";

const Layout = props => {

    return (
        <div className={classes.Layout}>

            <Header />

            <h1>Without Redux branch</h1>

            <main>
                {props.children}
            </main>

            <Footer />

        </div>
    );
};

export default Layout;