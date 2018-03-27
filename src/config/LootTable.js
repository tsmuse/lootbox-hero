// Structure of this object is: LootTable.itemType.Tier.Variation
// went with objects (as maps) here to be able to use the 1-based indexing that will be user-facing
// at this point I don't think I'm going to need to map or reduce the table, so it shouldn't matter
// most likely this will get turned into DB tables in the eventual backend app, so this structure
// will hopefully make that transition easier to automate.
var LootTable = {
    "head" : {
        1 : {
            1: {
                "name": "Tier 1 Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Head. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2 : {
                "name": "Tier 1 Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Head. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3 : {
                "name": "Tier 1 Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Head. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4 : {
                "name": "Tier 1 Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Head. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5 : {
                "name": "Tier 1 Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Head. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6 : {
                "name": "Tier 1 Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Head. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand":100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            }, 
            7 : {
                "name": "Tier 1 Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Head. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8 : {
                "name": "Tier 1 Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Head. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9 : {
                "name": "Tier 1 Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Head. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10 : {
                "name": "Tier 1 Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Head. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2 : {
            1 : {
                "name": "Tier 2 Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Head. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2 : {
                "name": "Tier 2 Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Head. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3 : {
                "name": "Tier 2 Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Head. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4 : {
                "name": "Tier 2 Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Head. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5 : {
                "name": "Tier 2 Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Head. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6 : {
                "name": "Tier 2 Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Head. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7 : {
                "name": "Tier 2 Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Head. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8 : {
                "name": "Tier 2 Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Head. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9 : {
                "name": "Tier 2 Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Head. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10 : {
                "name": "Tier 2 Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Head. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3 : {
            1 : {
                "name": "Tier 3 Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Head. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2 : {
                "name": "Tier 3 Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Head. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3 : {
                "name": "Tier 3 Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Head. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4 : {
                "name": "Tier 3 Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Head. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5 : {
                "name": "Tier 3 Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Head. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Head. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7 : {
                "name": "Tier 3 Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Head. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8 : {
                "name": "Tier 3 Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Head. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9 : {
                "name": "Tier 3 Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Head. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10 : {
                "name": "Tier 3 Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Head. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4 : {
            1 : {
                "name": "Tier 4 Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Head. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2 : {
                "name": "Tier 4 Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Head. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Head. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Head. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Head. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Head. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Head. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8 : {
                "name": "Tier 4 Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Head. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9 : {
                "name": "Tier 4 Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Head. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10 : {
                "name": "Tier 4 Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Head. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5 : {
            1 : {
                "name": "Tier 5 Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Head. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2 : {
                "name": "Tier 5 Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Head. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3 : {
                "name": "Tier 5 Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Head. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4 : {
                "name": "Tier 5 Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Head. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5 : {
                "name": "Tier 5 Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Head. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6 : {
                "name": "Tier 5 Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Head. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7 : {
                "name": "Tier 5 Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Head. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8 : {
                "name": "Tier 5 Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Head. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9 : {
                "name": "Tier 5 Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Head. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10 : {
                "name": "Tier 5 Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Head. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6 : {
            1 : {
                "name": "Tier 6 Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Head. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2 : {
                "name": "Tier 6 Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Head. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3 : {
                "name": "Tier 6 Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Head. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4 : {
                "name": "Tier 6 Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Head. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5 : {
                "name": "Tier 6 Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Head. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6 : {
                "name": "Tier 6 Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Head. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7 : {
                "name": "Tier 6 Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Head. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8 : {
                "name": "Tier 6 Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Head. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9 : {
                "name": "Tier 6 Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Head. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10 : {
                "name": "Tier 6 Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Head. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7 : {
            1 : {
                "name": "Tier 7 Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Head. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2 : {
                "name": "Tier 7 Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Head. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3 : {
                "name": "Tier 7 Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Head. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4 : {
                "name": "Tier 7 Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Head. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5 : {
                "name": "Tier 7 Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Head. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6 : {
                "name": "Tier 7 Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Head. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7 : {
                "name": "Tier 7 Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Head. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8 : {
                "name": "Tier 7 Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Head. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9 : {
                "name": "Tier 7 Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Head. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10 : {
                "name": "Tier 7 Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Head. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "hands" : {
        1: {
            1: {
                "name": "Tier 1 Hands Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Hands. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Hands Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Hands. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Hands Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Hands. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Hands Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Hands. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Hands Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Hands. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Hands Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Hands. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Hands Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Hands. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Hands Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Hands. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Hands Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Hands. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Hands Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Hands. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Hands Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Hands. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Hands Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Hands. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Hands Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Hands. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Hands Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Hands. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Hands Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Hands. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Hands Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Hands. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Hands Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Hands. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Hands Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Hands. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Hands Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Hands. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Hands Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Hands. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Hands Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Hands. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Hands Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Hands. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Hands Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Hands. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Hands Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Hands. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Hands Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Hands. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Hands Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Hands. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Hands Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Hands. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Hands Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Hands. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Hands Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Hands. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Hands Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Hands. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Hands Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Hands. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Hands Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Hands. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Hands Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Hands. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Hands Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Hands. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Hands Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Hands. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Hands Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Hands. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Hands Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Hands. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Hands Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Hands. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Hands Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Hands. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Hands Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Hands. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Hands Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Hands. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Hands Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Hands. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Hands Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Hands. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Hands Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Hands. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Hands Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Hands. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Hands Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Hands. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Hands Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Hands. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Hands Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Hands. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Hands Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Hands. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Hands Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Hands. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Hands Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Hands. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Hands Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Hands. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Hands Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Hands. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Hands Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Hands. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Hands Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Hands. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Hands Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Hands. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Hands Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Hands. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Hands Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Hands. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Hands Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Hands. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Hands Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Hands. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Hands Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Hands. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Hands Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Hands. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Hands Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Hands. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Hands Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Hands. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Hands Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Hands. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Hands Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Hands. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Hands Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Hands. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Hands Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Hands. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Hands Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Hands. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Hands Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Hands. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "shoulders" : {
        1: {
            1: {
                "name": "Tier 1 Shoulders Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Shoulders. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Shoulders Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Shoulders. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Shoulders Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Shoulders. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Shoulders Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Shoulders. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Shoulders Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Shoulders. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Shoulders Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Shoulders. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Shoulders Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Shoulders. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Shoulders Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Shoulders. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Shoulders Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Shoulders. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Shoulders Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Shoulders. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Shoulders Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Shoulders. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Shoulders Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Shoulders. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Shoulders Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Shoulders. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Shoulders Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Shoulders. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Shoulders Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Shoulders. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Shoulders Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Shoulders. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Shoulders Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Shoulders. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Shoulders Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Shoulders. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Shoulders Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Shoulders. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Shoulders Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Shoulders. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Shoulders Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Shoulders. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Shoulders Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Shoulders. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Shoulders Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Shoulders. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Shoulders Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Shoulders. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Shoulders Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Shoulders. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Shoulders Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Shoulders. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Shoulders Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Shoulders. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Shoulders Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Shoulders. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Shoulders Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Shoulders. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Shoulders Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Shoulders. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Shoulders Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Shoulders. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Shoulders Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Shoulders. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Shoulders Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Shoulders. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Shoulders Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Shoulders. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Shoulders Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Shoulders. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Shoulders Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Shoulders. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Shoulders Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Shoulders. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Shoulders Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Shoulders. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Shoulders Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Shoulders. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Shoulders Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Shoulders. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Shoulders Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Shoulders. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Shoulders Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Shoulders. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Shoulders Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Shoulders. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Shoulders Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Shoulders. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Shoulders Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Shoulders. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Shoulders Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Shoulders. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Shoulders Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Shoulders. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Shoulders Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Shoulders. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Shoulders Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Shoulders. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Shoulders Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Shoulders. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Shoulders Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Shoulders. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Shoulders Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Shoulders. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Shoulders Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Shoulders. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Shoulders Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Shoulders. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Shoulders Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Shoulders. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Shoulders Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Shoulders. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Shoulders Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Shoulders. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Shoulders Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Shoulders. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Shoulders Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Shoulders. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Shoulders Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Shoulders. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Shoulders Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Shoulders. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Shoulders Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Shoulders. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Shoulders Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Shoulders. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Shoulders Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Shoulders. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Shoulders Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Shoulders. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Shoulders Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Shoulders. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Shoulders Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Shoulders. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Shoulders Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Shoulders. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Shoulders Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Shoulders. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Shoulders Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Shoulders. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "chest" : {
        1: {
            1: {
                "name": "Tier 1 Chest Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Chest. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Chest Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Chest. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Chest Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Chest. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Chest Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Chest. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Chest Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Chest. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Chest Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Chest. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Chest Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Chest. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Chest Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Chest. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Chest Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Chest. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Chest Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Chest. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Chest Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Chest. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Chest Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Chest. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Chest Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Chest. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Chest Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Chest. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Chest Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Chest. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Chest Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Chest. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Chest Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Chest. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Chest Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Chest. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Chest Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Chest. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Chest Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Chest. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Chest Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Chest. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Chest Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Chest. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Chest Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Chest. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Chest Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Chest. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Chest Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Chest. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Chest Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Chest. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Chest Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Chest. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Chest Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Chest. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Chest Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Chest. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Chest Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Chest. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Chest Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Chest. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Chest Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Chest. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Chest Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Chest. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Chest Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Chest. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Chest Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Chest. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Chest Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Chest. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Chest Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Chest. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Chest Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Chest. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Chest Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Chest. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Chest Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Chest. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Chest Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Chest. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Chest Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Chest. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Chest Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Chest. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Chest Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Chest. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Chest Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Chest. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Chest Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Chest. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Chest Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Chest. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Chest Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Chest. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Chest Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Chest. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Chest Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Chest. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Chest Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Chest. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Chest Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Chest. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Chest Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Chest. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Chest Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Chest. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Chest Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Chest. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Chest Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Chest. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Chest Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Chest. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Chest Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Chest. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Chest Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Chest. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Chest Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Chest. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Chest Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Chest. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Chest Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Chest. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Chest Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Chest. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Chest Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Chest. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Chest Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Chest. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Chest Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Chest. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Chest Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Chest. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Chest Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Chest. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Chest Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Chest. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Chest Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Chest. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "legs" : {
        1: {
            1: {
                "name": "Tier 1 Legs Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Legs. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Legs Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Legs. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Legs Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Legs. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Legs Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Legs. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Legs Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Legs. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Legs Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Legs. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Legs Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Legs. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Legs Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Legs. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Legs Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Legs. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Legs Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Legs. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Legs Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Legs. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Legs Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Legs. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Legs Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Legs. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Legs Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Legs. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Legs Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Legs. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Legs Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Legs. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Legs Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Legs. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Legs Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Legs. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Legs Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Legs. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Legs Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Legs. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Legs Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Legs. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Legs Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Legs. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Legs Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Legs. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Legs Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Legs. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Legs Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Legs. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Legs Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Legs. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Legs Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Legs. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Legs Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Legs. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Legs Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Legs. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Legs Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Legs. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Legs Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Legs. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Legs Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Legs. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Legs Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Legs. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Legs Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Legs. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Legs Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Legs. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Legs Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Legs. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Legs Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Legs. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Legs Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Legs. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Legs Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Legs. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Legs Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Legs. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Legs Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Legs. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Legs Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Legs. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Legs Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Legs. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Legs Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Legs. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Legs Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Legs. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Legs Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Legs. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Legs Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Legs. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Legs Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Legs. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Legs Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Legs. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Legs Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Legs. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Legs Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Legs. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Legs Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Legs. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Legs Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Legs. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Legs Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Legs. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Legs Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Legs. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Legs Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Legs. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Legs Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Legs. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Legs Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Legs. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Legs Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Legs. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Legs Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Legs. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Legs Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Legs. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Legs Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Legs. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Legs Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Legs. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Legs Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Legs. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Legs Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Legs. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Legs Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Legs. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Legs Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Legs. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Legs Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Legs. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Legs Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Legs. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Legs Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Legs. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "knees" : {
        1: {
            1: {
                "name": "Tier 1 Knees Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Knees. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Knees Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Knees. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Knees Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Knees. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Knees Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Knees. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Knees Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Knees. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Knees Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Knees. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Knees Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Knees. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Knees Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Knees. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Knees Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Knees. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Knees Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Knees. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Knees Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Knees. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Knees Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Knees. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Knees Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Knees. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Knees Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Knees. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Knees Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Knees. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Knees Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Knees. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Knees Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Knees. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Knees Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Knees. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Knees Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Knees. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Knees Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Knees. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Knees Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Knees. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Knees Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Knees. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Knees Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Knees. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Knees Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Knees. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Knees Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Knees. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Knees Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Knees. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Knees Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Knees. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Knees Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Knees. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Knees Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Knees. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Knees Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Knees. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Knees Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Knees. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Knees Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Knees. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Knees Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Knees. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Knees Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Knees. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Knees Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Knees. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Knees Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Knees. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Knees Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Knees. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Knees Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Knees. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Knees Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Knees. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Knees Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Knees. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Knees Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Knees. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Knees Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Knees. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Knees Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Knees. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Knees Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Knees. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Knees Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Knees. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Knees Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Knees. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Knees Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Knees. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Knees Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Knees. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Knees Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Knees. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Knees Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Knees. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Knees Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Knees. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Knees Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Knees. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Knees Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Knees. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Knees Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Knees. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Knees Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Knees. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Knees Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Knees. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Knees Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Knees. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Knees Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Knees. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Knees Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Knees. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Knees Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Knees. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Knees Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Knees. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Knees Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Knees. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Knees Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Knees. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Knees Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Knees. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Knees Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Knees. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Knees Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Knees. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Knees Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Knees. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Knees Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Knees. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Knees Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Knees. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Knees Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Knees. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "feet" : {
        1: {
            1: {
                "name": "Tier 1 Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Feet. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Feet. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Feet. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Feet. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Feet. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Feet. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Feet. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Feet. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Feet. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Feet. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Feet. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Feet. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Feet. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Feet. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Feet. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Feet. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Feet. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Feet. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Feet. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Feet. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Feet. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Feet. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Feet. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Feet. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Feet. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Feet. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Feet. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Feet. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Feet. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Feet. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Feet. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Feet. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Feet. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Feet. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Feet. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Feet. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Feet. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Feet. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Feet. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Feet. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Feet. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Feet. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Feet. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Feet. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Feet. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Feet. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Feet. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Feet. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Feet. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Feet. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Feet. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Feet. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Feet. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Feet. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Feet. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Feet. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Feet. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Feet. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Feet. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Feet. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Feet. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Feet. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Feet. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Feet. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Feet. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Feet. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Feet. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Feet. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Feet. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Feet. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "neck" : {
        1: {
            1: {
                "name": "Tier 1 Neck Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Neck. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Neck Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Neck. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Neck Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Neck. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Neck Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Neck. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Neck Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Neck. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Neck Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Neck. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Neck Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Neck. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Neck Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Neck. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Neck Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Neck. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Neck Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Neck. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Neck Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Neck. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Neck Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Neck. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Neck Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Neck. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Neck Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Neck. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Neck Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Neck. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Neck Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Neck. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Neck Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Neck. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Neck Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Neck. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Neck Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Neck. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Neck Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Neck. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Neck Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Neck. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Neck Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Neck. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Neck Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Neck. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Neck Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Neck. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Neck Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Neck. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Neck Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Neck. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Neck Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Neck. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Neck Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Neck. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Neck Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Neck. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Neck Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Neck. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Neck Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Neck. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Neck Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Neck. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Neck Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Neck. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Neck Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Neck. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Neck Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Neck. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Neck Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Neck. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Neck Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Neck. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Neck Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Neck. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Neck Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Neck. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Neck Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Neck. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Neck Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Neck. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Neck Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Neck. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Neck Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Neck. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Neck Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Neck. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Neck Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Neck. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Neck Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Neck. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Neck Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Neck. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Neck Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Neck. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Neck Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Neck. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Neck Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Neck. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Neck Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Neck. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Neck Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Neck. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Neck Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Neck. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Neck Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Neck. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Neck Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Neck. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Neck Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Neck. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Neck Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Neck. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Neck Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Neck. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Neck Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Neck. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Neck Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Neck. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Neck Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Neck. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Neck Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Neck. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Neck Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Neck. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Neck Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Neck. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Neck Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Neck. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Neck Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Neck. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Neck Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Neck. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Neck Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Neck. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Neck Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Neck. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Neck Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Neck. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "finger" : {
        1: {
            1: {
                "name": "Tier 1 Finger Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Finger. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Finger Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Finger. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Finger Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Finger. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Finger Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Finger. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Finger Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Finger. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Finger Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Finger. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Finger Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Finger. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Finger Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Finger. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Finger Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Finger. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Finger Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Finger. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Finger Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Finger. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Finger Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Finger. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Finger Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Finger. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Finger Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Finger. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Finger Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Finger. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Finger Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Finger. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Finger Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Finger. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Finger Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Finger. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Finger Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Finger. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Finger Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Finger. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Finger Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Finger. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Finger Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Finger. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Finger Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Finger. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Finger Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Finger. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Finger Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Finger. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Finger Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Finger. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Finger Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Finger. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Finger Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Finger. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Finger Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Finger. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Finger Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Finger. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Finger Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Finger. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Finger Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Finger. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Finger Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Finger. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Finger Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Finger. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Finger Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Finger. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Finger Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Finger. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Finger Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Finger. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Finger Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Finger. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Finger Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Finger. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Finger Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Finger. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Finger Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Finger. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Finger Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Finger. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Finger Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Finger. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Finger Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Finger. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Finger Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Finger. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Finger Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Finger. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Finger Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Finger. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Finger Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Finger. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Finger Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Finger. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Finger Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Finger. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Finger Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Finger. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Finger Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Finger. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Finger Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Finger. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Finger Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Finger. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Finger Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Finger. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Finger Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Finger. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Finger Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Finger. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Finger Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Finger. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Finger Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Finger. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Finger Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Finger. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Finger Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Finger. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Finger Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Finger. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Finger Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Finger. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Finger Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Finger. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Finger Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Finger. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Finger Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Finger. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Finger Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Finger. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Finger Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Finger. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Finger Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Finger. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Finger Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Finger. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "lbPocket" : {
        1: {
            1: {
                "name": "Tier 1 Left Back Pocket Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Left Back Pocket. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Left Back Pocket Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Left Back Pocket. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Left Back Pocket Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Left Back Pocket. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Left Back Pocket Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Left Back Pocket. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Left Back Pocket Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Left Back Pocket. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Left Back Pocket Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Left Back Pocket. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Left Back Pocket Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Left Back Pocket. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Left Back Pocket Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Left Back Pocket. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Left Back Pocket Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Left Back Pocket. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Left Back Pocket Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Left Back Pocket. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Left Back Pocket Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Left Back Pocket. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Left Back Pocket Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Left Back Pocket. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Left Back Pocket Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Left Back Pocket. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Left Back Pocket Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Left Back Pocket. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Left Back Pocket Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Left Back Pocket. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Left Back Pocket Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Left Back Pocket. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Left Back Pocket Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Left Back Pocket. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Left Back Pocket Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Left Back Pocket. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Left Back Pocket Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Left Back Pocket. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Left Back Pocket Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Left Back Pocket. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Left Back Pocket Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Left Back Pocket. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Left Back Pocket Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Left Back Pocket. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Left Back Pocket Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Left Back Pocket. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Left Back Pocket Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Left Back Pocket. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Left Back Pocket Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Left Back Pocket. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Left Back Pocket Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Left Back Pocket. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Left Back Pocket Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Left Back Pocket. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Left Back Pocket Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Left Back Pocket. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Left Back Pocket Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Left Back Pocket. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Left Back Pocket Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Left Back Pocket. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Left Back Pocket Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Left Back Pocket. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Left Back Pocket Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Left Back Pocket. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Left Back Pocket Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Left Back Pocket. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Left Back Pocket Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Left Back Pocket. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Left Back Pocket Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Left Back Pocket. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Left Back Pocket Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Left Back Pocket. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Left Back Pocket Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Left Back Pocket. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Left Back Pocket Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Left Back Pocket. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Left Back Pocket Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Left Back Pocket. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Left Back Pocket Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Left Back Pocket. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Left Back Pocket Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Left Back Pocket. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Left Back Pocket Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Left Back Pocket. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Left Back Pocket Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Left Back Pocket. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Left Back Pocket Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Left Back Pocket. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Left Back Pocket Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Left Back Pocket. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Left Back Pocket Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Left Back Pocket. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Left Back Pocket Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Left Back Pocket. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Left Back Pocket Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Left Back Pocket. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Left Back Pocket Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Left Back Pocket. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Left Back Pocket Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Left Back Pocket. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Left Back Pocket Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Left Back Pocket. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Left Back Pocket Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Left Back Pocket. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Left Back Pocket Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Left Back Pocket. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Left Back Pocket Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Left Back Pocket. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Left Back Pocket Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Left Back Pocket. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Left Back Pocket Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Left Back Pocket. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Left Back Pocket Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Left Back Pocket. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Left Back Pocket Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Left Back Pocket. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Left Back Pocket Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Left Back Pocket. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Left Back Pocket Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Left Back Pocket. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Left Back Pocket Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Left Back Pocket. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Left Back Pocket Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Left Back Pocket. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Left Back Pocket Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Left Back Pocket. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Left Back Pocket Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Left Back Pocket. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Left Back Pocket Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Left Back Pocket. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Left Back Pocket Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Left Back Pocket. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Left Back Pocket Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Left Back Pocket. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Left Back Pocket Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Left Back Pocket. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Left Back Pocket Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Left Back Pocket. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Left Back Pocket Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Left Back Pocket. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "backpack": {
        1: {
            1: {
                "name": "Tier 1 Backpack Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Backpack. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Backpack Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Backpack. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Backpack Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Backpack. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Backpack Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Backpack. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Backpack Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Backpack. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Backpack Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Backpack. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Backpack Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Backpack. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Backpack Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Backpack. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Backpack Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Backpack. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Backpack Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Backpack. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Backpack Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Backpack. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Backpack Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Backpack. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Backpack Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Backpack. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Backpack Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Backpack. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Backpack Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Backpack. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Backpack Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Backpack. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Backpack Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Backpack. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Backpack Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Backpack. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Backpack Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Backpack. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Backpack Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Backpack. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Backpack Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Backpack. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Backpack Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Backpack. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Backpack Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Backpack. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Backpack Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Backpack. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Backpack Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Backpack. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Backpack Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Backpack. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Backpack Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Backpack. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Backpack Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Backpack. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Backpack Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Backpack. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Backpack Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Backpack. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Backpack Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Backpack. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Backpack Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Backpack. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Backpack Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Backpack. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Backpack Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Backpack. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Backpack Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Backpack. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Backpack Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Backpack. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Backpack Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Backpack. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Backpack Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Backpack. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Backpack Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Backpack. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Backpack Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Backpack. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Backpack Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Backpack. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Backpack Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Backpack. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Backpack Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Backpack. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Backpack Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Backpack. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Backpack Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Backpack. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Backpack Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Backpack. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Backpack Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Backpack. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Backpack Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Backpack. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Backpack Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Backpack. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Backpack Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Backpack. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Backpack Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Backpack. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Backpack Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Backpack. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Backpack Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Backpack. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Backpack Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Backpack. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Backpack Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Backpack. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Backpack Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Backpack. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Backpack Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Backpack. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Backpack Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Backpack. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Backpack Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Backpack. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Backpack Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Backpack. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Backpack Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Backpack. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Backpack Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Backpack. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Backpack Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Backpack. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Backpack Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Backpack. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Backpack Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Backpack. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Backpack Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Backpack. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Backpack Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Backpack. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Backpack Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Backpack. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Backpack Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Backpack. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Backpack Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Backpack. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "companion" : {
        1: {
            1: {
                "name": "Tier 1 Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Companion Pet. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Companion Pet. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Companion Pet. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Companion Pet. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Companion Pet. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Companion Pet. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Companion Pet. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Companion Pet. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Companion Pet. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Companion Pet. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Companion Pet. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Companion Pet. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Companion Pet. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Companion Pet. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Companion Pet. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Companion Pet. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Companion Pet. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Companion Pet. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Companion Pet. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Companion Pet. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Companion Pet. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Companion Pet. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Companion Pet. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Companion Pet. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Companion Pet. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Companion Pet. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Companion Pet. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Companion Pet. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Companion Pet. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Companion Pet. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Companion Pet. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Companion Pet. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Companion Pet. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Companion Pet. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Companion Pet. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Companion Pet. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Companion Pet. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Companion Pet. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Companion Pet. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Companion Pet. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Companion Pet. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Companion Pet. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Companion Pet. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Companion Pet. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Companion Pet. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Companion Pet. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Companion Pet. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Companion Pet. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Companion Pet. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Companion Pet. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Companion Pet. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Companion Pet. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Companion Pet. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Companion Pet. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Companion Pet. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Companion Pet. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Companion Pet. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Companion Pet. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Companion Pet. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Companion Pet. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Companion Pet. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Companion Pet. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Companion Pet. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Companion Pet. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Companion Pet. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Companion Pet. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Companion Pet. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Companion Pet. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Companion Pet. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Companion Pet. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "weaponMain" : {
        1: {
            1: {
                "name": "Tier 1 Main-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Main-hand Weapon. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Main-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Main-hand Weapon. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Main-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Main-hand Weapon. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Main-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Main-hand Weapon. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Main-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Main-hand Weapon. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Main-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Main-hand Weapon. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Main-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Main-hand Weapon. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Main-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Main-hand Weapon. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Main-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Main-hand Weapon. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Main-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Main-hand Weapon. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Main-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Main-hand Weapon. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Main-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Main-hand Weapon. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Main-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Main-hand Weapon. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Main-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Main-hand Weapon. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Main-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Main-hand Weapon. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Main-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Main-hand Weapon. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Main-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Main-hand Weapon. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Main-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Main-hand Weapon. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Main-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Main-hand Weapon. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Main-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Main-hand Weapon. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Main-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Main-hand Weapon. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Main-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Main-hand Weapon. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Main-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Main-hand Weapon. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Main-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Main-hand Weapon. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Main-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Main-hand Weapon. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Main-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Main-hand Weapon. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Main-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Main-hand Weapon. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Main-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Main-hand Weapon. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Main-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Main-hand Weapon. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Main-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Main-hand Weapon. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Main-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Main-hand Weapon. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Main-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Main-hand Weapon. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Main-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Main-hand Weapon. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Main-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Main-hand Weapon. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Main-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Main-hand Weapon. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Main-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Main-hand Weapon. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Main-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Main-hand Weapon. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Main-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Main-hand Weapon. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Main-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Main-hand Weapon. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Main-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Main-hand Weapon. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Main-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Main-hand Weapon. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Main-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Main-hand Weapon. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Main-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Main-hand Weapon. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Main-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Main-hand Weapon. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Main-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Main-hand Weapon. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Main-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Main-hand Weapon. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Main-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Main-hand Weapon. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Main-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Main-hand Weapon. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Main-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Main-hand Weapon. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Main-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Main-hand Weapon. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Main-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Main-hand Weapon. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Main-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Main-hand Weapon. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Main-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Main-hand Weapon. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Main-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Main-hand Weapon. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Main-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Main-hand Weapon. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Main-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Main-hand Weapon. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Main-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Main-hand Weapon. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Main-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Main-hand Weapon. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Main-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Main-hand Weapon. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Main-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Main-hand Weapon. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Main-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Main-hand Weapon. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Main-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Main-hand Weapon. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Main-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Main-hand Weapon. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Main-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Main-hand Weapon. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Main-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Main-hand Weapon. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Main-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Main-hand Weapon. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Main-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Main-hand Weapon. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Main-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Main-hand Weapon. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Main-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Main-hand Weapon. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Main-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Main-hand Weapon. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "weaponOff" : {
        1: {
            1: {
                "name": "Tier 1 Off-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Off-hand Weapon. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Off-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Off-hand Weapon. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Off-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Off-hand Weapon. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Off-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Off-hand Weapon. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Off-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Off-hand Weapon. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Off-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Off-hand Weapon. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Off-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Off-hand Weapon. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Off-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Off-hand Weapon. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Off-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Off-hand Weapon. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Off-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Off-hand Weapon. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Off-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Off-hand Weapon. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Off-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Off-hand Weapon. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Off-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Off-hand Weapon. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Off-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Off-hand Weapon. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Off-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Off-hand Weapon. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Off-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Off-hand Weapon. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Off-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Off-hand Weapon. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Off-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Off-hand Weapon. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Off-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Off-hand Weapon. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Off-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Off-hand Weapon. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Off-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Off-hand Weapon. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Off-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Off-hand Weapon. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Off-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Off-hand Weapon. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Off-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Off-hand Weapon. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Off-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Off-hand Weapon. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Off-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Off-hand Weapon. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Off-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Off-hand Weapon. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Off-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Off-hand Weapon. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Off-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Off-hand Weapon. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Off-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Off-hand Weapon. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Off-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Off-hand Weapon. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Off-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Off-hand Weapon. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Off-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Off-hand Weapon. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Off-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Off-hand Weapon. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Off-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Off-hand Weapon. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Off-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Off-hand Weapon. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Off-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Off-hand Weapon. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Off-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Off-hand Weapon. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Off-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Off-hand Weapon. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Off-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Off-hand Weapon. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Off-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Off-hand Weapon. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Off-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Off-hand Weapon. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Off-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Off-hand Weapon. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Off-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Off-hand Weapon. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Off-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Off-hand Weapon. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Off-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Off-hand Weapon. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Off-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Off-hand Weapon. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Off-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Off-hand Weapon. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Off-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Off-hand Weapon. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Off-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Off-hand Weapon. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Off-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Off-hand Weapon. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Off-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Off-hand Weapon. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Off-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Off-hand Weapon. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Off-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Off-hand Weapon. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Off-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Off-hand Weapon. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Off-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Off-hand Weapon. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Off-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Off-hand Weapon. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Off-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Off-hand Weapon. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Off-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Off-hand Weapon. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Off-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Off-hand Weapon. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Off-hand Weapon Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Off-hand Weapon. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Off-hand Weapon Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Off-hand Weapon. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Off-hand Weapon Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Off-hand Weapon. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Off-hand Weapon Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Off-hand Weapon. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Off-hand Weapon Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Off-hand Weapon. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Off-hand Weapon Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Off-hand Weapon. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Off-hand Weapon Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Off-hand Weapon. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Off-hand Weapon Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Off-hand Weapon. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Off-hand Weapon Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Off-hand Weapon. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Off-hand Weapon Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Off-hand Weapon. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "mount" : {
        1: {
            1: {
                "name": "Tier 1 Mount Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Mount. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Mount Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Mount. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Mount Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Mount. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Mount Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Mount. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Mount Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Mount. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Mount Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Mount. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Mount Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Mount. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Mount Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Mount. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Mount Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Mount. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Mount Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Mount. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Mount Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Mount. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Mount Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Mount. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Mount Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Mount. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Mount Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Mount. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Mount Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Mount. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Mount Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Mount. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Mount Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Mount. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Mount Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Mount. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Mount Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Mount. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Mount Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Mount. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Mount Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Mount. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Mount Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Mount. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Mount Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Mount. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Mount Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Mount. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Mount Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Mount. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Mount Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Mount. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Mount Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Mount. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Mount Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Mount. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Mount Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Mount. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Mount Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Mount. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Mount Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Mount. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Mount Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Mount. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Mount Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Mount. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Mount Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Mount. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Mount Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Mount. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Mount Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Mount. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Mount Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Mount. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Mount Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Mount. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Mount Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Mount. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Mount Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Mount. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Mount Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Mount. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Mount Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Mount. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Mount Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Mount. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Mount Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Mount. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Mount Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Mount. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Mount Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Mount. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Mount Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Mount. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Mount Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Mount. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Mount Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Mount. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Mount Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Mount. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Mount Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Mount. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Mount Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Mount. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Mount Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Mount. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Mount Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Mount. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Mount Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Mount. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Mount Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Mount. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Mount Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Mount. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Mount Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Mount. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Mount Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Mount. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Mount Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Mount. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Mount Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Mount. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Mount Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Mount. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Mount Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Mount. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Mount Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Mount. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Mount Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Mount. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Mount Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Mount. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Mount Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Mount. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Mount Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Mount. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Mount Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Mount. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Mount Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Mount. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "mountHead" : {
        1: {
            1: {
                "name": "Tier 1 Mount Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Mount Head. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Mount Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Mount Head. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Mount Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Mount Head. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Mount Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Mount Head. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Mount Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Mount Head. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Mount Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Mount Head. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Mount Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Mount Head. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Mount Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Mount Head. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Mount Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Mount Head. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Mount Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Mount Head. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Mount Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Mount Head. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Mount Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Mount Head. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Mount Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Mount Head. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Mount Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Mount Head. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Mount Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Mount Head. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Mount Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Mount Head. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Mount Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Mount Head. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Mount Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Mount Head. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Mount Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Mount Head. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Mount Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Mount Head. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Mount Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Mount Head. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Mount Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Mount Head. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Mount Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Mount Head. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Mount Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Mount Head. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Mount Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Mount Head. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Mount Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Mount Head. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Mount Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Mount Head. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Mount Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Mount Head. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Mount Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Mount Head. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Mount Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Mount Head. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Mount Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Mount Head. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Mount Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Mount Head. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Mount Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Mount Head. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Mount Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Mount Head. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Mount Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Mount Head. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Mount Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Mount Head. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Mount Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Mount Head. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Mount Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Mount Head. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Mount Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Mount Head. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Mount Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Mount Head. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Mount Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Mount Head. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Mount Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Mount Head. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Mount Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Mount Head. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Mount Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Mount Head. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Mount Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Mount Head. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Mount Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Mount Head. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Mount Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Mount Head. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Mount Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Mount Head. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Mount Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Mount Head. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Mount Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Mount Head. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Mount Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Mount Head. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Mount Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Mount Head. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Mount Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Mount Head. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Mount Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Mount Head. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Mount Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Mount Head. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Mount Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Mount Head. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Mount Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Mount Head. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Mount Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Mount Head. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Mount Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Mount Head. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Mount Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Mount Head. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Mount Head Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Mount Head. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Mount Head Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Mount Head. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Mount Head Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Mount Head. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Mount Head Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Mount Head. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Mount Head Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Mount Head. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Mount Head Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Mount Head. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Mount Head Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Mount Head. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Mount Head Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Mount Head. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Mount Head Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Mount Head. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Mount Head Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Mount Head. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "mountBody" : {
        1: {
            1: {
                "name": "Tier 1 Mount Body Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Mount Body. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Mount Body Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Mount Body. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Mount Body Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Mount Body. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Mount Body Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Mount Body. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Mount Body Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Mount Body. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Mount Body Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Mount Body. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Mount Body Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Mount Body. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Mount Body Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Mount Body. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Mount Body Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Mount Body. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Mount Body Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Mount Body. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Mount Body Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Mount Body. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Mount Body Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Mount Body. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Mount Body Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Mount Body. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Mount Body Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Mount Body. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Mount Body Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Mount Body. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Mount Body Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Mount Body. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Mount Body Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Mount Body. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Mount Body Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Mount Body. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Mount Body Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Mount Body. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Mount Body Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Mount Body. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Mount Body Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Mount Body. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Mount Body Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Mount Body. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Mount Body Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Mount Body. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Mount Body Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Mount Body. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Mount Body Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Mount Body. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Mount Body Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Mount Body. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Mount Body Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Mount Body. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Mount Body Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Mount Body. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Mount Body Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Mount Body. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Mount Body Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Mount Body. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Mount Body Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Mount Body. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Mount Body Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Mount Body. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Mount Body Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Mount Body. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Mount Body Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Mount Body. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Mount Body Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Mount Body. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Mount Body Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Mount Body. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Mount Body Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Mount Body. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Mount Body Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Mount Body. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Mount Body Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Mount Body. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Mount Body Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Mount Body. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Mount Body Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Mount Body. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Mount Body Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Mount Body. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Mount Body Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Mount Body. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Mount Body Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Mount Body. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Mount Body Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Mount Body. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Mount Body Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Mount Body. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Mount Body Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Mount Body. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Mount Body Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Mount Body. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Mount Body Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Mount Body. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Mount Body Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Mount Body. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Mount Body Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Mount Body. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Mount Body Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Mount Body. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Mount Body Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Mount Body. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Mount Body Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Mount Body. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Mount Body Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Mount Body. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Mount Body Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Mount Body. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Mount Body Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Mount Body. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Mount Body Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Mount Body. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Mount Body Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Mount Body. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Mount Body Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Mount Body. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Mount Body Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Mount Body. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Mount Body Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Mount Body. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Mount Body Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Mount Body. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Mount Body Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Mount Body. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Mount Body Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Mount Body. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Mount Body Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Mount Body. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Mount Body Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Mount Body. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Mount Body Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Mount Body. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Mount Body Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Mount Body. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Mount Body Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Mount Body. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "mountFeet" : {
        1: {
            1: {
                "name": "Tier 1 Mount Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Mount Feet. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Mount Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Mount Feet. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Mount Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Mount Feet. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Mount Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Mount Feet. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Mount Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Mount Feet. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Mount Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Mount Feet. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Mount Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Mount Feet. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Mount Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Mount Feet. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Mount Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Mount Feet. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Mount Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Mount Feet. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Mount Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Mount Feet. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Mount Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Mount Feet. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Mount Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Mount Feet. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Mount Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Mount Feet. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Mount Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Mount Feet. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Mount Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Mount Feet. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Mount Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Mount Feet. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Mount Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Mount Feet. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Mount Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Mount Feet. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Mount Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Mount Feet. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Mount Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Mount Feet. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Mount Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Mount Feet. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Mount Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Mount Feet. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Mount Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Mount Feet. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Mount Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Mount Feet. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Mount Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Mount Feet. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Mount Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Mount Feet. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Mount Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Mount Feet. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Mount Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Mount Feet. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Mount Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Mount Feet. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Mount Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Mount Feet. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Mount Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Mount Feet. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Mount Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Mount Feet. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Mount Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Mount Feet. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Mount Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Mount Feet. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Mount Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Mount Feet. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Mount Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Mount Feet. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Mount Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Mount Feet. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Mount Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Mount Feet. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Mount Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Mount Feet. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Mount Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Mount Feet. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Mount Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Mount Feet. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Mount Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Mount Feet. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Mount Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Mount Feet. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Mount Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Mount Feet. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Mount Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Mount Feet. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Mount Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Mount Feet. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Mount Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Mount Feet. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Mount Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Mount Feet. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Mount Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Mount Feet. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Mount Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Mount Feet. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Mount Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Mount Feet. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Mount Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Mount Feet. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Mount Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Mount Feet. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Mount Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Mount Feet. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Mount Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Mount Feet. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Mount Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Mount Feet. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Mount Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Mount Feet. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Mount Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Mount Feet. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Mount Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Mount Feet. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Mount Feet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Mount Feet. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Mount Feet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Mount Feet. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Mount Feet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Mount Feet. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Mount Feet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Mount Feet. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Mount Feet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Mount Feet. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Mount Feet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Mount Feet. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Mount Feet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Mount Feet. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Mount Feet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Mount Feet. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Mount Feet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Mount Feet. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Mount Feet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Mount Feet. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    },
    "mountPet" : {
        1: {
            1: {
                "name": "Tier 1 Mount Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 1 Mount Companion Pet. It does +100 to Strength and +50 to Credit Score",
                "stats": {
                    "str": 100,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            2: {
                "name": "Tier 1 Mount Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 1 Mount Companion Pet. It does +100 to Dex and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 100,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            3: {
                "name": "Tier 1 Mount Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 1 Mount Companion Pet. It does +100 to Intelligence and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 100,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            4: {
                "name": "Tier 1 Mount Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 1 Mount Companion Pet. It does +100 to Wisdom and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 100,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            5: {
                "name": "Tier 1 Mount Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 1 Mount Companion Pet. It does +100 to Sex Appeal and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 100,
                    "brand": 0,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            6: {
                "name": "Tier 1 Mount Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 1 Mount Companion Pet. It does +100 to Personal Brand and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 100,
                    "luck": 0,
                    "credit": 50
                },
                "set": ""
            },
            7: {
                "name": "Tier 1 Mount Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 1 Mount Companion Pet. It does +100 to Luck and +50 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 100,
                    "credit": 50
                },
                "set": ""
            },
            8: {
                "name": "Tier 1 Mount Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 1 Mount Companion Pet. It does +18 to all abilities",
                "stats": {
                    "str": 18,
                    "dex": 18,
                    "int": 18,
                    "wis": 18,
                    "sex": 18,
                    "brand": 18,
                    "luck": 18,
                    "credit": 18
                },
                "set": ""
            },
            9: {
                "name": "Tier 1 Mount Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 1 Mount Companion Pet. It does +36 to Strength, Intelligence, Sex Appeal, and Luck",
                "stats": {
                    "str": 36,
                    "dex": 0,
                    "int": 36,
                    "wis": 0,
                    "sex": 36,
                    "brand": 0,
                    "luck": 36,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 1 Mount Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 1 Mount Companion Pet. It does +75 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 75
                },
                "set": ""
            }
        },
        2: {
            1: {
                "name": "Tier 2 Mount Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 2 Mount Companion Pet. It does +50 to Strength and +10 to Credit Score",
                "stats": {
                    "str": 50,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            2: {
                "name": "Tier 2 Mount Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 2 Mount Companion Pet. It does +50 to Dex and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 50,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            3: {
                "name": "Tier 2 Mount Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 2 Mount Companion Pet. It does +50 to Intelligence and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 50,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            4: {
                "name": "Tier 2 Mount Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 2 Mount Companion Pet. It does +50 to Wisdom and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 50,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            5: {
                "name": "Tier 2 Mount Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 2 Mount Companion Pet. It does +50 to Sex Appeal and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 50,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            6: {
                "name": "Tier 2 Mount Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 2 Mount Companion Pet. It does +50 to Personal Brand and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 50,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            },
            7: {
                "name": "Tier 2 Mount Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 2 Mount Companion Pet. It does +50 to Luck and +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 50,
                    "credit": 10
                },
                "set": ""
            },
            8: {
                "name": "Tier 2 Mount Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 2 Mount Companion Pet. It does +7 to all abilities",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "int": 7,
                    "wis": 7,
                    "sex": 7,
                    "brand": 7,
                    "luck": 7,
                    "credit": 7
                },
                "set": ""
            },
            9: {
                "name": "Tier 2 Mount Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 2 Mount Companion Pet. It does +14 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 14,
                    "int": 0,
                    "wis": 14,
                    "sex": 0,
                    "brand": 14,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 2 Mount Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 2 Mount Companion Pet. It does +20 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 20
                },
                "set": ""
            }
        },
        3: {
            1: {
                "name": "Tier 3 Mount Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 3 Mount Companion Pet. It does +30 to Strength and +5 to Credit Score",
                "stats": {
                    "str": 30,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            2: {
                "name": "Tier 3 Mount Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 3 Mount Companion Pet. It does +30 to Dex and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 30,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            3: {
                "name": "Tier 3 Mount Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 3 Mount Companion Pet. It does +30 to Intelligence and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 30,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            4: {
                "name": "Tier 3 Mount Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 3 Mount Companion Pet. It does +30 to Wisdom and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 30,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            5: {
                "name": "Tier 3 Mount Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 3 Mount Companion Pet. It does +30 to Sex Appeal and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 30,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            6: {
                "name": "Tier 3 Mount Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 3 Mount Companion Pet. It does +30 to Personal Brand and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 30,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            },
            7: {
                "name": "Tier 3 Mount Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 3 Mount Companion Pet. It does +30 to Luck and +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 30,
                    "credit": 5
                },
                "set": ""
            },
            8: {
                "name": "Tier 3 Mount Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 3 Mount Companion Pet. It does +2 to all abilities",
                "stats": {
                    "str": 2,
                    "dex": 2,
                    "int": 2,
                    "wis": 2,
                    "sex": 2,
                    "brand": 2,
                    "luck": 2,
                    "credit": 2
                },
                "set": ""
            },
            9: {
                "name": "Tier 3 Mount Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 3 Mount Companion Pet. It does +4 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "int": 0,
                    "wis": 4,
                    "sex": 0,
                    "brand": 4,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 3 Mount Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 3 Mount Companion Pet. It does +10 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 10
                },
                "set": ""
            }
        },
        4: {
            1: {
                "name": "Tier 4 Mount Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 4 Mount Companion Pet. It does +15 to Strength and +2 to Credit Score",
                "stats": {
                    "str": 15,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            2: {
                "name": "Tier 4 Mount Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 4 Mount Companion Pet. It does +15 to Dex and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 15,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            3: {
                "name": "Tier 4 Mount Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 4 Mount Companion Pet. It does +15 to Intelligence and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 15,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            4: {
                "name": "Tier 4 Mount Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 4 Mount Companion Pet. It does +15 to Wisdom and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 15,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            5: {
                "name": "Tier 4 Mount Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 4 Mount Companion Pet. It does +15 to Sex Appeal and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 15,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            6: {
                "name": "Tier 4 Mount Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 4 Mount Companion Pet. It does +15 to Personal Brand and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 15,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            },
            7: {
                "name": "Tier 4 Mount Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 4 Mount Companion Pet. It does +15 to Luck and +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 15,
                    "credit": 2
                },
                "set": ""
            },
            8: {
                "name": "Tier 4 Mount Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 4 Mount Companion Pet. It does +1 to all abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 1,
                    "wis": 1,
                    "sex": 1,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 4 Mount Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 4 Mount Companion Pet. It does +2 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "int": 2,
                    "wis": 0,
                    "sex": 2,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 4 Mount Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 4 Mount Companion Pet. It does +5 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 5
                },
                "set": ""
            }
        },
        5: {
            1: {
                "name": "Tier 5 Mount Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 5 Mount Companion Pet. It does +7 to Strength and +1 to Credit Score",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            2: {
                "name": "Tier 5 Mount Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 5 Mount Companion Pet. It does +7 to Dex and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 7,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            3: {
                "name": "Tier 5 Mount Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 5 Mount Companion Pet. It does +7 to Intelligence and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 7,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            4: {
                "name": "Tier 5 Mount Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 5 Mount Companion Pet. It does +7 to Wisdom and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 7,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            5: {
                "name": "Tier 5 Mount Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 5 Mount Companion Pet. It does +7 to Sex Appeal and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 7,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            6: {
                "name": "Tier 5 Mount Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 5 Mount Companion Pet. It does +7 to Personal Brand and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 7,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            },
            7: {
                "name": "Tier 5 Mount Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 5 Mount Companion Pet. It does +7 to Luck and +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 7,
                    "credit": 1
                },
                "set": ""
            },
            8: {
                "name": "Tier 5 Mount Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 5 Mount Companion Pet. It does +1 to all intangible abilities",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 1,
                    "credit": 1
                },
                "set": ""
            },
            9: {
                "name": "Tier 5 Mount Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 5 Mount Companion Pet. It does +1 to Strength, Intelligence, and Sex Appeal",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 1,
                    "brand": 2,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 5 Mount Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 5 Mount Companion Pet. It does +3 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 3
                },
                "set": ""
            }
        },
        6: {
            1: {
                "name": "Tier 6 Mount Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 6 Mount Companion Pet. It does +3 to Strength",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 6 Mount Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 6 Mount Companion Pet. It does +3 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 3,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 6 Mount Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 6 Mount Companion Pet. It does +3 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 3,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 6 Mount Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 6 Mount Companion Pet. It does +3 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 3,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 6 Mount Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 6 Mount Companion Pet. It does +3 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 3,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 6 Mount Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 6 Mount Companion Pet. It does +3 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 3,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 6 Mount Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 6 Mount Companion Pet. It does +3 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 3,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 6 Mount Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 6 Mount Companion Pet. It does +1 to all physical abilities",
                "stats": {
                    "str": 1,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 6 Mount Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 6 Mount Companion Pet. It does +1 to Dexterity, Wisdom, and Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 6 Mount Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 6 Mount Companion Pet. It does +2 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 2
                },
                "set": ""
            }
        },
        7: {
            1: {
                "name": "Tier 7 Mount Companion Pet Variation 1",
                "desc": "This is a fancy new Variation 1 Tier 7 Mount Companion Pet. It does +1 to Strength",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            2: {
                "name": "Tier 7 Mount Companion Pet Variation 2",
                "desc": "This is a fancy new Variation 2 Tier 7 Mount Companion Pet. It does +1 to Dex",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            3: {
                "name": "Tier 7 Mount Companion Pet Variation 3",
                "desc": "This is a fancy new Variation 3 Tier 7 Mount Companion Pet. It does +1 to Intelligence",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 1,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            4: {
                "name": "Tier 7 Mount Companion Pet Variation 4",
                "desc": "This is a fancy new Variation 4 Tier 7 Mount Companion Pet. It does +1 to Wisdom",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 1,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            5: {
                "name": "Tier 7 Mount Companion Pet Variation 5",
                "desc": "This is a fancy new Variation 5 Tier 7 Mount Companion Pet. It does +1 to Sex Appeal",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            6: {
                "name": "Tier 7 Mount Companion Pet Variation 6",
                "desc": "This is a fancy new Variation 6 Tier 7 Mount Companion Pet. It does +1 to Personal Brand",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 1,
                    "luck": 0,
                    "credit": 0
                },
                "set": ""
            },
            7: {
                "name": "Tier 7 Mount Companion Pet Variation 7",
                "desc": "This is a fancy new Variation 7 Tier 7 Mount Companion Pet. It does +1 to Luck",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            8: {
                "name": "Tier 7 Mount Companion Pet Variation 8",
                "desc": "This is a fancy new Variation 8 Tier 7 Mount Companion Pet. It does +1 to Strength and Luck",
                "stats": {
                    "str": 1,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 1,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            9: {
                "name": "Tier 7 Mount Companion Pet Variation 9",
                "desc": "This is a fancy new Variation 9 Tier 7 Mount Companion Pet. It does +1 to Dexterity and Luck",
                "stats": {
                    "str": 0,
                    "dex": 1,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 1,
                    "credit": 0
                },
                "set": ""
            },
            10: {
                "name": "Tier 7 Mount Companion Pet Variation 10",
                "desc": "This is a fancy new Variation 10 Tier 7 Mount Companion Pet. It does +1 to Credit Score",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "int": 0,
                    "wis": 0,
                    "sex": 0,
                    "brand": 0,
                    "luck": 0,
                    "credit": 1
                },
                "set": ""
            }
        }
    }
};
export default LootTable;