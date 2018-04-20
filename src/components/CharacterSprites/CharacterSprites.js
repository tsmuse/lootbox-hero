import React, { Component } from "react";
import SpriteButton from "../SpriteButton/SpriteButton";
         
class CharacterSprites extends Component {
    constructor(props){
        super(props);
        this.mountSpriteClickHandler = this.mountSpriteClickHandler.bind(this);
        this.playerSpriteClickHandler = this.playerSpriteClickHandler.bind(this);
    }
    render (){
        const {playerSprite, playerName, playerCurrency, mountEquipped} = this.props;
        return (
            <section className="character-sprites">
                <h1 className="player-name">{playerName}</h1>
                <ul className="currency-bar">
                    <li className="player-currency score">
                        <p className="currency-value"><span className="currency-label">score:</span> {playerCurrency.score}</p>
                    </li>
                    <li className="player-currency unopened-boxes">
                        <img className="currency-icon" 
                            src="https://dummyimage.com/32/ff00b7/fff.png" 
                            alt="unopened boxes icon"
                        />
                        <p className="currency-value">{playerCurrency.unopenedBoxes}</p>
                    </li>
                    <li className="player-currency cash">
                        <img className="currency-icon" 
                            src="https://dummyimage.com/32/ff00b7/fff.png" 
                            alt="cash icon" 
                        />
                        <p className="currency-value">{playerCurrency.cash}</p>
                    </li>
                    <li className="player-currency crate-cash">
                        <img className="currency-icon" 
                            src="https://dummyimage.com/32/ff00b7/fff.png" 
                            alt="cratecash icon" 
                        />
                        <p className="currency-value">{playerCurrency.crateCash}</p>
                    </li>
                </ul>
                <div className="sprites-area">
                    <SpriteButton className="player-sprite" 
                        sprite={playerSprite} 
                        alt="Player sprite placeholder"
                        onClick={this.playerSpriteClickHandler}
                    />
                    {this.shouldRenderMount(mountEquipped)}
                </div>
            </section>
        );
    }
    playerSpriteClickHandler(){
        this.props.switchEquippedHandler("player");
    }
    mountSpriteClickHandler(){
        this.props.switchEquippedHandler("mount");
    }
    shouldRenderMount(flag){
        if(flag){
            return (
                <SpriteButton className="player-sprite"
                    sprite={this.props.mountSprite}
                    alt="Mount sprite placeholder"
                    onClick={this.mountSpriteClickHandler}
                />
            );
        }
        else{
            return "";
        }
    }
}

export default CharacterSprites;