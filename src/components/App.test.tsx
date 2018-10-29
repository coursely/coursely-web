import { shallow } from "enzyme";
import * as React from "react";
import { App } from "./App";

it("renders the app", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
