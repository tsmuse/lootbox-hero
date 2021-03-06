/* global jest test */
import React from "react";
import { shallow } from "enzyme";
import InventoryItem from "./InventoryItem";

const fakeLoot = {
    name: "",
    id: "",
    type: "",
    stats: {
        "str": 10,
        "dex": 10,
        "int": 10,
        "wis": 10,
        "sex": 10,
        "brand": 10,
        "luck": 10,
        "credit": 650
    }
};

const fakeEventHandler = (e) => undefined;

test("renders without crashing", () => {
    shallow(
        <InventoryItem key={`0${fakeLoot.id}_${fakeLoot.type}`}
            loot={fakeLoot}
            handleEquipButton={fakeEventHandler}
            handleJunkButton={fakeLoot}
            equipDisabled={false}
        />
    );
});
