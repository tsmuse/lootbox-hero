import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import "normalize.css";
import "./App.css";
import Lootboxes from "./Lootboxes";
import CharacterStats from "./CharacterStats";
import CharacterInventory from "./CharacterInventory";
import CharacterEquipped from "./CharacterEquipped";
import CrateStore from "./CrateStore";
import WorkGames from "./WorkGames";

// placeholder "pages" to stub out the rest of the pages needed
function Home(props){
    return(
        <div>
            <h1>Welcome to the Lootbox Hero Homepage!</h1>
            <p> 
                It's not finished...in fact it's not even started! But here are a few places you can
                go right now!
            </p>
            <Link to="/player">Player Page</Link>
        </div>
    );
}   
    
function GrindGames(props) {
    return (
        <div>
            <h1>Welcome to the Lootbox Hero Grind Games!</h1>
            <p>
                It's not finished...in fact it's not even started! But here are a few places you can
                go right now!
            </p>
            <Link to="/player">Player Page</Link>
        </div>
    );
}

// end placeholder "pages"

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            "isLoaded" : false,
            "player" : {}
        };

        this.handleLootboxChange = this.handleLootboxChange.bind(this);
        this.handleBuyLootbox = this.handleBuyLootbox.bind(this);
        this.handleEquipItem = this.handleEquipItem.bind(this);
        this.handleJunkItem = this.handleJunkItem.bind(this);
        this.handleUnequipItem = this.handleUnequipItem.bind(this);
        this.handleBuyItem = this.handleBuyItem.bind(this);
    }
    // This load will need to go into a login screen of some kind, but for now putting it here
    componentDidMount() {
        if(localStorage.getItem("player") && localStorage.getItem("player") !== "{}"){
            // alert("premount: " + JSON.stringify(this.state.player));
            // alert("mount: " + localStorage.getItem("player"));
            this.setState({"player" : JSON.parse(localStorage.getItem("player")), isLoaded:true});
        }
        else {
            const loadPlayer = fetch("http://localhost:3000/stubs/playerStub.json");
            // loadBaseStats = fetch("http://localhost:3000/stubs/baseAbilitiesStub.json");

            loadPlayer.then(result => result.json())
                .then(
                    (result) => {
                        localStorage.setItem("player",JSON.stringify(result));
                        this.setState({
                            "player": result
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            error
                        });
                    }
                )
               // seperated this out for now in case I need to load more json, although I may be 
               // about to use Promise.all since I'm blocking on the load...
                .then(() => {
                    this.setState({ "isLoaded": true });
                });
        }   
    }
    componentDidUpdate(){
        // alert("updating" + JSON.stringify(this.state.player));
        const currentPlayerState = JSON.stringify(this.state.player);

        if(localStorage.getItem("player") !== currentPlayerState){
            localStorage.setItem("player", currentPlayerState);
        }

        const gameResult = localStorage.getItem("testGame");
        if (gameResult) {
            this.updateCashPostGameCycle(gameResult);
        }

    }
    componentWillUnmount(){
        // alert("unmount: " + JSON.stringify(this.state.player));
        localStorage.setItem("player", JSON.stringify(this.state.player));
    }

    updateCashPostGameCycle(gameResult){
        var result = JSON.parse(gameResult);
        localStorage.removeItem("testGame");
        this.setState(function (prevState, props){
            var newState = this.rebuildPlayer(prevState);
            newState.player.cash += result.cash;

            return newState;
        });
    }
    render(){
        const { error, isLoaded, player } = this.state;
        if(error){
            return <div> Error {error.message}</div>;
        }
        else if(!isLoaded){
            return <div>Loading...</div>;
        }
        else{
            return (
                <Router>
                    <React.Fragment>
                        <nav className="top-nav">
                            <ul className="top-nav-list">
                                <li className="top-nav-link">
                                    <Link to="/player">Player</Link>
                                </li>
                                <li className="top-nav-link">
                                    <Link to="/lootboxes">Loot boxes</Link>
                                </li>
                                <li className="top-nav-link">
                                    <Link to="/crate-store">CrateCash<sup>tm</sup> Store</Link>
                                </li>
                                <li className="top-nav-link">
                                   <Link to="/work">Work to earn cash</Link>
                                </li>
                            </ul>
                        </nav>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/work" component={WorkGames} />
                        <Route exact path="/grind" component={GrindGames} />
                        <Route exact path="/crate-store" render={props => (
                            <CrateStore playerCrateCash={this.state.player.crateCash}
                                buyItemHandler={this.handleBuyItem} />
                        )} />
                        <Route exact path="/player" render={props => (
                            
                            <section className="character-sheet">
                                <CharacterStats playerAbilities={this.state.player.abilities}
                                    playerCash={this.state.player.cash}
                                    playerCrateCash={this.state.player.crateCash}
                                    playerScore={this.state.player.score}
                                    playerUnopenedBoxes={this.state.player.unopenedBoxes} />
                                <CharacterEquipped playerEquipped={this.state.player.equipped}
                                    playerMount={this.state.player.mount}
                                    unequipItemHandler={this.handleUnequipItem} />
                                <CharacterInventory loot={this.state.player.loot}
                                    mountEquipped={this.state.player.mount.equipped}
                                    equipItemHandler={this.handleEquipItem}
                                    junkItemHandler={this.handleJunkItem} />
                            </section>
                        )} />
                        <Route exact path="/lootboxes" render={props => (
                            <Lootboxes
                                lootboxChangeHandler={this.handleLootboxChange}
                                buyLootboxHandler={this.handleBuyLootbox}
                                lastBox={this.state.player.lastBox}
                                playerCash={this.state.player.cash}
                                playerUnopenedBoxes={this.state.player.unopenedBoxes} />
                        )} />
                    </React.Fragment>
                </Router>
            );
        }
    }
    handleLootboxChange(lootbox) {
        this.setState(function (prevState, props) {
            var newState = this.rebuildPlayer(prevState);
            newState.player["lastBox"] = lootbox;
            newState.player["boxesOpened"] = prevState.player.boxesOpened + 1;
            newState.player["unopenedBoxes"] = prevState.player.unopenedBoxes - 1;
            var inventory = prevState.player.loot;
            for (let item of lootbox) {
                inventory[item.id] = item;
            }
            newState.player["loot"] = inventory;
            return newState;
        });

    }

    handleBuyLootbox() {
        // this will eventually need to move into the lootbox buy component that will be 
        // the real buy screen
        this.setState(function (prevState, props) {
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
            newState = this.addEquipped(newState, newEquipped);
            newState = this.updateAbilities(newState);
            // Need to actually figure out the scoring system this is just a placeholder
            newState = this.updateScore(newState);

            return newState;
        });
    }

    handleJunkItem(clickedItem) {
        this.setState(function (prevState, props) {
            var newState = this.rebuildPlayer(prevState);
            var newJunk = newState.player.loot[clickedItem];
            delete newState.player.loot[clickedItem];
            newState = this.calculateCrateCash(newState, newJunk);

            return newState;
        });
    }

    handleUnequipItem(clickedItem) {
        this.setState(function (prevState, props) {
            var newState = this.rebuildPlayer(prevState);
            var unequippedItem = newState.player.loot[clickedItem];
            unequippedItem.equipped = false;
            newState = this.removeEquipped(newState, unequippedItem);
            newState = this.updateAbilities(newState);
            newState = this.updateScore(newState);
            return newState;
        });
    }

    handleBuyItem(boughtItem){
        this.setState(function (prevState, props) {
            var newState = this.rebuildPlayer(prevState);
            newState.player.loot[boughtItem.id] = boughtItem.item;
            newState.player.crateCash -= boughtItem.price;
            return newState;
        });
    }

    removeEquipped(newState, unequippedItem) {
        if (unequippedItem.type !== "mount") {
            if (unequippedItem.type === "mountHead" || unequippedItem.type === "mountBody"
                || unequippedItem.type === "mountFeet" || unequippedItem.type === "mountpet") {
                newState.player.mount[unequippedItem.type] = "naked";
            }
            else if (unequippedItem.type === "finger") {
                if (newState.player.equipped.finger1 === unequippedItem) {
                    newState.player.equipped.finger1 = "naked";
                }
                else {
                    newState.player.equipped.finger2 = "naked";
                }
            }
            else {
                newState.player.equipped[unequippedItem.type] = "naked";
            }
        }
        else {
            newState.player.mount = { "type": "mount", "equipped": false };
        }

        return newState;
    }

    calculateCrateCash(newState, newJunk) {
        switch (newJunk.tier) {
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

    generateBaseAbilities() {
        var newBase = {};
        var baseAbilities = this.state.player.BASE_ABILITIES;
        for (let score in baseAbilities) {
            newBase[score] = baseAbilities[score];
        }
        return newBase;
    }
    rebuildPlayer(prevState) {
        // if no paramaters were given after prevState assume all 
        
        var keys = ["abilities", "BASE_ABILITIES", "boxesOpened", "cash", "crateCash", "equipped", 
            "lastBox", "loot", "mount", "name", "score", "unopenedBoxes"];
        var dupePlayer = { "player": {} };

        for (let key of keys) {
            dupePlayer.player[key] = prevState.player[key];
        }

        return dupePlayer;
    }

    addEquipped(newState, newEquipped) {
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
                let finger2 = newState.player.equipped["finger2"];
                newState.player.equipped["finger1"].equipped = false;
                newState.player.equipped["finger1"] = finger2;
                newState.player.equipped["finger2"] = newEquipped;
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

    updateAbilities(newState) {
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
        if (newState.player.mount.equipped) {
            if (newState.player.mount.mountBody !== "naked") {
                newAbilities = this.updateAbilitiesMountEquipment(
                    newState.player.mount.mountBody.stats, newAbilities);
            }
            if (newState.player.mount.mountFeet !== "naked") {
                newAbilities = this.updateAbilitiesMountEquipment(
                    newState.player.mount.mountFeet.stats, newAbilities);
            }
            if (newState.player.mount.mountHead !== "naked") {
                newAbilities = this.updateAbilitiesMountEquipment(
                    newState.player.mount.mountHead.stats, newAbilities);
            }
            if (newState.player.mount.mountPet !== "naked") {
                newAbilities = this.updateAbilitiesMountEquipment(
                    newState.player.mount.mountPet.stats, newAbilities);
            }
        }
        newState.player.abilities = newAbilities;

        return newState;
    }

    updateAbilitiesMountEquipment(itemStats, newAbilities) {
        newAbilities.str += itemStats.str;
        newAbilities.dex += itemStats.dex;
        newAbilities.int += itemStats.int;
        newAbilities.wis += itemStats.wis;
        newAbilities.sex += itemStats.sex;
        newAbilities.brand += itemStats.brand;
        newAbilities.luck += itemStats.luck;
        newAbilities.credit += itemStats.credit;

        return newAbilities;
    }

    updateScore(newState) {
        var currentAbilities = newState.player.abilities;
        var baseAbilities = this.generateBaseAbilities();
        var scoreImprovement = 0;
        for (let score in currentAbilities) {
            scoreImprovement += currentAbilities[score] - baseAbilities[score];
        }
        newState.player.score = scoreImprovement + newState.player.cash;
        return newState;
    }
}

export default App;