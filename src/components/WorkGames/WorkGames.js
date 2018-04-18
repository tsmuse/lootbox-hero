/* global Phaser, p2, PIXI */

// This is TOTALLY not a good fix, but it was way faster than dealing with having to fix all the configuration stuff
// from ejecting the app to add the expose-loader stuff to the webpack config files. 
// TODO: figure out how to prune all the cruft I'm not using from this and eject the app so I can actually do this the
//       correct way.
/* eslint-disable */
import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
/* eslint-enable */

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { rolldice } from "../../Helpers";
import TreasureHunterState from "../../microgames/TreasureHunterPhaser";


class WorkGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOver : false
        };
        this.shiftLength = 2; // need to figure out where this should live
        this.workGamesLibrary = [
            { name: "TreasureHunter", state: TreasureHunterState, value: 10 }
        ];
        this.sceneCounter = -1;
        this.scores = [];
        this.phaserConfig = { 
            width: 512,
            height: 512,
            renderer: Phaser.AUTO,
            antialias: false,
            parent: this.container,
            enableDebug: false
            // state: {
            //     preload: this.preloadWorkIntro, 
            //     create: this.createWorkIntro, 
            //     update: this.updateWorkIntro
            // }

        };
        // define the scenes for each microgame
        this.placeholderScenes = [];
        // bind the functions from each game module?
        this.switchScene = this.switchScene.bind(this);
        this.gameOver = this.gameOver.bind(this);
        

    }
    componentDidMount() {
        this.sceneList = this.generateWorkList();
        this.game = new Phaser.Game(this.phaserConfig);
        this.game.scores = [];
        this.sceneList.forEach((scene)=>{
            this.game.state.add(scene.name, scene.state);
        });
        // this.game.state.add("treasureHunter", TreasureHunterState, true);
        this.game.state.add("switch", {create: this.switchScene});
        this.game.state.add("gameOver", {create:this.gameOver});
        this.game.state.start("switch");
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
    switchScene(game) {
        console.log("switch!");
        this.sceneCounter += 1;
        if(this.sceneCounter < this.sceneList.length){
            let nextScene = this.sceneList[this.sceneCounter];
            game.state.start(nextScene.name);
        }
        else{
            game.state.start("gameOver");
        }

        // if (nextScene === this.treasureHunter) {
        //     this.treasureHunterScene.visible = true;
        //     this.currentScene = this.treasureHunterScene;
        //     this.gameState = this.treasureHunter;
        // }
        // else {
        //     // this is convoluted because I don't have unique games for everything else
        //     let placeholder = this.placeholderScenes.shift();
        //     placeholder.visible = true;
        //     this.currentScene = placeholder;
        //     this.gameState = this.placeholderGame;
        // }

    }
    generateWorkList() {
        var sceneList = [];
        for (let i = 0; i < this.shiftLength; i++) {
            let scene = this.workGamesLibrary[rolldice(1) - 1];
                
            // check for duplicate rolls and keep rolling until we don't have a dupe
            // while (keys.length > 0 && keys.indexOf(game.name) !== -1) {
            //     game = this.workGamesLibrary[rolldice(10) - 1];
            // }
            sceneList.push(scene);
        }
        // // for testing/debugging a specific game
        // gameList = { "workGame10": this.workGamesLibrary[9] };

        return sceneList;

    }
    // preload(){
    //     // saving this sound stuff for later
    //     // this.game.load.audio(
    //     //     'boden', 
    //     //     ["gameAssets/audio/bodenstaendig_2000_in_rock_4bit.mp3",
    //     //         "assets/audio/bodenstaendig_2000_in_rock_4bit.ogg"]);

    //     preloadTreasureHunterPhaser(this.game);
    // }
    // create(){
    //    // createTreasureHunterPhaser(this.game);
    //     //this.gameState = TreasureHunter;
    //     // saving this sound stuff for later
    //     // this.music = this.game.add.audio('boden');
    //     // this.music.play();
    // }
    // update(){
    //     this.gameState(this.game);
    // }
    gameOver(game){
        game.add.text(
            game.world.width /2, 
            game.world.height/2, 
            "game over mate", 
            {fill: "#ffffff", align: "center"}
        );
        this.scoreGame(game.scores);
        game.time.events.add(3000, this.end, this);
    }
    scoreGame(scores) {
        let cashEarned = 0;
        scores.forEach((success, index) => {
            if (success) {
                console.log(`cash + ${this.sceneList[index].value}`);
                cashEarned += this.sceneList[index].value;
            }
        }, this);
        this.props.workCompleteHandler(cashEarned);
    }

    // Old setup method. Most of this logic needs to move into the new one
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
        this.game.pendingDestroy = true;
        this.setState({gameOver: true});
    }
}

export default WorkGames;