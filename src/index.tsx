import { Component, render } from "inferno";
import { initDevTools } from "inferno-devtools";

if (process.env.NODE_ENV == "development") {
  console.log("development");
  initDevTools();
}

class App extends Component {
  render() {
    return <div>Hello, Inferno!</div>;
  }
}

render(<App />, document.getElementById("app"));
