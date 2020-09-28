import React from 'react';
import Layout from "./hoc/Layout/Layout";
import SecondMain from "./containers/SecondMain/SecondMain";
import FirstMain from "./containers/FirstMain/FirstMain";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";

const App = () => {

    const routes = (
        <Switch>

            <Route path='/second' component={SecondMain} />

            <Route path='/' exact component={FirstMain} />

            <Redirect to='/' />

        </Switch>
    );

    return (
        <Layout>
          { routes }
        </Layout>
    );
};

export default withRouter(App);