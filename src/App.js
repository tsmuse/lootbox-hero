import React, { Component } from "react";
import Lootboxes from "./Lootboxes";
import "normalize.css";
import "./App.css";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            "player": {
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
                "loot": [
                    {
                        "equipped": false,
                        "type": "mount",
                        "variation": 6,
                        "tier" : 6,
                        "name" : "Tier 6 mount_6",
                        "mountHead": "naked",
                        "mountBody": "naked",
                        "mountFeet": "naked",
                        "mountPet": "naked"
                    },
                    {
                        "equipped": false,
                        "type": "mountHead",
                        "variation": 6,
                        "tier": 7,
                        "name": "Tier 7 mountHead_6",
                        "desc": "test mountHead"
                    },
                    {
                        "equipped": false,
                        "type": "mount",
                        "variation": 2,
                        "tier": 4,
                        "name": "Tier 4 mount_2",
                        "mountHead": "naked",
                        "mountBody": "naked",
                        "mountFeet": "naked",
                        "mountPet": "naked"
                    }
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
    mountEquipment(){
        return (
            <React.Fragment>
                <h3 className="mount-slot">Type</h3>
                <p className="equipped-item">{this.state.player.mount.type}</p>
                <h3 className="mount-slot">Head</h3>
                <p className="equipped-item">{this.state.player.mount.mountHead.name}</p>
                <h3 className="mount-slot">Body</h3>
                <p className="equipped-item">{this.state.player.mount.mountBody.name}</p>
                <h3 className="mount-slot">Feet</h3>
                <p className="equipped-item">{this.state.player.mount.mountFeet.name}</p>
                <h3 className="mount-slot">Pet</h3>
                <p className="equipped-item">{this.state.player.mount.mountPet.name}</p>
            </React.Fragment>
        );
    }

    handleEquipItem(e){
        // update the player object in state to set the equipped value of the item object to true
        // and then add that item's tier and type to the appropriate equipped slot
        var clickedItem = e.currentTarget.dataset.itemIndex;
        this.setState(function(prevState, props){
            var newState = this.rebuildPlayer(prevState, 
                "name", "abilities", "mount", "cash", "crateCash", "lastBox", "boxesOpened",
                "equipped","loot"
            );
            var newEquipped = newState.player.loot[clickedItem];
            newEquipped.equipped = true;
            // check if the item is a mount, if it is it needs to update the mount properties
            if(newEquipped.type === "mount"){
                // check if the slot is already full, if so put the old item back in invetory
                if (newState.player.mount.equipped) {
                    newState.player.mount.equipped = false;
                    // if unequipping a mount, remove all the items the mount is currently wearing
                    // this may unblanace the game. Mount items may need to be bound to the mount
                    // as soon as they are applied.
                    if(newState.player.mount.mountHead.equipped){
                        newState.player.mount.mountHead.equipped = false;
                        newState.player.mount.mountHead = "naked";
                    } 
                        
                    if(newState.player.mount.mountBody.equipped){
                        newState.player.mount.mountBody.equipped = false;
                        newState.player.mount.mountBody = "naked";
                    }
                        
                    if(newState.player.mount.mountFeet.equipped){
                        newState.player.mount.mountFeet.equipped = false;
                        newState.player.mount.mountFeet = "naked";
                    }
                    if(newState.player.mount.mountPet.equipped){
                        newState.player.mount.mountPet.equipped = false;
                        newState.player.mount.mountPet = "naked";  
                    }
                }     
                newState.player.mount = newEquipped;
            }
            else if (newEquipped.type === "mountHead" || newEquipped.type === "mountBody" || 
                newEquipped.type === "mountFeet" || newEquipped.type === "mountPet" )
            {
                if(newState.player.mount[newEquipped.type] !== "naked"){
                    newState.player.mount[newEquipped.type].equipped = false;
                }
                newState.player.mount[newEquipped.type] = newEquipped;
            }
            else{
                // check if the slot is already full, if so put the old item back in invetory
                if (newState.player.equipped[newEquipped.type] !== "naked") {
                    newState.player.equipped[newEquipped.type].equipped = false;
                }
                newState.player.equipped[newEquipped.type] = newEquipped;
            }
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
                    <section className="stats-block">
                        <table className="stat-table">
                            <tbody>
                                <tr className="stat-row">
                                    <td className="stat-label">Strength</td>
                                    <td className="stat-value">
                                        {this.state.player.abilities.str}
                                    </td>
                                </tr>
                                <tr className="stat-row">
                                    <td className="stat-label">Dexterity</td>
                                    <td className="stat-value">
                                        {this.state.player.abilities.dex}
                                    </td>
                                </tr>
                                <tr className="stat-row">
                                    <td className="stat-label">Intelligence</td>
                                    <td className="stat-value">
                                        {this.state.player.abilities.int}
                                    </td>
                                </tr>
                                <tr className="stat-row">
                                    <td className="stat-label">Wisdom</td>
                                    <td className="stat-value">
                                        {this.state.player.abilities.wis}
                                    </td>
                                </tr>
                                <tr className="stat-row">
                                    <td className="stat-label">Sex Appeal</td>
                                    <td className="stat-value">
                                        {this.state.player.abilities.sex}
                                    </td>
                                </tr>
                                <tr className="stat-row">
                                    <td className="stat-label">Personal Brand</td>
                                    <td className="stat-value">
                                        {this.state.player.abilities.brand}
                                    </td>
                                </tr>
                                <tr className="stat-row">
                                    <td className="stat-label">Luck</td>
                                    <td className="stat-value">
                                        {this.state.player.abilities.luck}
                                    </td>
                                </tr>
                                <tr className="stat-row">
                                    <td className="stat-label">Credit Score</td>
                                    <td className="stat-value">
                                        {this.state.player.abilities.credit}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section className="equipped-items">
                        <div className="equipment-slot">
                            <h2 className="slot-title">Head</h2>
                            <p className="equipped-item">{this.state.player.equipped.head.name}</p>
                        </div>
                        <div className="equipment-slot">
                            <h2 className="slot-title">Hands</h2>
                            <p className="equipped-item">{this.state.player.equipped.hands.name}</p>
                        </div>
                        <div className="equipment-slot">
                            <h2 className="slot-title">Shoulders</h2>
                            <p className="equipped-item">{this.state.player.equipped.shoulders.name}</p>
                        </div>
                        <div className="equipment-slot">
                            <h2 className="slot-title">Chest</h2>
                            <p className="equipped-item">{this.state.player.equipped.chest.name}</p>
                        </div>
                        <div className="equipment-slot">
                            <h2 className="slot-title">Legs</h2>
                            <p className="equipped-item">{this.state.player.equipped.legs.name}</p>
                        </div>
                        <div className="equipment-slot">
                            <h2 className="slot-title">Knees</h2>
                            <p className="equipped-item">{this.state.player.equipped.knees.name}</p>
                        </div>
                        <div className="equipment-slot">
                            <h2 className="slot-title">Feet</h2>
                            <p className="equipped-item">{this.state.player.equipped.feet.name}</p>
                        </div>
                        <div className="equipment-slot">
                            <h2 className="slot-title">Neck</h2>
                            <p className="equipped-item">{this.state.player.equipped.neck.name}</p>
                        </div>
                        <div className="equipment-slot">
                            <h2 className="slot-title">Finger 1</h2>
                            <p className="equipped-item">{this.state.player.equipped.finger1.name}</p>
                        </div>
                        <div className="equipment-slot">
                            <h2 className="slot-title">Finger 2</h2>
                            <p className="equipped-item">{this.state.player.equipped.finger2.name}</p>
                        </div>
                        <div className="equipment-slot">
                            <h2 className="slot-title">Left back pocket </h2>
                            <p className="equipped-item">{this.state.player.equipped.lbPocket.name}</p>
                        </div>
                        <div className="equipment-slot">
                            <h2 className="slot-title">Backpack</h2>
                            <p className="equipped-item">{this.state.player.equipped.backpack.name}</p>
                        </div>
                        <div className="equipment-slot">
                            <h2 className="slot-title">Companion pet</h2>
                            <p className="equipped-item">{this.state.player.equipped.companion.name}</p>
                        </div>
                        <div className="equipment-slot mount">
                            <h2 className="slot-title">Mount</h2>
                            { 
                                this.state.player.mount.equipped
                                    ? this.mountEquipment() : <p className="equipped-itme">None</p>
                            }

                        </div>
                    </section>
                    <section className="inventory">
                        <ul className="inventory-list">
                            {
                                this.state.player.loot.map((loot, index)=>{
                                    if(!loot.equipped){
                                        return (
                                            <li className="intentory-item" key={`0${index}_${loot.type}`}>
                                                <p className="inventory-item-name">
                                                    {loot.name}
                                                </p>
                                                <button className="inventory-equip-btn" 
                                                    onClick={this.handleEquipItem} data-item-index={index}>
                                                        Equip 
                                                </button>
                                                <button className="inventory-junk-btn" 
                                                    data-item-index={index}>
                                                        Junk
                                                </button>
                                            </li>
                                        );
                                    }
                                    return undefined;
                                })
                            }
                        </ul>
                    </section>
                </section>
            </React.Fragment>
        );
    }
}

export default App;
