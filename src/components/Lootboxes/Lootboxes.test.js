/* global jest test */
import React from "react";
import Enzyme, { shallow, render } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";
import Lootboxes from "./Lootboxes";


Enzyme.configure({ adapter: new Adaptor() });
//fix the crashing on pixi.js 
// jest.mock("pixi.js", () => {
//     return {
//         loader: {
//             resources: {}
//         },
//         utils: {
//             TextureCache: {}
//         }
//     };
// });
function fakeHandler(){
}

test("renders without crashing", () => {
    const lastbox = [];
    const wrapper = render(<Lootboxes
        lootboxChangeHandler={fakeHandler}
        buyLootboxHandler={fakeHandler}
        lastBox={lastbox}
        playerCash={0}
        playerUnopenedBoxes={0} />
    );
});


