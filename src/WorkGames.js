import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import * as PIXI from "pixi.js";

const Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle;


class WorkGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOver : false
        };
        this.game = new PIXI.Application({
            width: 512,
            height: 512,
            antialiasing: false,
            resolution: 1
        });
        this.shiftList = this.props.shiftList;
        this.scenesToPlay = [];
        this.sceneTimer = 5;
        this.setupGame = this.setupGame.bind(this);
        // define the scenes for each microgame
        this.placeholderScenes = [];
        this.treasureHunterScene = new Container();

        // bind the functions that control the game loop for each scene 
        // this.play = this.play.bind(this);
        // this.end = this.end.bind(this);

    }
    componentDidMount() {
        this.container.append(this.game.view);
        loader.add("gameAssets/sprites/treasureHunter.json")
            .load(this.setupGame);
    }
    componentWillUnmount(){
        this.game.destroy(true);
        loader.reset();
        console.log("destroyed game");
    }
    render() {
        if (!this.state.gameOver) {
            return (
                <div className="gameContainer" ref={container => this.container = container}>
                </div>
            );
        }
        else {
            return <Redirect from="/work" to="/player" />;
        }

    }

    // Setup the dungegon game demo I built in the pixi.js tutorial
    setupTreasureHunter(){
        this.game.stage.addChild(this.treasureHunterScene);
        this.treasureHunterScene.visible = false;
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
            let y = this.randomInt(0, this.game.stage.height - blob.height);
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
        let left = this.keyboard(37),
            up = this.keyboard(38),
            right = this.keyboard(39),
            down = this.keyboard(40);

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
    }
    // stub to handle the other games I don't have yet
    setupPlaceholder(name){
        let scene = new Container();
        scene.visible = false;
        let style = new TextStyle({
            fontFamily: "Futura",
            fontSize: 64,
            fill: "white"
        });
        let message = new Text(`Fun! Game ${name}`, style);
        message.position.set(120, this.game.stage.height / 2 - 32);
        scene.addChild(message);
        this.placeholderScenes.push(scene);
        this.game.stage.addChild(scene);
    }
    setupGame() {
        // itterate through the game list and set up the games needed for this loop
        for(let name in this.shiftList){
            let game = this.shiftList[name];
            switch(game.name){
                case "workGame01":
                case "workGame02":
                case "workGame03":
                case "workGame04":
                case "workGame05":
                case "workGame06":
                case "workGame07":
                case "workGame08":
                case "workGame09":
                    this.setupPlaceholder(game.name);
                    this.scenesToPlay.push(this.placeHolderGame);
                    break;
                case "workGame10" : 
                    this.setupTreasureHunter();
                    this.scenesToPlay.push(this.treasureHunter);
                    break;
                default:
                    console.error("Asked for a game that isn't in my list");
            }   
        }
        
        this.switchGame();
        this.frameCounter = 0;
        this.game.ticker.add(delta => this.gameLoop(delta));
    }

    gameLoop(delta){
        this.gameState(delta);
    }
    switchGame(){
        let nextScene = this.scenesToPlay.slice();
        if(nextScene === this.treasureHunter){
            this.treasureHunterScene.visible = true;
            this.gameState = this.treasureHunter;
        }
        else{
            // this is convoluted because I don't have unique games for everything else
            let placeholder = this.placeholderScenes.slice();
            placeholder.visible = true;
            this.gameState = this.placeHolderGame;
        }
        this.currentScene = nextScene;
    }
    placeHolderGame(){
        this.frameCounter += 1;
        if(this.frameCounter > (this.game.ticker.FPS * this.sceneTimer)){
            if(this.scenesToPlay.length > 0){
                this.currentScene.visible = false;
                this.switchGame();
            }
            else{
                this.gameState = this.end;
            }
        }
        
    }
    treasureHunter(delta){
        // use the explorer's velocity to make it move
        this.explorer.x += this.explorer.vx;
        this.explorer.y += this.explorer.vy;

        //contain the explorer inside the area of the dungeon
        this.contain(this.explorer, {x: 28, y: 10, width: 488, height: 480});
        //set "explorerHit" to false before checking for a collision
        let explorerHit = false;

        //Loop through all the sprites in the "enimies" array
        this.blobs.forEach( blob => {
            // move the blob
            blob.y += blob.vy;

            //check the blob's screen boundaries
            let blobHitsWall = this.contain(blob, {x: 28, y: 10, width: 488, height: 480});

            // If the blob hits the top or bottom of the stage, reverse it's direction
            if(blobHitsWall === "top" || blobHitsWall === "bottom"){
                blob.vy *= -1;
            }

            //test for collision. If any of the enemies are touching the explorer, set explorer hit
            // to true
            if(this.hitTestRectangle(this.explorer, blob)){
                explorerHit = true;
            }
        });

        //If the explorer is hit...
        if(explorerHit){
            //make the explorer semi-transparent
            this.explorer.alpha = 0.5;
            this.healthBar.outer.width -= 1;
        }
        else {
            // make the explorer fully opaque if it hasn't been hit
            this.explorer.alpha = 1;
        }
        // check for a collision between the explorer and the treasure
        if(this.hitTestRectangle(this.explorer, this.treasure)){
            // if the treasure is touching the explorer, center it over the explorer
            this.treasure.x = this.explorer.x + 8;
            this.treasure.y = this.explorer.y + 8;
        }

        //Does the explorer have enough health? If the width of the innerBar is less than zero
        //end the game
        if(this.healthBar.outer.width < 0) {
            if (this.scenesToPlay.length > 0) {
                this.currentScene.visible = false;
                this.switchGame();
            }
            else {
                this.gameState = this.end;
            }
        }

        //If the explorer has brought the treasuer to the exit end the game
        if(this.hitTestRectangle(this.treasure, this.door)){
            if (this.scenesToPlay.length > 0) {
                this.currentScene.visible = false;
                this.switchGame();
            }
            else {
                this.gameState = this.end;
            }
        }
    }

    end(){
        let gameresult = JSON.stringify({"victory": true, "cash": 10});
        localStorage.setItem("testGame", gameresult);
        // location.assign("http://localhost:3000/player");
        this.setState({gameOver: true});
    }
    //Helper funcitons
    hitTestRectangle(r1, r2){
        //Define the variables we'll need to calculate
        let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

        //hit will determine whether there's a collision
        hit = false;

        //Find the center points of each sprite
        r1.centerX = r1.x + r1.width / 2;
        r1.centerY = r1.y + r1.height / 2;
        r2.centerX = r2.x + r2.width / 2;
        r2.centerY = r2.y + r2.height / 2;

        //Find the half-widths and half-heights of each sprite
        r1.halfWidth = r1.width / 2;
        r1.halfHeight = r1.height / 2;
        r2.halfWidth = r2.width / 2;
        r2.halfHeight = r2.height / 2;

        //Calculate the distance vector between the sprites
        vx = r1.centerX - r2.centerX;
        vy = r1.centerY - r2.centerY;

        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = r1.halfWidth + r2.halfWidth;
        combinedHalfHeights = r1.halfHeight + r2.halfHeight;

        //Check for a collision on the x axis
        if (Math.abs(vx) < combinedHalfWidths) {

            //A collision might be occuring. Check for a collision on the y axis
            if (Math.abs(vy) < combinedHalfHeights) {

                //There's definitely a collision happening
                hit = true;
            } else {

                //There's no collision on the y axis
                hit = false;
            }
        } else {

            //There's no collision on the x axis
            hit = false;
        }

        //`hit` will be either `true` or `false`
        return hit;
    }
    contain(sprite, container){
        let collision = undefined;

        //Left
        if (sprite.x < container.x) {
            sprite.x = container.x;
            collision = "left";
        }

        //Top
        if (sprite.y < container.y) {
            sprite.y = container.y;
            collision = "top";
        }

        //Right
        if (sprite.x + sprite.width > container.width) {
            sprite.x = container.width - sprite.width;
            collision = "right";
        }

        //Bottom
        if (sprite.y + sprite.height > container.height) {
            sprite.y = container.height - sprite.height;
            collision = "bottom";
        }

        //Return the `collision` value
        return collision;
    }
    randomInt(min, max){
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    keyboard(keyCode){
        var key = {};
        key.code = keyCode;
        key.isDown = false;
        key.isUp = true;
        key.press = undefined;
        key.release = undefined;
        // The 'downHandler'
        key.downHandler = function(event){
            if(event.keyCode === key.code){
                if(key.isUp && key.press) key.press();
                key.isDown = true;
                key.usUp = false;
            }
            event.preventDefault();
        };

        //The 'upHandler'
        key.upHandler = function(event){
            if(event.keyCode === key.code){
                if (key.isDown && key.release) key.release();
                key.isDown = false;
                key.isUp = true;
            }
            event.preventDefault();
        };

        window.addEventListener(
            "keydown", key.downHandler.bind(key), false
        );
        window.addEventListener(
            "keyup", key.upHandler.bind(key), false
        );
        return key;
    }
}

export default WorkGames;