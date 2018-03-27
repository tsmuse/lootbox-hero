import React, { Component } from "react";
import Lootboxes from "./Lootboxes";
import CharacterStats from "./CharacterStats";
import "normalize.css";
import "./App.css";
import CharacterInventory from "./CharacterInventory";
import CharacterEquipped from "./CharacterEquipped";


class App extends Component {
    
    constructor(props){
        super(props);
        this.BASE_ABILITIES = {
            "str": 10,
            "dex": 10,
            "int": 10,
            "wis": 10,
            "sex": 10,
            "brand": 10,
            "luck": 10,
            "credit": 650
        };
        this.state = {
            "player": {
                "name": "Mysterious Stranger",
                "abilities": this.BASE_ABILITIES,
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
                "loot": [
                    // just in case I need to test again, delete when finished
                    // {
                    //     "equipped": false,
                    //     "type": "mount",
                    //     "variation": 6,
                    //     "tier" : 6,
                    //     "name" : "Tier 6 mount_6",
                    //     "mountHead": "naked",
                    //     "mountBody": "naked",
                    //     "mountFeet": "naked",
                    //     "mountPet": "naked"
                    // },
                    // {
                    //     "equipped": false,
                    //     "type": "mountHead",
                    //     "variation": 6,
                    //     "tier": 7,
                    //     "name": "Tier 7 mountHead_6",
                    //     "desc": "test mountHead"
                    // },
                    // {
                    //     "equipped": false,
                    //     "type": "mount",
                    //     "variation": 2,
                    //     "tier": 4,
                    //     "name": "Tier 4 mount_2",
                    //     "mountHead": "naked",
                    //     "mountBody": "naked",
                    //     "mountFeet": "naked",
                    //     "mountPet": "naked"
                    // }
                ],
                "lastBox": [],
                "boxesOpened": 0,
                "cash": 100,
                "crateCash": 0
            }
        };
        this.handleLootboxChange = this.handleLootboxChange.bind(this);
        this.handleEquipItem = this.handleEquipItem.bind(this);
    }
    handleLootboxChange(lootbox){
        this.setState(function (prevState, props) {
            var newState = this.rebuildPlayer(prevState,
                "name","abilities","equipped","mount","cash", "crateCash"  
            );
            newState.player["lastBox"] = lootbox;
            newState.player["boxesOpened"] = prevState.player.boxesOpened + 1;
            var inventory = prevState.player.loot;
            lootbox.map(function (item, index) {
                inventory.push(item);
                return undefined; // this is to silence a warning from the FB config'd webpack
            });
            newState.player["loot"] = inventory;

            return newState;
        });

    }
    rebuildPlayer(prevState, ...keys){
        var dupePlayer = {"player": {}};

        for(let i = 0; i < keys.length; i++){
            let key = keys[i];
            dupePlayer.player[key] = prevState.player[key];
        }

        return dupePlayer;
    }
    
    updateEquipped(newState, newEquipped){
        // check if the item is a mount, if it is it needs to update the mount properties
        if (newEquipped.type === "mount") {
            // check if the slot is already full, if so put the old item back in invetory
            if (newState.player.mount.equipped) {
                newState.player.mount.equipped = false;
                // if unequipping a mount, remove all the items the mount is currently wearing
                // this may unblanace the game. Mount items may need to be bound to the mount
                // as soon as they are applied.
                if (newState.player.mount.mountHead.equipped) {
                    newState.player.mount.mountHead.equipped = false;
                    newState.player.mount.mountHead = "naked";
                }

                if (newState.player.mount.mountBody.equipped) {
                    newState.player.mount.mountBody.equipped = false;
                    newState.player.mount.mountBody = "naked";
                }

                if (newState.player.mount.mountFeet.equipped) {
                    newState.player.mount.mountFeet.equipped = false;
                    newState.player.mount.mountFeet = "naked";
                }
                if (newState.player.mount.mountPet.equipped) {
                    newState.player.mount.mountPet.equipped = false;
                    newState.player.mount.mountPet = "naked";
                }
            }
            newState.player.mount = newEquipped;
        }
        else if (newEquipped.type === "mountHead" || newEquipped.type === "mountBody" ||
            newEquipped.type === "mountFeet" || newEquipped.type === "mountPet") {      
            if (newState.player.mount[newEquipped.type] !== "naked") {
                newState.player.mount[newEquipped.type].equipped = false;
            }
            newState.player.mount[newEquipped.type] = newEquipped;
        }
        else if (newEquipped.type === "finger") {
            if (newState.player.equipped["finger1"] === "naked") {
                newState.player.equipped["finger1"] = newEquipped;
            }
            else if (newState.player.equipped["finger2"] === "naked") {
                newState.player.equipped["finger2"] = newEquipped;
            }
            else {
                newState.player.equipped["finger1"].equipped = false;
                newState.player.equipped["finger1"] = newEquipped;
            }

        }
        else {
            // check if the slot is already full, if so put the old item back in invetory
            if (newState.player.equipped[newEquipped.type] !== "naked") {
                newState.player.equipped[newEquipped.type].equipped = false;
            }
            newState.player.equipped[newEquipped.type] = newEquipped;
        }

        return newState;
    }

    handleEquipItem(clickedItem){
        // update the player object in state to set the equipped value of the item object to true
        // and then add that item's tier and type to the appropriate equipped slot
        //var clickedItem = e.currentTarget.dataset.itemIndex;
        this.setState(function(prevState, props){
            var newState = this.rebuildPlayer(prevState, 
                "name", "abilities", "mount", "cash", "crateCash", "lastBox", "boxesOpened",
                "equipped","loot"
            );
            var newEquipped = newState.player.loot[clickedItem];
            newEquipped.equipped = true;
            newState = this.updateEquipped(newState, newEquipped);
            var newAbilities = this.BASE_ABILITIES;
            for(let item in newState.player.equipped){
                if(newState.player.equipped[item] !== "naked"){
                    newAbilities.str += newState.player.equipped[item].stats.str;
                    newAbilities.dex += newState.player.equipped[item].stats.dex;
                    newAbilities.int += newState.player.equipped[item].stats.int;
                    newAbilities.wis += newState.player.equipped[item].stats.wis;
                    newAbilities.sex += newState.player.equipped[item].stats.sex;
                    newAbilities.brand += newState.player.equipped[item].stats.brand;
                    newAbilities.luck += newState.player.equipped[item].stats.luck;
                    newAbilities.credit += newState.player.equipped[item].stats.credit;
                }
            }
            newState.player.abilities = newAbilities;
            
            return newState;
        });
    }

    render() {
        return (
            <React.Fragment>
                <Lootboxes 
                    lootboxChangeHandler={this.handleLootboxChange} 
                    lastBox={this.state.player.lastBox} />
                <section className="character-sheet">
                    <CharacterStats playerAbilities={this.state.player.abilities} />
                    <CharacterEquipped playerEquipped={this.state.player.equipped} playerMount={this.state.player.mount} />
                    <CharacterInventory loot={this.state.player.loot} equipItemHandler={this.handleEquipItem} />
                </section>
            </React.Fragment>
        );
    }
}

export default App;
