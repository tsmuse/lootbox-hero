/* global jest test */
import *  as LootboxLogic from "./lootboxLogic";
import { currentId } from "async_hooks";

describe("test name and description generation", ()=>{
    test("prettyStat value should always be one of the dictonary values", ()=>{
        const prettyAttributesDict = [
            "Strength",
            "Dextarity",
            "Intelligence",
            "Wisdom",
            "Sex Appeal",
            "Personal Brand",
            "Luck",
            "Credit Score"
        ],
            modifier = "_str",
            type = LootboxLogic.getItemType(),
            tier = 1,
            title = LootboxLogic.generateNameDesc(modifier, type, tier).name;
        
        //console.log(title);
        const generatedAttribute = title.split("Embiggended ")[1];
        // console.log(generatedAttribute);
        expect(prettyAttributesDict).toContain(generatedAttribute);
    });
    test("prettyItemType value should always be one of the dictionary values", ()=>{
        const typeDict = {
            "head": ["Hat", "Helmet", "Beanie", "Hood"],
            "chest": ["Shirt", "Tunic", "Vest", "Cardigan"],
            "legs": ["Pants", "Shorts", "Skirt", "Overalls"],
            "feet": ["Shoes", "Boots", "Flip-flops", "Slippers"],
            "hands": ["Gloves", "Wraps", "Fingerless-gloves"],
            "knees": ["Knee-Pads", "Knee-Brace"],
            "companion": ["Cat", "Rat", "Bat", "Wombat"],
            "shoulders": ["Paldrons", "Epilettes", "Flowing Cape", "Cloak"],
            "backpack": ["Backpack", "Purse", "Messenger Bag", "Duffle"],
            "lbPocket": ["Wallet", "Smartphone", "Pocketwatch", "Pocket Lint", "Chain Wallet"],
            "weaponMain": ["Sword", "Club", "Megafist", "Knuckles", "Pool Noodle"],
            "weaponOff": ["Scope", "Hand Sensor", "Shield", "Wet Sponge"],
            "finger": ["Diamond Ring", "Silver Ring", "Unobtanium Ring", "Class Ring"],
            "neck": ["Choker", "Gold Chain", "Bike Chain", "Hemp Necklace"],
            "mount": ["Horse", "Smart Car", "Fixie", "Mythical Beast", "Broomstick"],
            "mountHead": ["Mount Head"],
            "mountBody": ["Mount Body"],
            "mountFeet": ["Mount Feet"],
            "mountPet": ["Mount Pet"]
        },
        modifier = "_str",
        type = LootboxLogic.getItemType(),
        tier = 1,
        title = LootboxLogic.generateNameDesc(modifier, type, tier).name;

        // console.log(title);
        const generatedType = title.split(" of")[0];
        expect(typeDict[type]).toContain(generatedType);

    });
});

describe("test sprite generation", () => {
    test("Only displayable items should have sprites", () => {
        const type = "backpack",
            result = LootboxLogic.generateSprite(type);
        
        console.log(`type: ${type}, result: ${result}`);
        expect(result).toBe("");
    });
});

describe("test stats generation", () => {
    // generateStats needs: 
    //      tier:  (int between 1 and 7), 
    //      type: (string that matches one of the 20 item type strings,
    //      bonusRoll: a random int between 1 and 100
    //      patternRoll: a random int between 1 and 7 
    test("mount has no stats", () => {
        const tier = 1,
            type = "mount",
            bonusRoll = 10,
            patternRoll = 7,
            passingResult = { stats: {}, modifier: "_mount" };

        const result = LootboxLogic.generateStats(tier, type, bonusRoll, patternRoll);
        expect(result).toMatchObject(passingResult);
    });

    test("heads et al. bonus points works", ()=>{
        const tier = 1,
            type = "head",
            bonusRoll = 25,
            patternRoll = 3,
            passingResult = {
                stats: {
                    "str": 54,
                    "dex": 54,
                    "int": 0,
                    "wis": 0,
                    "sex": 54,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                modifier: "enchanted_outerbeauty"
            };
        
        const result = LootboxLogic.generateStats(tier, type, bonusRoll, patternRoll);
        expect(result).toMatchObject(passingResult);
    });

    test("companion bonus points works", () => {
        const tier = 1,
            type = "companion",
            bonusRoll = 15,
            patternRoll = 3,
            passingResult = {
                stats: {
                    "str": 57,
                    "dex": 57,
                    "int": 0,
                    "wis": 0,
                    "sex": 57,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                modifier: "enchanted_outerbeauty"
            };

        const result = LootboxLogic.generateStats(tier, type, bonusRoll, patternRoll);
        expect(result).toMatchObject(passingResult);
    });

    test("backpack et al bonus points works", () => {
        const tier = 1,
            type = "backpack",
            bonusRoll = 8,
            patternRoll = 3,
            passingResult = {
                stats: {
                    "str": 61,
                    "dex": 61,
                    "int": 0,
                    "wis": 0,
                    "sex": 61,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                modifier: "enchanted_outerbeauty"
            };

        const result = LootboxLogic.generateStats(tier, type, bonusRoll, patternRoll);
        expect(result).toMatchObject(passingResult);
    });

    test("weapon bonus points works", () => {
        const tier = 1,
            type = "weaponMain",
            bonusRoll = 6,
            patternRoll = 3,
            passingResult = {
                stats: {
                    "str": 68,
                    "dex": 68,
                    "int": 0,
                    "wis": 0,
                    "sex": 68,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                modifier: "enchanted_outerbeauty"
            };

        const result = LootboxLogic.generateStats(tier, type, bonusRoll, patternRoll);
        expect(result).toMatchObject(passingResult);
    });

    test("jewlery bonus points works", () => {
        const tier = 1,
            type = "finger",
            bonusRoll = 2,
            patternRoll = 3,
            passingResult = {
                stats: {
                    "str": 85,
                    "dex": 85,
                    "int": 0,
                    "wis": 0,
                    "sex": 85,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                modifier: "enchanted_outerbeauty"
            };

        const result = LootboxLogic.generateStats(tier, type, bonusRoll, patternRoll);
        expect(result).toMatchObject(passingResult);
    });

    test("mount equipment bonus points works", () => {
        const tier = 1,
            type = "mountHead",
            bonusRoll = 5,
            patternRoll = 3,
            passingResult = {
                stats: {
                    "str": 71,
                    "dex": 71,
                    "int": 0,
                    "wis": 0,
                    "sex": 71,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                modifier: "enchanted_outerbeauty"
            };

        const result = LootboxLogic.generateStats(tier, type, bonusRoll, patternRoll);
        expect(result).toMatchObject(passingResult);
    });

    test("mount pet bonus points works", () => {
        const tier = 1,
            type = "mountPet",
            bonusRoll = 1,
            patternRoll = 3,
            passingResult = {
                stats: {
                    "str": 96,
                    "dex": 96,
                    "int": 0,
                    "wis": 0,
                    "sex": 96,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                modifier: "enchanted_outerbeauty"
            };

        const result = LootboxLogic.generateStats(tier, type, bonusRoll, patternRoll);
        expect(result).toMatchObject(passingResult);
    });

    test("randomStat helper function is returning a stat string", ()=>{
        const stats = ["str", "dex", "int", "wis", "sex", "brand", "luck", "credit"];
        const [result] = LootboxLogic.randomStat(1);
        
        expect(stats).toContain(result);
    });

    test("randomStat helper function is returning no duplicates", ()=>{
        const stats = ["str", "dex", "int", "wis", "sex", "brand", "luck", "credit"];
        const [res1, res2, res3] = LootboxLogic.randomStat(3);
        
        expect(stats).toContain(res1);
        expect(stats).toContain(res2);
        expect(stats).toContain(res3);
        expect(res1).not.toEqual(res2);
        expect(res1).not.toEqual(res3);
        expect(res2).not.toEqual(res3);
    });

    test("all-in items putting all their points in selected stat", ()=>{
        const tier = 1, 
            type = "head",
            bonusRoll = 25,
            patternRoll = 1,
            expectedStatValue = 163,
            stats = ["str", "dex", "int", "wis", "sex", "brand", "luck", "credit"];

        const result = LootboxLogic.generateStats(tier, type, bonusRoll, patternRoll);
        const selectedAttribute = result.modifier.split("_")[1];
        expect(stats).toContain(selectedAttribute);
        expect(result.stats[selectedAttribute]).toBe(expectedStatValue);
    });

    test("all-in + credit cannot exist for tier 6 items", ()=>{
        const tier = 6,
            type = "head",
            bonusRoll = 30,
            patternRoll = 2,
            expectedModifier = "_outerbeauty";

        const result = LootboxLogic.generateStats(tier, type, bonusRoll, patternRoll);
        
        expect(result.modifier).toBe(expectedModifier);
    });

    test("all-in + credit cannot exist for tier 7 items", () => {
        const tier = 7,
            type = "head",
            bonusRoll = 30,
            patternRoll = 2,
            expectedModifier = "_outerbeauty";

        const result = LootboxLogic.generateStats(tier, type, bonusRoll, patternRoll);

        expect(result.modifier).toBe(expectedModifier);
    });

    test("cursed item is setting selected item to negative value",()=>{
        const tier = 1,
            type = "head",
            bonusRoll = 30,
            patternRoll = 7,
            stats = ["str", "dex", "int", "wis", "sex", "brand", "luck", "credit"],
            expectedCurseValue = -75,
            result = LootboxLogic.generateStats(tier, type, bonusRoll, patternRoll),
            cursedAttribute = result.modifier.split("_")[2];

            expect(stats).toContain(cursedAttribute);
            expect(result.stats[cursedAttribute]).toBe(expectedCurseValue);

    });

});

describe("item generation from a set", () => {
    test("", () => {
    });
});