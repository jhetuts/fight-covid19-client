import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./actions/authAction";

import Layout from "./components/Layout";
import Nav from "./components/Common/Nav";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  const decoded = jwt_decode(localStorage.token);
  decoded.registered = null;
  decoded.welcome = `Welcome back player!`;
  store.dispatch(setCurrentUser(decoded));
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header>
            <h1>Covid19</h1>
            <Nav />
          </header>
          <Layout />
        </div>
      </Router>
    </Provider>
  );
}
export default App;
