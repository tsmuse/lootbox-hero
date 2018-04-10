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

// stub to handle the other games I don't have yet
export function setupPlaceholder(name){
    let scene = new Container();
    scene.visible = false;
    let style = new TextStyle({
        fontFamily: "Futura",
        fontSize: 32,
        fill: "white"
    });
    let message = new Text(`Fun! Game ${name}`, style);
    let timer = new Text("timer", style);
    message.position.set(120, this.game.stage.height / 2);
    scene.addChild(message);
    timer.position.set(120, this.game.stage.height / 2 + 40);
    scene.addChild(timer);
    scene.timer = timer;
    this.placeholderScenes.push(scene);
    this.game.stage.addChild(scene);
}
export function placeholderGame(){
    this.frameCounter += 1;
    let time = Math.round(this.frameCounter / this.game.ticker.FPS);
    console.log(time);
    this.currentScene.timer.text = `Timer: ${time}`;
    if (this.frameCounter > (this.game.ticker.FPS * this.sceneTimer)) {
        this.frameCounter = 0;
        this.scores.push(true);
        this.gameComplete();
    }

}