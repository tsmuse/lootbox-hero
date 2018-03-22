import React, { Component } from "react";

class Lootboxes extends Component {
    constructor(props){
        super(props);
        this.handleOpenBoxes = this.handleOpenBoxes.bind(this);
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
            let item = {};
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
            item["type"] = this.getItemType();
            lootbox.push(item);
        }
        {
            let item = {};
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
            item["type"] = this.getItemType();
            lootbox.push(item);
        }
        {
            let item = {};
            // item3 loot table
            if (item3 >= 1 && item3 < 2982) {
                item["tier"] = 6;
            }
            else {
                item["tier"] = 7;
            }
            item["type"] = this.getItemType();
            lootbox.push(item);
        }
        {
            let item = {};
            // item4 loot table
            if (item4 >= 1 && item4 < 1002) {
                item["tier"] = 6;
            }
            else {
                item["tier"] = 7;
            }
            item["type"] = this.getItemType();
            lootbox.push(item);
        }
        if (bonus) {
            let item = {};
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
            item["type"] = this.getItemType();
            lootbox.push(item);
        }

        return lootbox;
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
        const lootType = this.rolldice(200);
        var item;

        if (lootType >= 1 && lootType < 11) {
            item = `Head_${lootType % 10}`;
        }
        else if (lootType >= 11 && lootType < 21) {
            item = `Hands_${lootType % 10}`;
        }
        else if (lootType >= 21 && lootType < 31) {
            item = `Shoulders_${lootType % 10}`;
        }
        else if (lootType >= 31 && lootType < 41) {
            item = `Chest_${lootType % 10}`;
        }
        else if (lootType >= 41 && lootType < 51) {
            item = `Legs_${lootType % 10}`;
        }
        else if (lootType >= 51 && lootType < 61) {
            item = `Knees_${lootType % 10}`;
        }
        else if (lootType >= 61 && lootType < 71) {
            item = `Feet_${lootType % 10}`;
        }
        else if (lootType >= 71 && lootType < 81) {
            item = `Meck_${lootType % 10}`;
        }
        else if (lootType >= 81 && lootType < 91) {
            item = `Finger_1_${lootType % 10}`;
        }
        else if (lootType >= 91 && lootType < 101) {
            item = `Finger_2_${lootType % 10}`;
        }
        else if (lootType >= 101 && lootType < 111) {
            item = `Left_Back_Pocket_${lootType % 10}`;
        }
        else if (lootType >= 111 && lootType < 121) {
            item = `Backpack_${lootType % 10}`;
        }
        else if (lootType >= 121 && lootType < 131) {
            item = `Companion_pet_${lootType % 10}`;
        }
        else if (lootType >= 131 && lootType < 141) {
            item = `Weapon_main_${lootType % 10}`;
        }
        else if (lootType >= 141 && lootType < 151) {
            item = `Weapon_off_${lootType % 10}`;
        }
        else if (lootType >= 151 && lootType < 161) {
            item = `Mount_${lootType % 10}`;
        }
        else if (lootType >= 161 && lootType < 171) {
            item = `Mount_head_${lootType % 10}`;
        }
        else if (lootType >= 171 && lootType < 181) {
            item = `Mount_body_${lootType % 10}`;
        }
        else if (lootType >= 181 && lootType < 191) {
            item = `Mount_feet_${lootType % 10}`;
        }
        else {
            item = `Mount_pet_${lootType % 10}`;
        }

        return item;
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
                                    <h3 className="item-name">{item.type}</h3>
                                    <p className="item-desc">{`This is a fancy new Tier ${item.tier} ${item.type}. Lucky!`}</p>
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