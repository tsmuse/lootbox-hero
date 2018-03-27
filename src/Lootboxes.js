import React, { Component } from "react";
import LootTable from "./config/LootTable";


class Lootboxes extends Component {
    constructor(props){
        super(props);
        this.handleOpenBoxes = this.handleOpenBoxes.bind(this);
        // this is a super basic version of the loot tables. Most Likely will end up in the backend
        // as an API to call, but for now this is what it is. 
        // Currently each tier is represented by the position in the array. Each item's statblock object is
        // in each tier
        this.lootTable = LootTable; 
        this.lootID = this.generateLootIDs();
    }
    *generateLootIDs(){
        var seed = 0;
        while(true){
            yield seed;
            seed ++;
        }
        
    }
    generateBoxes() {
        // generate the items in the box
        const item1 = this.rolldice(10000),
            item2 = this.rolldice(10000),
            item3 = this.rolldice(10000),
            item4 = this.rolldice(10000),
            bonus = this.rolldice(100) < 17 ? this.rolldice(10000) : undefined;


        // evaluate each item based on it's loot table
        const lootbox = [];
        {
            let item = { "equipped" : false };
            // item1 loot table
            if (item1 >= 1 && item1 < 328) {
                item["tier"] = 3;
            }
            else if (item1 >= 328 && item1 < 795) {
                item["tier"] = 4;
            }
            else if (item1 >= 795 && item1 < 1539) {
                item["tier"] = 5;
            }
            else if (item1 >= 1539 && item1 < 6947) {
                item["tier"] = 6;
            }
            else {
                item["tier"] = 7;
            }
            lootbox.push(this.buildNewItem(item));
        }
        {
            let item = { "equipped" : false };
            // item2 loot table
            if (item2 >= 1 && item2 < 10) {
                item["tier"] = 2;
            }
            else if (item2 >= 10 && item2 < 663) {
                item["tier"] = 3;
            }
            else if (item2 >= 663 && item2 < 1508) {
                item["tier"] = 4;
            }
            else {
                item["tier"] = 5;
            }
            lootbox.push(this.buildNewItem(item));
        }
        {
            let item = { "equipped" : false };
            // item3 loot table
            if (item3 >= 1 && item3 < 2982) {
                item["tier"] = 6;
            }
            else {
                item["tier"] = 7;
            }
            lootbox.push(this.buildNewItem(item));
        }
        {
            let item = { "equipped" : false };
            // item4 loot table
            if (item4 >= 1 && item4 < 1002) {
                item["tier"] = 6;
            }
            else {
                item["tier"] = 7;
            }
            lootbox.push(this.buildNewItem(item));
        }
        if (bonus) {
            let item = { "equipped" : false };
            if (bonus >= 1 && bonus < 145) {
                item["tier"] = 1;
            }
            else if (bonus >= 145 && bonus < 1401) {
                item["tier"] = 2;
            }
            else if (bonus >= 1401 && bonus < 4349) {
                item["tier"] = 3;
            }
            else {
                item["tier"] = 4;
            }
            lootbox.push(this.buildNewItem(item));
        }

        return lootbox;
    }

    buildNewItem(item) {
        item["id"] = this.lootID.next().value;
        item["type"] = this.getItemType();
        item["variation"] = this.rolldice(10);
        // These entries will eventually be values in a loot table look up based on type and
        // variation. For now just filling them with placeholders.
        item["name"] = this.lootTable[item.type][item.tier][item.variation].name;
        item["desc"] = this.lootTable[item.type][item.tier][item.variation].desc;
        item["stats"] = this.lootTable[item.type][item.tier][item.variation].stats;
        item["set"] = this.lootTable[item.type][item.tier][item.variation].set;
        if (item.type === "mount") {
            item["mountHead"] = "naked";
            item["mountBody"] = "naked";
            item["mountFeet"] = "naked";
            item["mountPet"] = "naked";
        }
        return item;
    }

    getItemType() {
        // this will eventually need to be blown out into a full fledged loot table
        // right now it's just going to spit out the item type plus the number 1-10 of that
        // item in each loot type

        // There are 20 loot types: (1)Head, (2)Hands, (3)Shoulders, (4)Chest, (5)Legs, (6)Knees, 
        // (7)Feet, (8)Neck, (9)Finger 1, (10) Finger 2, (11) Left-back pocket, (12) Backpack, 
        // (13) Companion pet, (14) Weapon-main, (15) Weapon-off (this inclues shields and quivers),
        // (16) Mount, (17)Mount-head, (18)Mount-body, (19)Mount-feet, (20)Mount-pet 
        // Each type has an equal drop chance, and there are 10 varriants per type

        // Roll a d200 to figure out which type, this will probably need to change once there are
        // actual items in each one? Maybe I can just switch on lootType % 10 to get the specifics?
        // TBD.
        const lootType = this.rolldice(20);
        
        switch(lootType){
        case 1: 
            return "head";
        case 2:
            return "hands";
        case 3:
            return "shoulders";
        case 4:
            return "chest";  
        case 5:
            return "legs";
        case 6:
            return "knees";
        case 7:
            return "feet";
        case 8:
            return "neck";
        // There are two fingers here because there are two finger slots on the character and every
        // slot has an equal chance of coming up by design
        case 9:
            return "finger";
        case 10:
            return "finger";
        case 11:
            return "lbPocket";
        case 12:
            return "backpack";
        case 13:
            return "companion";
        case 14:
            return "weaponMain";
        case 15:
            return "weaponOff";
        case 16:
            return "mount";
        case 17:
            return "mountHead";
        case 18:
            return "mountBody";
        case 19:
            return "mountFeet";
        case 20:
            return "mountPet";
        default:
            return undefined;
        }        
    }

    rolldice(dice) {
        if (!Number.isNaN(dice)) {
            var min = Math.ceil(1);
            var max = Math.floor(dice);

            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return undefined;
    }

    handleOpenBoxes() {
        const lootbox = this.generateBoxes();
        this.props.lootboxChangeHandler(lootbox);
    }

    render(){
        var boxToRender = this.props.lastBox;
        return (
            <section className="lootboxes">
                <button className="open-boxes-btn" onClick={this.handleOpenBoxes}>Open Boxes</button>
                <ul className="loot-list">
                    {boxToRender.map(function (item, index) {
                        return (
                            <li className="loot-item" key={`item_${index}`}>
                                <h2 className="item-label">{`Item ${index + 1}`}</h2>
                                <div className="item-card">
                                    <h3 className="item-name">{item.name}</h3>
                                    <p className="item-desc">{item.desc}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    }
}

export default Lootboxes;