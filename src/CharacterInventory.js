import React, { Component } from "react";

function InventoryItem(props){
    return (
        <li className="intentory-item" >
            <p className="inventory-item-name">
                {props.lootName}
            </p>
            <p className="inventory-item-stats">
                Str: +{props.lootStats.str}, Dex: +{props.lootStats.dex},
                    Int: +{props.lootStats.int}, Wis: +{props.lootStats.wis},
                    Sex: +{props.lootStats.sex}, Brand: +{props.lootStats.brand},
                    Luck: +{props.lootStats.luck}, Credit: +{props.lootStats.credit}
            </p>
            <button className="inventory-equip-btn" onClick={props.handleEquipButton} 
                data-item-index={props.lootID} disabled={props.equipDisabled}>
                Equip
            </button>
            <button className="inventory-junk-btn" onClick={props.handleJunkButton}
                data-item-index={props.lootID} >
                Junk
            </button>
        </li>
    );
}
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
                <ul className="inventory-list">
                    {   
                        lootToRender.map((loot, index) => {
                            return (<InventoryItem key={`0${loot.id}_${loot.type}`}
                                lootName={loot.name}
                                lootID={loot.id}
                                lootStats={loot.stats}
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