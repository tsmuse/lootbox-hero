import React from "react";

function CrateStoreItem(props) {
    return (
        <li className="crate-store-item">
            <img className="crate-store-item-img" src={props.itemImg} />
            <h3 className="crate-store-item-name">{props.itemName}</h3>
            <p className="crate-store-item-price">{props.itemPrice}CC</p>
            <p className="crate-store-item-desc">{props.itemDesc}</p>
            <button className="crate-store-buy-btn" onClick={props.itemBuyHandler}
                data-store-id={props.itemID} disabled={props.buyDisabled} >
                Buy now, win!
            </button>
        </li>
    );
}

export default CrateStoreItem;