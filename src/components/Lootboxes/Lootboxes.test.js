/* global jest test */
import React from "react";
import { shallow } from "enzyme";
import Lootboxes from "./Lootboxes";

test("renders without crashing", () => {
    const lastbox = [];
    const fakeHandler = () => undefined;
    shallow(<Lootboxes
        lootboxChangeHandler={fakeHandler}
        buyLootboxHandler={fakeHandler}
        lastBox={lastbox}
        playerCash={0}
        playerUnopenedBoxes={0} />
    );
});


