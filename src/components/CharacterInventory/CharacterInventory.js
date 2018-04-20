import React, { Component } from "react";
import InventoryItem from "../InventoryItem/InventoryItem";

class CharacterInventory extends Component {
    constructor(props){
        super(props);
        this.handleEquipButton = this.handleEquipButton.bind(this);
        this.handleJunkButton = this.handleJunkButton.bind(this);
    }

    handleEquipButton(e){
        this.props.equipItemHandler(e.currentTarget.dataset.itemIndex);
    }

    handleJunkButton(e){
        this.props.junkItemHandler(e.currentTarget.dataset.itemIndex);
    }

    shouldDisable(loot, mountEquipped){
        return (loot.type === "mountHead" || loot.type === "mountBody" ||
            loot.type === "mountFeet" || loot.type === "mountPet") &&
            !mountEquipped;
    }

    filterForRender(loot){
        var lootToRender = [];
        for (let item in loot) {
            if (!loot[item].equipped) {
                lootToRender.push(loot[item]);
            }
        }
        return lootToRender;
    }

    render(){
        
        var lootToRender = this.filterForRender(this.props.loot);
        return (
            <section className="inventory">
                <h2 className="stats-label">Inventory</h2>
                <ul className="inventory-list">
                    {   
                        lootToRender.map((loot, index) => {
                            return (<InventoryItem key={`0${loot.id}_${loot.type}`}
                                loot={loot}
                                handleEquipButton={this.handleEquipButton}
                                handleJunkButton={this.handleJunkButton}
                                equipDisabled={this.shouldDisable(loot, this.props.mountEquipped)}
                            />); 
                        })
                    }
                </ul>
            </section>  
        );
    }
}

export default CharacterInventory;