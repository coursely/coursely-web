import * as React from "react";
import * as ReactDOM from "react-dom";

export class App extends React.Component {
  render() {
    return <div>Hello, React!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
