import React, { Component } from "react";
import CrateStoreItem from "../CrateStoreItem/CrateStoreItem";

class CrateStore extends Component {
    constructor(props){
        super(props);
        this.state = {
            "storeInventory": {},
            "isLoaded" : false
        };
        this.handleBuyButton = this.handleBuyButton.bind(this);
    }

    componentDidMount(){
        fetch("http://localhost:3000/stubs/ccStoreInventory.json")
            .then(result => result.json())
            .then(
                (result) => {
                    this.setState({ "storeInventory": result, "isLoaded": true });
                },
                (error) => {
                    this.setState({ error });
                });
    }

    handleBuyButton(e){
        var itemID = e.currentTarget.dataset.storeId.split("_");
        if(itemID.length === 2){
            var itemTier = itemID[0];
            var itemName = itemID[1];
            var boughtItem = this.state.storeInventory[itemTier][itemName];
            boughtItem.item["id"] = itemName;
            this.props.buyItemHandler(boughtItem, itemName);
        }
        else{
            console.error(`ItemID was incorrect length. Expected 2, got ${itemID.length}`);
        }
        
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
                itemID={`${tier}_${item}`}
                buyDisabled={this.props.playerCrateCash < inventory[tier][item].price} />;
            listingsToRender.push(listing);
        }

        return listingsToRender;
    }
    render(){
        const {isLoaded , storeInventory, error } = this.state;
        if(error){
            return <div>Error {error.message} </div>;
        } 
        else if(!isLoaded){
            return <div>Loading...</div>;
        }
        else {
            const tier1ToRender = this.generateListings(storeInventory, "tier1");
            return (
                <section className="crate-store">
                    <h1>CrateCash<sup>tm</sup> Store -- Pay...TO WIN!</h1>
                    <h2>Your CrateCash<sup>tm</sup>: {this.props.playerCrateCash}</h2>
                    <section className="crate-store-section">
                        <h2 className="crate-store-section-title">Tier 1 Goods</h2>
                        <ul className="crate-store-section-list">
                            {tier1ToRender.map(function (listing) {
                                return listing;
                            })}
                        </ul>
                    </section>
                </section>
            );
        }
    }
}

export default CrateStore;