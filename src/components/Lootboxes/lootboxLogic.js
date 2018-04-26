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

function buildNewItem(item) {
    const { type, sprite } = getItemType();

    item["equipped"] = false;
    item["type"] = type;
    if (item.type === "mount") {
        item["mountHead"] = "naked";
        item["mountBody"] = "naked";
        item["mountFeet"] = "naked";
        item["mountPet"] = "naked";
    }
    // check to see if it should be a set item from the set table
    // if yes, build from the set table instead of the generic item algorithm 
    if(rolldice(20) === 20){
        const {sprite, icon, name, desc, stats, set} = buildWithSetItem(type);
        item["sprite"] = sprite;
        item["icon"] = icon;
        item["name"] = name;
        item["desc"] = desc;
        item["stats"] = stats;
        item["set"] = set;
    }
    else {
        // assign a sprite and icon to the item based on it's type and tier
        const { sprite, icon } = generateSpriteIcon(item.type);
        item["sprite"] = sprite;
        item["icon"] = icon;
        // based on item tier and type, generate the stats for the item and assign them
        const { stats, modifier } = generateStats(item.tier, item.type);
        item["stats"] = stats;
        // generate the name, ID, and description of the item from it's stats
        const { name, desc } = generateNameDesc(modifier, item.type, item.tier);
        item["name"] = name;
        item["desc"] = desc;
        
        item["id"] = LOOTIDS.next().value;

    }
    item["id"] = generateItemID(name);
    
    return item;
}

function generateNameDesc(modifier, type, tier){
    const [enchanted, pattern, xstat] = modifier.split("_");
    // This probably needs to line in a DB somewhere?
    const typeDict = {
        "head" : ["Hat", "Helmet", "Beanie", "Hood"],
        "chest" : ["Shirt", "Tunic", "Vest", "Cardigan"],
        "legs" : ["Pants", "Shorts", "Skirt", "Overalls"],
        "feet" : ["Shoes", "Boots", "Flip-flops", "Slippers"],
        "hands" : ["Gloves", "Wraps", "Fingerless-gloves"],
        "knees" : ["Knee Pads", "Knee Brace"],
        "companion" : ["Cat", "Rat", "Bat", "Wombat"],
        "backpack" : ["Backpack", "Purse", "Messenger Bag", "Duffle"],
        "lbPocket" : ["Wallet", "Smartphone", "Pocketwatch", "Pocket Lint", "Chain Wallet"],
        "weaponMain" : ["Sword", "Club", "Megafist", "Knuckles", "Pool Noodle"],
        "weaponOff" : ["Scope", "Hand Sensor", "Sheild", "Wet Sponge"],
        "finger" : ["Diamond Ring", "Silver Ring", "Unobtanium Ring", "Class Ring"],
        "neck" : ["Choker", "Gold Chain", "Bike Chain", "Hemp Necklace"],
        "mount" : ["Horse", "Smart Car", "Fixie", "Mythical Beast", "Broomstick"],
        "mountHead" : ["Mount Head"],
        "mountBody" : ["Mount Body"],
        "mountFeet" : ["Mount Feet"],
        "mountPet" : ["Mount Pet"]
    };
    let itemName = "",
        itemDesc = "";
    if(enchanted)
        itemName += "Enchanted ";
    // pick a type
    let typeList = typeDict[type];
    let prettyItemType = `${typeList[rolldice(typeList.length) - 1]} `;
    if(pattern === "outerbeauty"){
        // name should be like: Enchanted TYPE of Outer Beauty
        itemName += `${prettyItemType} of Outer Beauty`;
        itemDesc = `This delightful ${prettyItemType} really shows off your abs and your assets`;
        if(enchanted){
            itemDesc += " and has been enchanted by the RNG gods to make you look even better."
        }
        else{
            itemDesc += ".";
        }
        itemDesc += "Sometimes it's totally what's on the outside that counts, especially when you look this good."
    }
    else if (pattern === "innerbeauty"){
        // Name should be like : Enchanted TYPE of Innter Beauty
    }
    else if (pattern === "lucky"){
        // Name should be like: Lucky Enchanted TYPE
    }
    else if (pattern === "titan"){
        // Name should be like: Titan of Industry's Enchanted TYPE
    }
    else if (pattern === "cursed"){
        // Name should be like: Enchanted TYPE with XSTAT Curse
    }
    else{
        // This is just an all-in or all-in + credit item
        // Name should be like: Nioce Echanted TYPE of embiggened STAT 
    }
}
function generateStats(tier, type){
    // This is the initial ruleset for item generation, subjet to change as playtesting happens
    // Items getpoints to spend based on tier: Math.round(Math.pow(2.3, (7-tier) + tier)
    // Items of different types have a chance to give bonus points:
    //          * Heads, chests, legs, feet, knees, and hands have a 25% chance to give a a small bonus
    //            of 2 points per tier (14 points at tier 1, 12 points at tier 2...)
    //          * Companions have a 15% chance to give a small bonus of 3 points per tier
    //          * Backpacks, left-back-pockets have an 8% chance to give a medium bonus of 5 points
    //            per tier
    //          * Weapons have a 6% chance to give a medium bonus of 8 points per tier
    //          * Jewlery (neck and fingers) has a 2% chance to give a large bonus of 15 points
    //          * per tier
    // There are 7 main stat patterns that points can be allocated into:
    //          * All-in: All points dumped into one stat
    //          * All-in + credit: tiers 1-5 only have the possibility of dumping points into 
    //                  credit before dumping the rest into one stat
    //          * Outer Beauty: points are distributed evenly between the physical attributes:
    //                  str, dex, sex
    //          * Inner Beauty: points are distributed evenly between the mental attributes:
    //                  int, wis, sex
    //          * Lucky Duck: half of the points are dumped into Luck, the rest are spread evenly 
    //                  across str, dex, sex, int, wis, and brand. Any remander goes into luck
    //          * Titan of industry: Points are split evenly between the business attributes:
    //                  brand and credit
    //          * Cursed: One random attribute takes a -50% of points and 150% of the points are 
    //                  distributed amount 2 random attributes. 

    // Roll bonus and check type to see if it applies based on type
    const bonusRoll = rolldice(100),
        basePoints = Math.round(Math.pow(2.3,(7-tier)) + tier);
    let itemBonus, modifier;
    let statsTemplate = {
        "str": 0,
        "dex": 0,
        "int": 0,
        "wis": 0,
        "sex": 0,
        "brand": 0,
        "luck": 0,
        "credit": 0
    };

    if ((type === "head" || type === "chest" || type === "legs" || type === "feet" ||
        type === "hands" || type === "knees") && bonusRoll < 26)
    {
        itemBonus = (8 - tier) * 2;
    }
    else if (type === "companion" && bonusRoll < 16){
        itemBonus = (8 - tier) * 3;
    } 
    else if ((type === "backpack" || type === "lbPocket") && bonusRoll < 9){
        itemBonus = (8 - tier) * 5;
    }
    else if ((type === "weaponMain" || type === "weaponOff") && bonusRoll < 7){
        itemBonus = (8 - tier) * 8;
    }
    else if ((type === "neck" || type === "finger") && bonusRoll < 3) {
        itemBonus = (8 - tier) * 15;
    }
    else {
        itemBonus = 0;
    }

    // Pick a stat spread pattern
    // Based patern selected, bonus points, and tier, generate a stats block and modifier for item name
    
    if (itemBonus > 0)
        modifier = "enchanted";
    switch(rolldice(7)){
        case 1:
            // All-in
            let [stat] = randomStat(1);
            statsTemplate[stat] = basePoints + itemBonus;
            modifier += stat;
            break;
        case 2:
            // All-in + credit
            if(tier < 6){
                let [stat] = randomStat(1),
                    credit = Math.round((basePoints + itemBonus)/3);
                statsTemplate["credit"] = credit;
                statsTemplate[stat] = basePoints + itemBonus - credit;
                modifier += `_${stat}_credit`;
                break;
            }
            // intentionally falling through here if it's a tier 6 or 7 item
        case 3: 
            //Outer Beauty
            let pointsToAssign = Math.round((basePoints + itemBonus) / 3);
            statsTemplate["str"] = pointsToAssign;
            statsTemplate["dex"] = pointsToAssign;
            statsTemplate["sex"] = pointsToAssign;
            modifier += "_outerbeauty";
            break;
        case 4:
            //Inner beauty
            let pointsToAssign = Math.round((basePoints + itemBonus) / 3);
            statsTemplate["int"] = pointsToAssign;
            statsTemplate["wis"] = pointsToAssign;
            statsTemplate["sex"] = pointsToAssign;
            modifier += "_innerbeauty";
            break;
        case 5:
            //Lucky Duck
            let toCredit = Math.round((basePoints + itemBonus) / 2);
            let pointsToAssign = Math.round(toCredit / 6);
            statsTemplate["credit"] = toCredit;
            statsTemplate["str"] = pointsToAssign;
            statsTemplate["dex"] = pointsToAssign;
            statsTemplate["sex"] = pointsToAssign;
            statsTemplate["int"] = pointsToAssign;
            statsTemplate["wis"] = pointsToAssign;
            statsTemplate["brand"] = pointsToAssign;
            modifier += "_lucky";
            break;
        case 6:
            //Titan of Industry
            let pointsToAssign = Math.round((basePoints + itemBonus) / 2);
            statsTemplate["credit"] = pointsToAssign;
            statsTemplate["brand"] = pointsToAssign;
            modifier += "_titan";
            break;
        case 7:
            //Cursed
            const curse = -1 * Math.round((basePoints + itemBonus) / 2),
                pointsToAssign = Math.round(((basePoints + itemBonus) * 1.5) / 2),
                [cursedStat, stat1, stat2] = randomStat(3);
            statsTemplate[cursedStat] = curse;
            statsTemplate[stat1] = pointsToAssign;
            statsTemplate[stat2] = pointsToAssign;
            modifier += `_cursed_${cursedStat}`;
            break;
    }
    // return stats block and modifier
    return { stats: statsTemplate, modifier};
}

// Returns count stats without duplicates
function randomStat(count){
    let stats = ["str", "dex", "int", "wis", "sex", "brand", "luck", "credit"];
    let result = [];
    for(let i = 0; i < count; i++){
        let index = rolldice(stats.length);
        result.push(stats[index]);
        stats.splice(index, 1);
    }
    return result;
}

function generateSpriteIcon(type){
    //this needs to be replaced when real icons are finished
    const tempIcon = "https://dummyimage.com/64/ff00b7/fff.png",
        spritePath = "http://localhost:3000/uiAssets/sprites/",
        iconPath = "http://localhost:3000/uiAssets/icons/loot/",
        item = `${type}0${rolldice(1)}`;
        
        // Only these types have a sprite image
        if(type === "head" || type === "chest" || type === "legs" || type === "feet" || 
            type === "hands" || type === "weaponMain" || type === "weaponOff" || 
            type === "companion")
        {
            return { sprite: `${spritePath}${type}/${item}`, icon: `${iconPath}${type}/${item}` }; 
        }
        else {
            // this is the real one, once I have icons
            // return { sprite: "", icon: `${iconPath}${type}/${item}` }; 
            return { sprite: "", icon: tempIcon }; 
        }
}

function getItemType() {
    // There are 20 loot types: (1)Head, (2)Hands, (3)Shoulders, (4)Chest, (5)Legs, (6)Knees, 
    // (7)Feet, (8)Neck, (9)Finger 1, (10) Finger 2, (11) Left-back pocket, (12) Backpack, 
    // (13) Companion pet, (14) Weapon-main, (15) Weapon-off (this inclues shields and quivers),
    // (16) Mount, (17)Mount-head, (18)Mount-body, (19)Mount-feet, (20)Mount-pet 
    // Each type has an equal drop chance

    // Will need to figure out a better way to assign a sprite to each relevant piece of loot
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
        case (9 || 10):
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

function* generateLootIDs() {
    var seed = Math.round(Date.now() * Math.random());
    while (true) {
        yield seed;
        seed++;
    }

}