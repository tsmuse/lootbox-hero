import React, { Component } from "react";

class SpriteButton extends Component {
    render(){
        {/* 
            current plan is to layer PNGs on top of eachother, but this might be
            stupidly complicated/resource intensive. This might need to be an image
            that gets generated on the backend, but that could also be stupidly
            expensive...final implimentation still TBD
        */}
        const sprite = this.props.sprite;
        return(
            <a className=" sprite-button" onClick={this.props.onClick}>
                <div className={this.props.className}>
                    {
                        sprite.head ? <img className="sprite-head-item" src={sprite.head} alt=""/>
                            : ""
                    }
                    {
                        sprite.hands ? <img className="sprite-hands-item" src={sprite.hands} alt="" />
                            : ""
                    }
                    {
                        sprite.chest ? <img className="sprite-chest-item" src={sprite.chest} alt="" />
                            : ""
                    }
                    {
                        sprite.legs ? <img className="sprite-legs-item" src={sprite.legs} alt="" />
                            : ""
                    }
                    {
                        sprite.feet ? <img className="sprite-feet-item" src={sprite.feet} alt="" />
                            : ""
                    }
                    {
                        sprite.companion ? <img className="sprite-companion-item" src={sprite.companion} alt="" />
                            : ""
                    }
                    {
                        sprite.weaponMain ? <img className="sprite-weaponMain-item" src={sprite.weaponMain} alt="" />
                            : ""
                    }
                    {
                        sprite.weaponOff ? <img className="sprite-weaponOff-item" src={sprite.weaponOff} alt="" />
                            : ""
                    }
                    <img className="sprite-base" src={sprite.base} alt={this.props.alt} />
                </div>
            </a>
        );
    }
}

export default SpriteButton;