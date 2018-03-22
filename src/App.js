import React, { Component } from "react";
import Lootboxes from "./Lootboxes";
import "normalize.css";
import "./App.css";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            "player": {
                "equipped": {
                    "head": "naked",
                    "hands": "naked",
                    "shoulders": "naked",
                    "chest": "naked",
                    "legs": "naked",
                    "knees": "naked",
                    "bl-pocket": "naked",
                    "feet": "naked",
                    "neck": "naked",
                    "finger1": "naked",
                    "finger2": "naked",
                    "backpack": "naked",
                    "companion": "naked",
                },
                "mount": {
                    "head": "naked",
                    "body": "naked",
                    "feet": "naked",
                    "pet": "naked"
                },
                "loot": [],
                "lastBox": [],
                "boxesOpened": 0,
                "cash": 0    
            }
        };
        this.handleLootboxChange = this.handleLootboxChange.bind(this);
    }
    handleLootboxChange(lootbox){
        this.setState(function (prevState, props) {
            var newState = { "player": { "lastBox": lootbox } };
            var inventory = prevState.player.loot;
            var openedBoxes = prevState.player.boxesOpened + 1;
            lootbox.map(function (item, index) {
                inventory.push(item);
                return undefined; // this is to silence a warning from the FB config'd webpack
            });
            newState.player.boxesOpened = openedBoxes;
            newState.player["loot"] = inventory;

            return newState;
        });

    }

    render() {
        return (
            <Lootboxes lootboxChangeHandler={this.handleLootboxChange} lastBox={this.state.player.lastBox}/>
        );
    }
}

export default App;
