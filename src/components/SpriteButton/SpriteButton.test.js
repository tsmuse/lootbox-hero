/* global jest test */
import React from "react";
import { shallow } from "enzyme";
import SpriteButton from "./SpriteButton";

const fakeSprite = {
    "base": "https://dummyimage.com/256/ff00b7/fff.png",
    "head": "",
    "shirt": "",
    "pants": "",
    "shoes": "",
    "mainHand": "",
    "offHand": ""
}
test("renders without crashing", () => {


    shallow(
        <SpriteButton className="player-sprite"
            sprite={fakeSprite}
            alt="Player sprite placeholder"
            clickHandler={() => false}
        />
    );
});