/* global jest test */
import React from "react";
import Enzyme, { shallow, render } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";
import App from "./App";


Enzyme.configure({ adapter: new Adaptor() });
//fix the crashing on pixi.js 
jest.mock("pixi.js", () => {
    return {
        loader : {
            resources: {}
        },
        utils : {
            TextureCache: {}
        }
    };
});

test("renders without crashing", () => {
    const wrapper = render(<App />);
});
