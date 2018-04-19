import React, { Component } from "react";

class CharacterSprites extends Component {
    render (){
        const {playerSprite, mountSprite, playerName, playerCurrency} = this.props;
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
                    {/* 
                        current plan is to layer PNGs on top of eachother, but this might be
                        stupidly complicated/resource intensive. This might need to be an image
                        that gets generated on the backend, but that could also be stupidly
                        expensive...final implimentation still TBD
                    */}
                    <div className="player-sprite">
                        <img src={playerSprite.base} alt="Player sprite placeholder" />
                    </div>
                    <div className="mount-sprite">
                        <img src={mountSprite.base} alt="Mount sprite placeholder" />
                    </div>
                </div>
            </section>
        );
    }
}

export default CharacterSprites;