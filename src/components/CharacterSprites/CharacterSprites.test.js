/* global jest test */
import React from "react";
import { shallow } from "enzyme";
import CharacterSprites from "./CharacterSprites";

const fakePlayer = {
    "name": "Mysterious Stranger",
    "abilities": {
        "str": 10,
        "dex": 10,
        "int": 10,
        "wis": 10,
        "sex": 10,
        "brand": 10,
        "luck": 10,
        "credit": 650
    },
    "equipped": {
        "head": "naked",
        "hands": "naked",
        "shoulders": "naked",
        "chest": "naked",
        "legs": "naked",
        "knees": "naked",
        "lbPocket": "naked",
        "feet": "naked",
        "neck": "naked",
        "finger1": "naked",
        "finger2": "naked",
        "backpack": "naked",
        "companion": "naked",
        "weaponMain": "naked",
        "weaponOff": "naked"
    },
    "mount": {
        "equipped": false,
        "type": "mount",
        "variation": "",
        "mountHead": "naked",
        "mountBody": "naked",
        "mountFeet": "naked",
        "mountPet": "naked",
        "sprite": {
            "base": "https://dummyimage.com/256/ff00b7/fff.png",
            "head": "",
            "shirt": "",
            "pants": "",
            "shoes": ""
        }
    },
    "BASE_ABILITIES": {
        "str": 10,
        "dex": 10,
        "int": 10,
        "wis": 10,
        "sex": 10,
        "brand": 10,
        "luck": 10,
        "credit": 650
    },
    "loot": {},
    "lastBox": [],
    "currency": {
        "cash": 100,
        "crateCash": 0,
        "unopenedBoxes": 4,
        "score": 0
    },
    "boxesOpened": 0,
    "sprite": {
        "base": "https://dummyimage.com/256/ff00b7/fff.png",
        "head": "",
        "shirt": "",
        "pants": "",
        "shoes": "",
        "mainHand": "",
        "offHand": ""
    }
};

const fakeEventHandler = (e) => undefined;

test("renders without crashing", () => {
    shallow(
        <CharacterSprites
            playerSprite={fakePlayer.sprite}
            mountSprite={fakePlayer.mount.sprite}
            playerName={fakePlayer.name}
            playerCurrency={fakePlayer.currency}

        />
    );
});
