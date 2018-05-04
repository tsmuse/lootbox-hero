import React, { Component } from "react";
import generateBoxes from "./lootboxLogic";
import { rolldice } from "../../Helpers";
import LootboxStoreItem from "../LootboxStoreItem/LootboxStoreItem";
import LootboxItemCard from "../LootboxItemCard/LootboxItemCard";

class Lootboxes extends Component {
    constructor(props){
        super(props);
        this.handleOpenBoxes = this.handleOpenBoxes.bind(this);
        this.handleOpenItem = this.handleOpenItem.bind(this);
        this.handleBuyBoxes = this.handleBuyBoxes.bind(this);
        // this.lootID = generateLootIDs();
        // on the fence about lootBoxStore being a fetch or just being a hardcoded part
        // of the game...not sure how often it will change
        this.state = {
            boxItems : [],
            lootBoxStore: [
                { boxes: 1, price: 4, title: "Single Lootbox", img: "https://dummyimage.com/256x128/ff00b7/fff.png"},
                { boxes: 5, price: 17, title: "Five Lootbox Pack", img: "https://dummyimage.com/256x128/ff00b7/fff.png"},
                { boxes: 10, price: 32, title: "Ten Lootbox Pack", img: "https://dummyimage.com/256x128/ff00b7/fff.png"},
                { boxes: 50, price: 175, title: "Best Value Pack (50 boxes!!)", img: "https://dummyimage.com/256x128/ff00b7/fff.png"} 
            ]
        };
    }
    
    componentDidMount(){
        // mark the lootboxes as opened since we are rendering the lastbox on load
        let initalBoxItems = [];
        for(let loot of this.props.lastBox){
            let item = { opened: true };
            initalBoxItems.push(item);
        }
        this.setState({ boxItems: initalBoxItems});
        // this probably should be in a middleware somewhere and held in state by the App
        // removed the loot table for the generator methods in lootboxLogic, but will need this or 
        // somethign like it again to pull the sets table whern that gets created.
        // fetch("http://localhost:3000/stubs/lootTable.json")
        //     .then(result => result.json())
        //     .then(
        //         (result)=>{
        //             this.setState({
        //                 boxItems: initalBoxItems,
        //                 "lootTable": result,
        //                 "isLoaded": true
        //             });
        //         },
        //         (error) => {
        //             this.setState({error});
        // });
    }

    handleOpenBoxes() {
        const lootbox = generateBoxes();
        this.handleNewBoxes(lootbox.length);
        this.props.lootboxChangeHandler(lootbox);
    }
    handleOpenItem(e) {
        console.log(e.currentTarget.dataset.lootId);
        let openedIndex = e.currentTarget.dataset.lootId;
        this.setState((prevState, props) => {
            let newState = prevState;
            newState.boxItems[openedIndex].opened = true;

            return newState;
        });
    }
    handleBuyBoxes(e){
        let purchase = this.state.lootBoxStore[e.currentTarget.dataset.storeId];
        this.props.buyLootboxHandler(purchase.price, purchase.boxes);
    }

    handleNewBoxes(boxCount){
        let newOpenBoxes = [];
        for(let i = 0; i < boxCount; i++){
            newOpenBoxes[i] = { spinning: true, opened: false};
        }
        this.setState({ boxItems : newOpenBoxes });
    }

    render(){
        const boxToRender = this.props.lastBox,
            boxItems = this.state.boxItems;
        return (
            <section className="lootboxes">
                <div className="lootbox-store">
                    <div className="lootbox-stats-group">
                        <div className="lootbox-stats-row">
                            <p className="lootbox-stats-label">Cash</p>
                            <p className="lootbox-stats-value">{this.props.playerCash}</p>
                        </div>
                        <div className="lootbox-stats-row">
                            <p className="lootbox-stats-label">Unopened boxes</p>
                            <p className="lootbox-stats-value">{this.props.playerUnopenedBoxes}</p>
                        </div>
                    </div>
                    <ul className="lootbox-store-scroll-container">
                        {this.state.lootBoxStore
                            .map(function buildStoreListings(listing, index){
                                return (
                                    <LootboxStoreItem 
                                        itemImg={listing.img}
                                        itemTitle={listing.title}
                                        itemPrice={listing.price}
                                        itemClickHandler={this.handleBuyBoxes}
                                        playerCash = {this.props.playerCash}
                                        index={index}
                                        key={`lootbox-store-${index}`}
                                    />
                                );
                            }, this)
                        }
                    </ul>
                </div>
                <div className="lootboxes-button-group">
                    <button className="open-boxes-btn" onClick={this.handleOpenBoxes}
                        disabled={this.props.playerUnopenedBoxes === 0} >
                        Open a Box
                    </button>
                </div>
                <div className="loot-show-area">
                    <ul className="loot-list">
                        {boxToRender.map(function (item, index) {
                            const backgroundCSS = {
                                backgroundPositionY: `${(rolldice(6) - 1) * -512}px` 
                            },
                                cardClickHandler = boxItems.length > 0 && boxItems[index].opened 
                                    ? ()=>{} 
                                    : this.handleOpenItem;
                            let classes = "loot-item";
                            if (!this.state.boxItems[index].opened)
                                classes += " unopenedBox";
                            return (
                                <LootboxItemCard 
                                    randomBackground={backgroundCSS}
                                    handleCardClick={cardClickHandler}
                                    lootId={index}
                                    lootItem={item}
                                    lootOpened= {boxItems[index].opened}
                                /> 
                            );
                        }, this)}
                    </ul>
                </div>
            </section>
        );
    }
}

export default Lootboxes;