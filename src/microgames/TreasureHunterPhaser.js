import Phaser from "phaser-ce";

export function preloadTreasureHunterPhaser(game){
    game.load.atlasJSONHash(
        "thAtlas", 
        "gameAssets/sprites/treasureHunter.png",
        "gameAssets/sprites/treasureHunter.json"
    );
}

export function createTreasureHunterPhaser(game){
    var dungeon = game.add.sprite(0,0,"thAtlas","dungeon.png");
}

export function TreasureHunter(){

}
