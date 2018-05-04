import React, { Component } from "react";

class LootboxStoreItem extends Component{
    render(){
        const { itemImg, itemTitle, itemPrice, itemClickHandler, playerCash, index } = this.props;
        return(
            <li className="lootbox-store-item">
                <img className="lootbox-store-img" src={itemImg} alt="loot item" />
                <h2 className="lootbox-store-item-title">{itemTitle}</h2>
                <button className="lootbox-store-buy-btn"
                    onClick={itemClickHandler}
                    data-store-id={index}
                    disabled={playerCash < itemPrice}
                >
                    {`Buy for ${itemPrice}`}
                </button>
            </li>
        );
    }
}

export default LootboxStoreItem;