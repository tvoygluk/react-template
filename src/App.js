import React from 'react';
import Layout from "./hoc/Layout/Layout";
import SecondMain from "./containers/SecondMain/SecondMain";
import FirstMain from "./containers/FirstMain/FirstMain";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

const App = (props) => {

  const routes = (
      <Switch>

        <Route path='/second' component={SecondMain} />

        <Route path='/' exact component={FirstMain} />

        <Redirect to='/' />

      </Switch>
  );

    return (
        <BrowserRouter>
            <Layout>
              { routes }
            </Layout>
        </BrowserRouter>
    );
};

export default App;