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
import { preloadTreasureHunterPhaser, createTreasureHunterPhaser, TreasureHunter } 
    from "../../microgames/TreasureHunterPhaser";

class WorkGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOver : false
        };
        this.shiftList = this.props.shiftList;
        this.scenesToPlay = [];
        this.sceneTimer = 5;
        this.scores = [];
        this.setupGame = this.setupGame.bind(this);
        // define the scenes for each microgame
        this.placeholderScenes = [];
        // bind the functions from each game module?

    }
    componentDidMount() {
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