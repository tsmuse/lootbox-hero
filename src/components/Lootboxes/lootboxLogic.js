import { rolldice } from "../../Helpers";
const LOOTIDS = generateLootIDs();

export function generateBoxes() {
    // generate the items in the box
    const item1 = rolldice(10000),
        item2 = rolldice(10000),
        item3 = rolldice(10000),
        item4 = rolldice(10000),
        bonus = rolldice(100) < 17 ? rolldice(10000) : undefined;


    // evaluate each item based on it's loot table
    var lootbox = [];
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
        lootbox.push(buildNewItem(item));
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
        lootbox.push(buildNewItem(item));
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
        lootbox.push(buildNewItem(item));
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
        lootbox.push(buildNewItem(item));
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
        lootbox.push(buildNewItem(item));
    }

    return lootbox;
}

export function buildNewItem(item) {
    const { type, sprite } = this.getItemType();
    item["id"] = lootID.next().value;
    item["equipped"] = false;
    item["type"] = type;
    item["sprite"] = sprite;
    item["variation"] = rolldice(10);
    item["icon"] = "https://dummyimage.com/64/ff00b7/fff.png";
    // These entries will eventually be values in a loot table look up based on type and
    // variation. For now just filling them with placeholders.
    item["name"] = this.state.lootTable[item.type][item.tier][item.variation].name;
    item["desc"] = this.state.lootTable[item.type][item.tier][item.variation].desc;
    item["stats"] = this.state.lootTable[item.type][item.tier][item.variation].stats;
    item["set"] = this.state.lootTable[item.type][item.tier][item.variation].set;
    if (item.type === "mount") {
        item["mountHead"] = "naked";
        item["mountBody"] = "naked";
        item["mountFeet"] = "naked";
        item["mountPet"] = "naked";
    }
    return item;
}

export function getItemType() {
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
    // WIll need to figure out a better way to assign a sprite to each relevant piece of loot
    // Right now just dropping them in to the output of the table because I only have one 
    // sprite for each loot type that displays in the UI. Note: that a loot sprite is what
    // displays on the character in the player screen when it is wearing an item, and that
    // is different than the loot icon, which displays in the equipped and inventory screens 
    const lootType = rolldice(20);

    switch (lootType) {
        case 1:
            return { type: "head", sprite: "http://localhost:3000/placeholder_bot_head_item.png" };
        case 2:
            return { type: "hands", sprite: "http://localhost:3000/placeholder_bot_hands_item.png" };
        case 3:
            return { type: "shoulders", sprite: "" };
        case 4:
            return { type: "chest", sprite: "http://localhost:3000/placeholder_bot_chest_item.png" };
        case 5:
            return { type: "legs", sprite: "http://localhost:3000/placeholder_bot_legs_item.png" };
        case 6:
            return { type: "knees", sprite: "" };
        case 7:
            return { type: "feet", sprite: "http://localhost:3000/placeholder_bot_feet_item.png" };
        case 8:
            return { type: "neck", sprite: "" };
        // There are two fingers here because there are two finger slots on the character and every
        // slot has an equal chance of coming up by design
        case 9:
            return { type: "finger", sprite: "" };
        case 10:
            return { type: "finger", sprite: "" };
        case 11:
            return { type: "lbPocket", sprite: "" };
        case 12:
            return { type: "backpack", sprite: "" };
        case 13:
            return { type: "companion", sprite: "http://localhost:3000/placeholder_bot_companion_item.png" };
        case 14:
            return { type: "weaponMain", sprite: "" };
        case 15:
            return { type: "weaponOff", sprite: "" };
        case 16:
            return {
                type: "mount",
                sprite: {
                    base: "https://dummyimage.com/256/ff00b7/fff.png&text=mount+sprite",
                    mountHead: "",
                    mountBody: "",
                    mountFeet: "",
                    mountPet: ""
                }
            };
        case 17:
            return { type: "mountHead", sprite: "" };
        case 18:
            return { type: "mountBody", sprite: "" };
        case 19:
            return { type: "mountFeet", sprite: "" };
        case 20:
            return { type: "mountPet", sprite: "" };
        default:
            return undefined;
    }
}

export function* generateLootIDs() {
    var seed = Math.round(Date.now() * Math.random() + this.props.playerCash);
    while (true) {
        yield seed;
        seed++;
    }

}