import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "../Common/PrivateRoute";
import Login from "../../views/Login";
import Register from "../../views/Register";
import Arena from "../../views/Arena";
import Stage from "../../views/Stage";

const Layout = () => {
  return (
    <main>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Switch>
        <PrivateRoute exact path="/arena" component={Arena} />
        <PrivateRoute exact path="/stage" component={Stage} />
      </Switch>
    </main>
  );
};
export default Layout;
