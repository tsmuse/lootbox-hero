import React, { Component } from "react";

function InventoryItem(props){
    return (
        <li className="intentory-item" >
            <p className="inventory-item-name">
                {props.lootName}
            </p>
            <button className="inventory-equip-btn" onClick={props.handleEquipButton} 
                data-item-index={props.lootID} disabled={props.equipDisabled}>
                Equip
            </button>
            <button className="inventory-junk-btn" data-item-index={props.lootIndex} >
                Junk
            </button>
        </li>
    );
}
class CharacterInventory extends Component {
    constructor(props){
        super(props);
        this.handleEquipButton = this.handleEquipButton.bind(this);
    }

    handleEquipButton(e){
        this.props.equipItemHandler(e.currentTarget.dataset.itemIndex);
    }

    shouldDisable(loot, mountEquipped){
        return (loot.type === "mountHead" || loot.type === "mountBody" ||
            loot.type === "mountFeet" || loot.type === "mountPet") &&
            !mountEquipped;
    }

    filterForRender(loot){
        var lootToRender = [];
        for (let item of loot) {
            if (!item.equipped) {
                lootToRender.push(item);
            }
        }
        return lootToRender;
    }

    render(){
        
        var lootToRender = this.filterForRender(this.props.loot);
        return (
            <section className="inventory">
                <ul className="inventory-list">
                    {   
                        lootToRender.map((loot, index) => {
                            return (<InventoryItem key={`0${loot.id}_${loot.type}`}
                                lootName={loot.name}
                                lootID={loot.id}
                                handleEquipButton={this.handleEquipButton}
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