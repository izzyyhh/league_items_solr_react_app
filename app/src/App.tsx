import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import Router from "./Router";
class App extends Component {
  public static render(baseEl: Element) {
    ReactDOM.render(<App />, baseEl);
  }
  public render() {
    return (
      <>
        <Router />
      </>
    );
  }
}

export default App;
