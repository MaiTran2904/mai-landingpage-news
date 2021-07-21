
import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "../src/router";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {this.showContentMenu(routes)}
          </Switch>
        </div>
      </Router>
    );
  }
  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };
}



export default App;


