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
            <a onClick={this.props.onClick}>
                <div className={this.props.className}>
                    <img src={sprite.base} alt={this.props.alt} />
                </div>
            </a>
        );
    }
}

export default SpriteButton;