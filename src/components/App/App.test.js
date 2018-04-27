/* global jest test */
import React from "react";
import { shallow } from "enzyme";
// currently broken because I can't load Phaser except with inline webpack commands
// import App from "./App";


test.skip("renders without crashing", () => {
    shallow(<App />);
});
