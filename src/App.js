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
        this.state = {
            "player" : this.props.player
        };
        this.handleLootboxChange = this.handleLootboxChange.bind(this);
        this.handleBuyLootbox = this.handleBuyLootbox.bind(this);
        this.handleEquipItem = this.handleEquipItem.bind(this);
        this.handleJunkItem = this.handleJunkItem.bind(this);
        this.BASE_ABILITIES = this.props.baseAbilities;
    }

    handleLootboxChange(lootbox){
        this.setState(function (prevState, props) {
            var newState = this.rebuildPlayer(prevState,
                "name", "abilities", "equipped", "mount", "cash", "crateCash", "score");
            newState.player["lastBox"] = lootbox;
            newState.player["boxesOpened"] = prevState.player.boxesOpened + 1;
            newState.player["unopenedBoxes"] = prevState.player.unopenedBoxes - 1;
            var inventory = prevState.player.loot;
            for(let item of lootbox){
                inventory[item.id] = item;
            }
            newState.player["loot"] = inventory;
            return newState;
        });

    }

    handleBuyLootbox(){
        // this will eventually need to move into the lootbox buy component that will be 
        // the real buy screen
        this.setState(function (prevState, props){
            var newState = this.rebuildPlayer(prevState);
            newState.player.cash -= 3;
            newState.player.unopenedBoxes += 1;
            newState = this.updateScore(newState);
            return newState;
        });
    }

    handleEquipItem(clickedItem) {
        // update the player object in state to set the equipped value of the item object to true
        // and then add that item's tier and type to the appropriate equipped slot
        //var clickedItem = e.currentTarget.dataset.itemIndex;
        this.setState(function (prevState, props) {
            var newState = this.rebuildPlayer(prevState);
            var newEquipped = newState.player.loot[clickedItem];
            newEquipped.equipped = true;
            newState = this.updateEquipped(newState, newEquipped);
            newState = this.updateAbilities(newState);
            // Need to actually figure out the scoring system this is just a placeholder
            newState = this.updateScore(newState);

            return newState;
        });
    }

    handleJunkItem(clickedItem){
        this.setState(function (prevState, props){
            var newState = this.rebuildPlayer(prevState);
            var newJunk = newState.player.loot[clickedItem];
            delete newState.player.loot[clickedItem];
            newState = this.calculateCrateCash(newState, newJunk);

            return newState;
        });
    }

    calculateCrateCash(newState, newJunk){
        switch(newJunk.tier){
        case 1:
            newState.player.crateCash += 100;
            break;
        case 2:
            newState.player.crateCash += 50;
            break;
        case 3:
            newState.player.crateCash += 25;
            break;
        case 4:
            newState.player.crateCash += 12;
            break;
        case 5:
            newState.player.crateCash += 6;
            break;
        case 6:
            newState.player.crateCash += 3;
            break;
        case 7:
            newState.player.crateCash += 2;
            break;
        default:
            break;
        }

        return newState;
    }

    generateBaseAbilities(){
        var newBase = {};
        var baseAbilities = this.BASE_ABILITIES;
        for(let score in baseAbilities){
            newBase[score] = baseAbilities[score];
        }
        return newBase;
    }
    rebuildPlayer(prevState, ...keys){
        // if no paramaters were given after prevState assume all 
        if(keys.length === 0){
            keys = ["abilities", "boxesOpened", "cash", "crateCash", "equipped", "lastBox", "loot",
                "mount", "name","score", "unopenedBoxes"];
        }
        var dupePlayer = {"player": {}};

        for(let key of keys){
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

    updateAbilities(newState){
        var newAbilities = this.generateBaseAbilities();
        for (let item in newState.player.equipped) {
            if (newState.player.equipped[item] !== "naked") {
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
    }

    updateScore(newState){
        var currentAbilities = newState.player.abilities;
        var baseAbilities = this.generateBaseAbilities();
        var scoreImprovement = 0;
        for(let score in currentAbilities){
            scoreImprovement += currentAbilities[score] - baseAbilities[score];
        }
        newState.player.score = scoreImprovement + newState.player.cash;
        return newState;
    }

    

    render() {
        return (
            <React.Fragment>
                <Lootboxes 
                    lootboxChangeHandler={this.handleLootboxChange} 
                    buyLootboxHandler={this.handleBuyLootbox}
                    lastBox={this.state.player.lastBox} 
                    playerCash={this.state.player.cash}
                    playerUnopenedBoxes={this.state.player.unopenedBoxes}/>
                <section className="character-sheet">
                    <CharacterStats playerAbilities={this.state.player.abilities} 
                        playerCash={this.state.player.cash}
                        playerCrateCash={this.state.player.crateCash} 
                        playerScore={this.state.player.score} 
                        playerUnopenedBoxes={this.state.player.unopenedBoxes} />
                    <CharacterEquipped playerEquipped={this.state.player.equipped} 
                        playerMount={this.state.player.mount} />
                    <CharacterInventory loot={this.state.player.loot} 
                        mountEquipped={this.state.player.mount.equipped}  
                        equipItemHandler={this.handleEquipItem} 
                        junkItemHandler={this.handleJunkItem} />
                </section>
            </React.Fragment>
        );
    }
}

export default App;
