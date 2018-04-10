import * as PIXI from "pixi.js";
import { randomInt, contain, keyboard, hitTestRectangle } from "./Helpers";

const Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle;

// Setup the dungegon game demo I built in the pixi.js tutorial
export function setupTreasureHunter(){
    this.treasureHunterScene = new Container();
    this.game.stage.addChild(this.treasureHunterScene);
    let id = resources["gameAssets/sprites/treasureHunter.json"].textures;

    // Dungeon
    this.dungeon = new Sprite(id["dungeon.png"]);
    this.treasureHunterScene.addChild(this.dungeon);

    //Door
    this.door = new Sprite(id["door.png"]);
    this.door.position.set(32, 0);
    this.treasureHunterScene.addChild(this.door);

    //Explorer
    this.explorer = new Sprite(id["explorer.png"]);
    this.explorer.position.set(
        68,
        this.treasureHunterScene.height / 2 - this.explorer.height / 2
    );
    this.explorer.vx = 0;
    this.explorer.vy = 0;
    this.treasureHunterScene.addChild(this.explorer);

    //Treasure
    this.treasure = new Sprite(id["treasure.png"]);
    this.treasure.position.set(
        this.treasureHunterScene.width - this.treasure.width - 48,
        this.treasureHunterScene.height / 2 - this.treasure.height / 2
    );
    this.treasureHunterScene.addChild(this.treasure);

    // Make blobs
    let numBlobs = 6,
        spacing = 48,
        xOffset = 150,
        speed = 2,
        direction = 1;

    // array to store blobs
    this.blobs = [];
    for (let i = 0; i < numBlobs; i++) {
        let blob = new Sprite(id["blob.png"]);
        let x = spacing * i + xOffset;
        let y = randomInt(0, this.game.stage.height - blob.height);
        blob.position.set(x, y);
        blob.vy = speed * direction;
        direction *= -1;
        this.blobs.push(blob);
        this.treasureHunterScene.addChild(blob);
    }

    // Create health bar
    this.healthBar = new Container();
    this.healthBar.position.set(this.game.stage.width - 170, 4);
    this.treasureHunterScene.addChild(this.healthBar);

    //Create black background rectangle
    let innerBar = new Graphics();
    innerBar.beginFill(0x000000);
    innerBar.drawRect(0, 0, 128, 8);
    innerBar.endFill();
    this.healthBar.addChild(innerBar);

    //Create red front rectangle
    let outerBar = new Graphics();
    outerBar.beginFill(0xFF3300);
    outerBar.drawRect(0, 0, 128, 8);
    outerBar.endFill();
    this.healthBar.addChild(outerBar);
    this.healthBar.outer = outerBar;

    // creating a closure over the explorer sprite so I can interact with it in the key handlers
    let explorer = this.explorer;
    // Capture keyboard arrow keys
    let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);

    //left arrow key press method
    left.press = function () {
        explorer.vx = -5;
        explorer.vy = 0;
    };
    left.release = function () {
        //If the left arrow has been released, and the right arrow isn't down,
        // and the explorer isn't moving vertically: stop the explorer
        if (!right.isDown && explorer.vy === 0) {
            explorer.vx = 0;
        }
    };

    // up
    up.press = function () {
        explorer.vy = -5;
        explorer.yx = 0;
    };
    up.release = function () {
        if (!down.isDown && explorer.vx === 0) {
            explorer.vy = 0;
        }
    };
    // right
    right.press = function () {
        explorer.vx = 5;
        explorer.vy = 0;
    };
    right.release = function () {
        if (!left.isDown && explorer.vy === 0) {
            explorer.vx = 0;
        }
    };
    //down
    down.press = function () {
        explorer.vy = 5;
        explorer.vx = 0;
    };
    down.release = function () {
        if (!up.isDown && explorer.vx === 0) {
            explorer.vy = 0;
        }
    };
    this.treasureHunterScene.visible = false;
}

export function treasureHunter(delta){
    console.log("treasurehunter!");
    // use the explorer's velocity to make it move
    this.explorer.x += this.explorer.vx;
    this.explorer.y += this.explorer.vy;

    //contain the explorer inside the area of the dungeon
    contain(this.explorer, { x: 28, y: 10, width: 488, height: 480 });
    //set "explorerHit" to false before checking for a collision
    let explorerHit = false;

    //Loop through all the sprites in the "enimies" array
    this.blobs.forEach(blob => {
        // move the blob
        blob.y += blob.vy;

        //check the blob's screen boundaries
        let blobHitsWall = contain(blob, { x: 28, y: 10, width: 488, height: 480 });

        // If the blob hits the top or bottom of the stage, reverse it's direction
        if (blobHitsWall === "top" || blobHitsWall === "bottom") {
            blob.vy *= -1;
        }

        //test for collision. If any of the enemies are touching the explorer, set explorer hit
        // to true
        if (hitTestRectangle(this.explorer, blob)) {
            explorerHit = true;
        }
    });

    //If the explorer is hit...
    if (explorerHit) {
        //make the explorer semi-transparent
        this.explorer.alpha = 0.5;
        this.healthBar.outer.width -= 1;
    }
    else {
        // make the explorer fully opaque if it hasn't been hit
        this.explorer.alpha = 1;
    }
    // check for a collision between the explorer and the treasure
    if (hitTestRectangle(this.explorer, this.treasure)) {
        // if the treasure is touching the explorer, center it over the explorer
        this.treasure.x = this.explorer.x + 8;
        this.treasure.y = this.explorer.y + 8;
    }

    //Does the explorer have enough health? If the width of the innerBar is less than zero
    //end the game
    if (this.healthBar.outer.width < 0) {
        this.scores.push(false);
        this.gameComplete();
    }

    //If the explorer has brought the treasuer to the exit end the game
    if (hitTestRectangle(this.treasure, this.door)) {
        this.scores.push(true);
        this.gameComplete();
    }
}