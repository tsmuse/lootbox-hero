/* global Phaser, p2, PIXI */
import { contain, randomInt } from "../Helpers";

var dungeon,
    walls,
    door,
    explorer,
    treasure,
    blobs,
    healthBar,
    cursors;

    var TreasureHunterState = {
    preload: preloadTreasureHunterPhaser,
    create: createTreasureHunterPhaser,
    update: treasureHunter,
}

export default TreasureHunterState;

function preloadTreasureHunterPhaser(game){
    game.load.atlasJSONHash(
        "thAtlas", 
        "gameAssets/sprites/treasureHunter.png",
        "gameAssets/sprites/treasureHunter.json"
    );
}

function createTreasureHunterPhaser(game){
    dungeon = game.add.sprite(0,0,"thAtlas","dungeon.png");
    
    door = game.add.sprite(32, 0, "thAtlas", "door.png");
    game.physics.arcade.enable(door);
    
    explorer = game.add.sprite(68, game.world.height / 2, "thAtlas", "explorer.png");
    explorer.y = explorer.y - (explorer.height/2);
    game.physics.arcade.enable(explorer);
    
    treasure = game.add.sprite(0,0,"thAtlas","treasure.png");
    treasure.x = game.world.width - treasure.width - 48;
    treasure.y = game.world.height / 2 - treasure.height / 2;
    game.physics.arcade.enable(treasure);

    var numBlobs = 6,
        spacing = 48,
        xOffset = 150,
        speed = 200,
        direction = 1;

    blobs = game.add.group();
    blobs.enableBody = true;
    for(let i = 0; i < numBlobs; i++){
        let blob = blobs.create(0,0,"thAtlas","blob.png");
        blob.x = spacing * i + xOffset;
        blob.y = randomInt(0, game.world.height - blob.height);
        blob.body.velocity.y = speed * direction;
        // blob.body.collideWorldBounds = true;
        direction *= -1;
    }

    healthBar = game.add.group();
    healthBar.x = game.world.width - 170;
    healthBar.y = 4;

    //Create black background rectangle
    var innerBar = new Phaser.Graphics(game);
    innerBar.beginFill(0x000000);
    innerBar.drawRect(0, 0, 128, 8);
    innerBar.endFill();
    healthBar.addChild(innerBar);

    //Create red front rectangle
    var outerBar = new Phaser.Graphics(game);
    outerBar.beginFill(0xFF3300);
    outerBar.drawRect(0, 0, 128, 8);
    outerBar.endFill();
    healthBar.addChild(outerBar);
    healthBar.outer = outerBar;

    cursors = game.input.keyboard.createCursorKeys();
}

function treasureHunter(game){
    // check the explorer is inside the walls
    contain(explorer, { x: 28, y: 10, width: 488, height: 480 });
    explorer.alpha = 1;

    // keep the blobs moving
    blobs.forEach(blob => {
        let blobHitsWall = contain(blob, { x: 28, y: 10, width: 488, height: 480 });

        if(blobHitsWall === "top"){
            blob.y += 5;
            blob.body.velocity.y *= -1;

        }
        else if(blobHitsWall === "bottom"){
            blob.y -= 5;
            blob.body.velocity.y *= -1;
        }
    });
    // check if explorer is hit by a blob
   game.physics.arcade.overlap(explorer, blobs,(explorer,blob) =>{
        explorer.alpha = 0.5;
        healthBar.outer.width -= 1;
    });

    // check if explorer is touching the treasure
    game.physics.arcade.overlap(explorer, treasure, (explorer, treasure) => {
        treasure.x = explorer.x + 8;
        treasure.y = explorer.y + 8;
    });

    // check explorer health, if out of health end game
    if(healthBar.outer.width < 0){
        game.scores.push(false);
        game.state.start("gameOver");
    }

    // check if the treasure made it to the door
    game.physics.arcade.overlap(treasure, door, (treasure,door) => {
        game.scores.push(true);
        game.state.start("switch");
    });

    // move the explorer around based on arrow keys
    explorer.body.velocity.x = 0;
    explorer.body.velocity.y = 0;
    if(cursors.left.isDown){
        explorer.body.velocity.x = -300;
        explorer.body.velocity.y = 0;
    }
    else if(cursors.right.isDown){
        explorer.body.velocity.x = 300;
        explorer.body.velocity.y = 0;
    }
    else if(cursors.up.isDown){
        explorer.body.velocity.x = 0;
        explorer.body.velocity.y = -300;
    }
    else if(cursors.down.isDown){
        explorer.body.velocity.x = 0;
        explorer.body.velocity.y = 300;
    }
}
