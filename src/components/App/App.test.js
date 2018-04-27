/* global jest test */
import React from "react";
import { shallow } from "enzyme";
import App from "./App";


test.skip("renders without crashing", () => {
    shallow(<App />);
});
