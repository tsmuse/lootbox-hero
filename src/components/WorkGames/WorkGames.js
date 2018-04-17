/* global Phaser, p2, PIXI */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
// import * as PIXI from "pixi.js";
// import { setupTreasureHunter, treasureHunter } from "../../microgames/TreasureHunter";
// import { setupPlaceholder, placeholderGame } from "../../microgames/PlaceholderGame";
// import Phaser from "phaser-ce";
/* eslint-disable */
import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
/* eslint-enable */
import { preloadTreasureHunterPhaser, createTreasureHunterPhaser, TreasureHunter } 
    from "../../microgames/TreasureHunterPhaser";


// const Application = PIXI.Application,
//     Container = PIXI.Container,
//     loader = PIXI.loader,
//     resources = PIXI.loader.resources,
//     Graphics = PIXI.Graphics,
//     TextureCache = PIXI.utils.TextureCache,
//     Sprite = PIXI.Sprite,
//     Text = PIXI.Text,
//     TextStyle = PIXI.TextStyle;


class WorkGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOver : false
        };
        // this.game = new PIXI.Application({
        //     width: 512,
        //     height: 512,
        //     antialiasing: false,
        //     resolution: 1
        // });
        this.shiftList = this.props.shiftList;
        this.scenesToPlay = [];
        this.sceneTimer = 5;
        this.scores = [];
        this.setupGame = this.setupGame.bind(this);
        // define the scenes for each microgame
        this.placeholderScenes = [];
        
        
        // bind the functions from each game module
        // this.setupTreasureHunter = setupTreasureHunter.bind(this);
        // this.treasureHunter = treasureHunter.bind(this);
        // this.setupPlaceholder = setupPlaceholder.bind(this);
        // this.placeholderGame = placeholderGame.bind(this);

    }
    componentDidMount() {
        // this.container.append(this.game.view);
        // loader.add("gameAssets/sprites/treasureHunter.json")
        //     .load(this.setupGame);
        this.game = new Phaser.Game(512, 512, Phaser.AUTO, this.container, 
            { preload: this.preload, create: this.create, update: this.update }
        );
    }
    componentWillUnmount(){
        // this.game.destroy(true);
        // loader.reset();
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
    preload(){
        preloadTreasureHunterPhaser(this.game);
    }
    create(){
        createTreasureHunterPhaser(this.game);
        this.gameState = TreasureHunter;
    }
    update(){
        this.gameState();
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
                // this.setupPlaceholder(game.name);
                // this.scenesToPlay.push(this.placeholderGame);
                break;
            case "workGame10" : 
                // this.setupTreasureHunter();
                // this.scenesToPlay.push(this.treasureHunter);
                break;
            default:
                console.error("Asked for a game that isn't in my list");
            }   
        }
        
        this.frameCounter = 0;
        this.switchGame();
        // this.setupPlaceholder("test");
        // this.gameState = this.placeHolderGame;
        // this.placeholderScenes[0].visible = true;
        // this.currentScene = this.placeholderScenes[0];
        this.game.ticker.add(delta => this.gameLoop(delta));
    }

    gameLoop(delta){
        this.gameState(delta);
    }
    switchGame(){
        console.log("switch!");
        let nextScene = this.scenesToPlay.shift();
        if(nextScene === this.treasureHunter){
            this.treasureHunterScene.visible = true;
            this.currentScene = this.treasureHunterScene;
            this.gameState = this.treasureHunter;
        }
        else{
            // this is convoluted because I don't have unique games for everything else
            let placeholder = this.placeholderScenes.shift();
            placeholder.visible = true;
            this.currentScene = placeholder;
            this.gameState = this.placeholderGame;
        }
        
    }

    scoreGame(){
        let cashEarned = 0;
        this.scores.forEach((success, index) =>{
            if(success){
                console.log(`cash + ${Object.entries(this.shiftList)[index][1].value}`);
                cashEarned += Object.entries(this.shiftList)[index][1].value;
            }
        }, this);
        this.props.workCompleteHandler(cashEarned);
    }
    gameComplete(){
        if (this.scenesToPlay.length > 0) {
            this.currentScene.visible = false;
            this.switchGame();
        }
        else {
            this.scoreGame();
            this.gameState = this.end;
        }
    }
    end(){
        this.setState({gameOver: true});
    }
}

export default WorkGames;