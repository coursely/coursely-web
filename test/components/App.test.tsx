import test from "ava";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import App from "../../src/components/App";

configure({ adapter: new Adapter() });

test("renders the app", async t => {
  const wrapper = shallow(<App />);
  t.is(wrapper.contains(<div>Hello, React!</div>), true);
});
