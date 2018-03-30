import React, { Component } from "react";

function CrateStoreItem(props){
    return (
        <li className="crate-store-item" key={props.key}>
            <img className="crate-store-item-img" src={props.itemImg} />
            <h3 className="crate-store-item-name">{props.itemName}</h3>
            <p className="crate-store-item-price">{props.itemPrice}CC</p>
            <p className="crate-store-item-desc">{props.itemDesc}</p>
            <button className="crate-store-buy-btn" onClick={props.itemBuyHandler} 
            data-store-id={props.itemID} >
                Buy now, win!
            </button>
        </li>
    );
}
class CrateStore extends Component {
    constructor(props){
        super(props);
        this.state = {
            "storeInventory": {
                "tier1": {
                    "superAwesomeWinSword": {
                        "item": {
                            "name": "Tier 1 Head Variation 1",
                            "desc": "This is a fancy new Variation 1 Tier 1 Head. It does +100 to Strength and +50 to Credit Score",
                            "stats": {
                                "str": 100,
                                "dex": 0,
                                "int": 0,
                                "wis": 0,
                                "sex": 0,
                                "brand": 0,
                                "luck": 0,
                                "credit": 50
                            },
                            "set": ""
                        },
                        "price": 400,
                        "img": "https://placebear.com/400/300",
                        "name": "Tier 1 Super Aweomser Test Item!!",
                        "desc": "This item is substantially better than almost anything you can find in a crate 99% of the time. Literally. The odds are terrible."
                    }
                }
            }
        };
        this.handleBuyButton = this.handleBuyButton.bind(this);
    }

    handleBuyButton(e){

    }

    generateListings(inventory, tier){
        var listingsToRender = [];
        for(let item in inventory[tier]){
            let listing = <CrateStoreItem key={`${tier}_${item}`} 
                itemImg={inventory[tier][item].img} 
                itemName={inventory[tier][item].name} 
                itemPrice={inventory[tier][item].price}
                itemDesc={inventory[tier][item].desc}
                itemBuyHandler={this.handleBuyButton}
                itemID={`${tier}_${item}`} />;
            listingsToRender.push(listing);
        }

        return listingsToRender;
    }
    render(){
        // NOTE: The listing needs to have the item object in it so it can be easily dropped into
        // inventory. 
        const tier1ToRender = this.generateListings(this.state.storeInventory, "tier1");
        return (
            <section className="crate-store">
                <h1>CrateCash<sup>tm</sup> Store -- Pay...TO WIN!</h1>
                <section className="crate-store-section">
                    <h2 className="crate-store-section-title">Tier 1 Goods</h2>
                    <ul className="crate-store-section-list">
                        {tier1ToRender.map(function(listing){
                            return listing;
                        })}
                    </ul>
                </section>
            </section>
        );
    }
}

export default CrateStore;