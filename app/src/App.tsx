import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import { ItemProvider } from "./components/ItemProvider/ItemProvider";
import { ItemsContext } from "./hooks/useItems/useItems";
import Router from "./Router";
class App extends Component {
  public static render(baseEl: Element) {
    ReactDOM.render(<App />, baseEl);
  }
  public render() {
    return (
      <ItemProvider>
        <Router />
      </ItemProvider>
    );
  }
}

export default App;
