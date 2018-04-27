import { rolldice } from "../../Helpers";
const LOOTIDS = generateLootIDs();

// Function: generateBoxes() -- this is the core function that generates a lootbox
//           Rolls against the 5 different loot tables that make up a single look box to generate 
//           the tier of items to populate the box. This is the only exported function, everything 
//           else is a helper for generateBoxes().
export default function generateBoxes() {
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

// Function: buildNewItem(item) - an item factory function that takes am item object that has only
//           a tier value and creates a fully functioning loot item object.
export function buildNewItem(item) {
    const type = getItemType(),
        iconPath = "http://localhost:3000/uiAssets/icons/loot/";

    item["equipped"] = false;
    item["type"] = type;
    if (type === "mount") {
        item["mountHead"] = "naked";
        item["mountBody"] = "naked";
        item["mountFeet"] = "naked";
        item["mountPet"] = "naked";
    }
    //item["icon"] = `${iconPath}${type}.png`;
    item["icon"] = "https://dummyimage.com/64/ff00b7/fff.png";
    // check to see if it should be a set item from the set table
    // if yes, build from the set table instead of the generic item algorithm 
    if(rolldice(20) === 20){
        const {sprite, name, desc, stats, set} = buildWithSetItem(type);
        item["sprite"] = sprite;
        item["name"] = name;
        item["desc"] = desc;
        item["stats"] = stats;
        item["set"] = set;
    }
    else {
        // assign a sprite to the item based on it's type
        item["sprite"] = generateSprite(item.type);;
        // based on item tier and type, generate the stats for the item and assign them
        const { stats, modifier } = generateStats(item.tier, item.type, rolldice(100), rolldice(7));
        item["stats"] = stats;
        // generate the name, ID, and description of the item from it's stats
        const { name, desc } = generateNameDesc(modifier, item.type, item.tier);
        item["name"] = name;
        item["desc"] = desc;
    }
    item["id"] = `${type}_${LOOTIDS.next().value}`;

    return item;
}

// Function: buildWithSetItem(type) -- builds an item using a set table instead of randomly
//           currently a placeholder function until I write the set items tables
export function buildWithSetItem(type){
    return { 
        sprite: "",
        name: `Placeholder Set ${type}`,
        desc: `Bad luck, this is a placeholder for a set item. It will be awesome when it's done.`,
        stats: {
            "str": 0,
            "dex": 0,
            "int": 0,
            "wis": 0,
            "sex": 0,
            "brand": 0,
            "luck": 0,
            "credit": 0
        },
        set: "placeholder"
    };
}
// Function: generateNameDesc(modifier, type, tier) -- Generates an item's name and description 
//           values based on the item's stat pattern (modifier), type, and tier
export function generateNameDesc(modifier, type, tier){
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
    const prettyAttributesDict = {
        "str": "Strength",
        "dex": "Dextarity",
        "int": "Intelligence",
        "wis": "Wisdom",
        "sex": "Sex Appeal",
        "brand": "Personal Brand",
        "luck": "Luck",
        "credit": "Credit Score"  
    };

    let itemName = "",
        itemDesc = "";
    // pick a type
    let typeList = typeDict[type];
    let prettyItemType = `${typeList[rolldice(typeList.length) - 1]}`;
    if (pattern === "mount"){
        itemName = prettyItemType;
        itemDesc = `Your mount is like a friend, and this ${prettyItemType} is no exception. What ` 
            +`is a friend but someone to help you carry your burdens? This friend is no exception...`
            +`it will let you use and carry more loot.`;
    }
    else if(pattern === "outerbeauty"){
        // name should be like: Enchanted TYPE of Outer Beauty
        
        const enchantedDesc = enchanted 
            ? "and you couldn't look better because it's also been enchanted by the RNG gods"
            : "";
        itemName = `${enchanted ? "Enchanted " : ""}${prettyItemType} of Outer Beauty`;
        itemDesc = `This delightful ${prettyItemType} really shows off your abs AND your assets`
            +`${enchantedDesc}. Sometimes it's totally what's on the outside that counts, especially`
            +` when you look this good.`;
    }
    else if (pattern === "innerbeauty"){
        // Name should be like : Enchanted TYPE of Innter Beauty
        const enchantedDesc = enchanted
            ? `, even moreso than other ${prettyItemType}s because it's enchanted for your pleasure`
            : "";
        itemName = `${enchanted ? "Enchanted " : ""}${prettyItemType} of Inner Beauty`;
        itemDesc = `This smartly appointed ${prettyItemType} accentuates your huge intellect and `
            +`shapely personality${enchantedDesc}. Nothing is more beutiful than smarts, and you `
            +`can proove it with math.`;
    }
    else if (pattern === "lucky"){
        // Name should be like: Lucky Enchanted TYPE
        const enchantedDesc = enchanted 
            ? " Enchanted to boot, so it doesn't suck."
            : "";
        itemName = `Lucky ${enchanted ? "Enchanted" : ""} ${prettyItemType}`;
        itemDesc += `You lucky duck, you found a fabulous ${prettyItemType} of luck!`
            + `${enchantedDesc} Use this item and you won't be stuck, you lucky lucky duck...` 
            +`because it makes you lucky, if you didn't pick that up.`;
    }
    else if (pattern === "titan"){
        // Name should be like: Titan of Industry's Enchanted TYPE
        const enchantedDesc = enchanted 
            ? "It's enchanted too, giving you more capital to leverage your hostile takovers! "
            : "";
        itemName = `Titan of Industry's ${enchanted ? "Enchanted" : ""} ${prettyItemType}`;
        itemDesc = `What is best in life? To crush your enemies, see their assets transfered into ` 
            +`your offshore accounts, and hear the lamentations of their stock brokers. `
            +`${enchantedDesc}With this ${prettyItemType} you will be able to do just that.`;
    }
    else if (pattern === "cursed"){
        // Name should be like: Enchanted TYPE with STAT Curse
        const prettyStat = prettyAttributesDict[xstat];
        const enchantedDesc = enchanted 
            ? "It's enchanted though, so silver linings."
            : "";
        itemName = `${enchanted ? "Enchanted " : ""}${prettyItemType} with ${prettyStat} Curse`;
        itemDesc = `Awwwww, this sweet sweet loot is cursed. Long ago an adventurer just like you `
            +`offended a short-tempered pixi, who cursed all their loot for all time. Even this `
            +`${prettyItemType} wasn't spared. Your ${prettyStat} will be weak, my dude. `
            +`${enchantedDesc}`;
    }
    else{
        // This is just an all-in or all-in + credit item
        // Name should be like: Nioce Echanted TYPE of embiggened STAT
        const prettyStat = prettyAttributesDict[pattern];
        let enchantedDesc;
        if (xstat === "credit" && !enchanted) {
            enchantedDesc = " It's extra noice too, people seem to trust you more with money "
                +"when they see it.";
        }
        else if (xstat !== "credit" && enchanted) {
            enchantedDesc = " It's enchanted too, so you have that going for you too.";
        }
        else if (xstat === "credit" && enchanted) {
            enchantedDesc = " It's extra noice AND enchanted. It could only be better if it "
                +"was...you know, better.";
        }
        else{
            enchantedDesc = "";
        } 
        itemName = `${xstat === "credit" ? "Noice " : ""}${enchanted ? "Enchanted " : ""}`
            +`${prettyItemType} of Embiggended ${prettyStat}`;
        itemDesc = `It's a pretty standard ${prettyItemType} with a pretty standard buff for your `
            +`${prettyStat}.${enchantedDesc}`;
    }
    
    return { name: itemName, desc: itemDesc };
}

// Function: generateStats(tier, type)
//           This is the initial ruleset for item generation, subjet to change as playtesting 
//           happens. Items getpoints to spend based on tier: 
//                      Math.round(Math.pow(2.3, (7-tier) + tier)
//           Items of different types have a chance to give bonus points:
//              * Heads, chests, legs, feet, knees, and hands have a 25% chance to give a a small 
//                bonus of 2 points per tier (14 points at tier 1, 12 points at tier 2...)
//              * Companions have a 15% chance to give a small bonus of 3 points per tier
//              * Backpacks, left-back-pockets have an 8% chance to give a medium bonus of 5 points
//                per tier
//              * Weapons have a 6% chance to give a medium bonus of 8 points per tier
//              * Jewlery (neck and fingers) has a 2% chance to give a large bonus of 15 points
//                per tier
//              * Mounts have no stats, they are just addition gear slots, so they have no bonus
//              * Mount heads, bodies, and feet have a 6% chance to give a medium bonus of 9 points 
//                per tier
//              * Mount pets have a 1% chance to give a large bonus of 20 points per tier
//
//          There are 7 main stat patterns that points can be allocated into:
//              * All-in: All points dumped into one stat
//              * All-in + credit: tiers 1-5 only have the possibility of dumping points into 
//                credit before dumping the rest into one stat
//              * Outer Beauty: points are distributed evenly between the physical attributes:
//                str, dex, sex
//              * Inner Beauty: points are distributed evenly between the mental attributes:
//                int, wis, sex
//              * Lucky Duck: half of the points are dumped into Luck, the rest are spread evenly 
//                across str, dex, sex, int, wis, and brand. Any remander goes into luck
//              * Titan of industry: Points are split evenly between the business attributes:
//                brand and credit
//              * Cursed: One random attribute takes a -50% of points and 150% of the points are 
//                distributed amount 2 random attributes. 
export function generateStats(tier, type, bonusRoll, patternRoll){
    // mounts have no stats, so they skip all this
    if(type !== "mount"){
        const basePoints = Math.round(Math.pow(2.3,(7-tier)) + tier);
        let itemBonus, modifier = "";
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
        // roll for enchantment
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
        else if((type === "mountHead" || type === "mountBody" || type === "mountFeet") && bonusRoll < 6 ){
            itemBonus = (8 - tier) * 9;
        }
        else if(type === "mountPet" && bonusRoll < 2){
            itemBonus = (8 - tier) * 20;
        }
        else {
            itemBonus = 0;
        }
        // generate stats blocks, modifier tag for name and desc generation
        if (itemBonus > 0)
            modifier = "enchanted";
        switch(patternRoll){
            case 1:{
                // All-in
                let [stat] = randomStat(1);
                statsTemplate[stat] = basePoints + itemBonus;
                modifier += `_${stat}`;
                break;
            }
            case 2:{
                // All-in + credit
                if(tier < 6){
                    let [stat] = randomStat(1),
                        credit = Math.round((basePoints + itemBonus)/3);
                    statsTemplate["credit"] = credit;
                    statsTemplate[stat] = basePoints + itemBonus - credit;
                    modifier += `_${stat}_credit`;
                    break;
                }
            }
                // intentionally falling through here if it's a tier 6 or 7 item
            case 3: {
                //Outer Beauty
                let pointsToAssign = Math.round((basePoints + itemBonus) / 3);
                statsTemplate["str"] = pointsToAssign;
                statsTemplate["dex"] = pointsToAssign;
                statsTemplate["sex"] = pointsToAssign;
                modifier += "_outerbeauty";
                break;
            }
            case 4:{
                //Inner beauty
                let pointsToAssign = Math.round((basePoints + itemBonus) / 3);
                statsTemplate["int"] = pointsToAssign;
                statsTemplate["wis"] = pointsToAssign;
                statsTemplate["sex"] = pointsToAssign;
                modifier += "_innerbeauty";
                break;
            }
            case 5:{
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
            }
            case 6:{
                //Titan of Industry
                let pointsToAssign = Math.round((basePoints + itemBonus) / 2);
                statsTemplate["credit"] = pointsToAssign;
                statsTemplate["brand"] = pointsToAssign;
                modifier += "_titan";
                break;
            }
            case 7:{
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
        }
        return { stats: statsTemplate, modifier};
    }
    else {
        return { stats: {}, modifier: "_mount"};
    }
}

//Function: randomStat(count) --  Returns count stats without duplicates
export function randomStat(count){
    let stats = ["str", "dex", "int", "wis", "sex", "brand", "luck", "credit"];
    if(count > stats.length)
        count = stats.length;
    let result = [];
    for(let i = 0; i < count; i++){
        let index = rolldice(stats.length) - 1;
        result.push(stats[index]);
        stats.splice(index, 1);
    }
    
    return result;
}

// Function: generateSprite(type) -- uses ype of icon to pick a sprite and UI icon for item
//           The initial idea is to make the names and the sprites generic enough per type to be 
//           able to mix and match them to create a larger variety of items with fewer assets. 
//           This may not actually work though, so it might need to be a bit smarter than it is now
//           about what it's picking.
export function generateSprite(type){
    
    const spritePath = "http://localhost:3000/uiAssets/sprites/",
        item = `${type}0${rolldice(1)}`;
    let sprite = "";
        
    if(type !== "finger" || type !== "neck" || type !== "knees" || type !== "lbPocket" 
        || type !== "backpack" || type !== "shoulders" || type !== "mount")
    {
        sprite = `${spritePath}${type}/${item}`;
    }
    else if(type === "mount"){
        sprite = {
                base: "https://dummyimage.com/256/ff00b7/fff.png&text=mount+sprite",
                mountHead: "",
                mountBody: "",
                mountFeet: "",
                mountPet: ""
            };
    }
    return sprite;
}

// Function: getItemType() -- Roll on the loot table to decide which type of item is in a loot slot
//           There are 20 loot types, each with an equal drop rate:
//          (1)Head, (2)Hands, (3)Shoulders, (4)Chest, (5)Legs, (6)Knees, 
//          (7)Feet, (8)Neck, (9)Finger 1, (10) Finger 2, (11) Left-back pocket, (12) Backpack, 
//          (13) Companion pet, (14) Weapon-main, (15) Weapon-off, (16) Mount, (17)Mount-head,
//          (18)Mount-body, (19)Mount-feet, (20)Mount-pet 
export function getItemType() {
    const lootType = rolldice(20);

    switch (lootType) {
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
        case (9 || 10):
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

//Function: generateLootIDs -- a generator function to create a random number to use in ID creation
function* generateLootIDs() {
    var seed = Math.round(Date.now() * Math.random());
    while (true) {
        yield seed;
        seed++;
    }

}