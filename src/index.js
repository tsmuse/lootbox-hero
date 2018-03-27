import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Everything here is to simulate data that would be provided to the app by
// a backend
const BASE_ABILITIES = {
    "str": 10,
    "dex": 10,
    "int": 10,
    "wis": 10,
    "sex": 10,
    "brand": 10,
    "luck": 10,
    "credit": 650
};

function generateNewPlayer(){
    const newPlayer = {
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
            "weaponOff" : "naked"
        },
        "mount": {
            "equipped": false,
            "type": "mount",
            "variation" : "",
            "mountHead": "naked",
            "mountBody": "naked",
            "mountFeet": "naked",
            "mountPet": "naked"
        },
        "loot": {},
        "lastBox": [],
        "boxesOpened": 0,
        "cash": 100,
        "crateCash" : 0,
        "unopenedBoxes" : 4,
        "score" : 100
    };
    return newPlayer;
}

ReactDOM.render(<App player={generateNewPlayer()} baseAbilities={BASE_ABILITIES}/>, 
    document.getElementById('root'));
registerServiceWorker();
