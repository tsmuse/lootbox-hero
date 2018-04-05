import React, { Component } from "react";

function MountSlot(props){
    if(props.mount.equipped){
        return(
            <div className="equipment-slot mount">
                <h2 className="slot-title">{props.title}</h2>
                <EquipmentSlot title="Head" item={props.mount.mountHead}
                    handleUnequipButton={props.handleUnequipButton} />
                <EquipmentSlot title="Body" item={props.mount.mountBody}
                    handleUnequipButton={props.handleUnequipButton} />
                <EquipmentSlot title="Feet" item={props.mount.mountFeet}
                    handleUnequipButton={props.handleUnequipButton} />
                <EquipmentSlot title="Pet" item={props.mount.mountPet}
                    handleUnequipButton={props.handleUnequipButton} />
            </div>
        );
    }
    else {
        return (
            <div className="equipment-slot mount">
                <h2 className="slot-title">{props.title}</h2>
                <p className="equipped-item">No mount equipped</p>
            </div>
        );
    }
}

function EquipmentSlot(props){
    if(props.item !== "naked"){
        return (
            <div className="equipment-slot">
                <h2 className="slot-title">{props.title}</h2>
                <p className="equipped-item">{props.item.name}</p>
                <p className="equipped-item-stats">
                    Str: +{props.item.stats.str}, Dex: +{props.item.stats.dex}, 
                    Int: +{props.item.stats.int}, Wis: +{props.item.stats.wis}, 
                    Sex: +{props.item.stats.sex}, Brand: +{props.item.stats.brand},
                    Luck: +{props.item.stats.luck}, Credit: +{props.item.stats.credit}
                </p>
                <button className="equipped-uneqp-btn" onClick={props.handleUnequipButton} 
                    data-item-index={props.item.id} >
                    Unequip
                </button>
            </div>
        );
    }
    else {
        return (
            <div className="equipment-slot">
                <h2 className="slot-title">{props.title}</h2>
                <p className="equipped-item">{props.item}</p>
            </div>
        );
    }
}

class CharacterEquipped extends Component{
    constructor(props){
        super(props);
        this.handleUnequipButton = this.handleUnequipButton.bind(this);
    }

    handleUnequipButton(e){
        this.props.unequipItemHandler(e.currentTarget.dataset.itemIndex);
    }
    render(){
        return (
            <section className="equipped-items">
                <EquipmentSlot title="Head" item={this.props.playerEquipped.head} 
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Hands" item={this.props.playerEquipped.hands}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Shoulders" item={this.props.playerEquipped.shoulders}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Chest" item={this.props.playerEquipped.chest}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Legs" item={this.props.playerEquipped.legs}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Knees" item={this.props.playerEquipped.knees}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Feet" item={this.props.playerEquipped.feet}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Neck" item={this.props.playerEquipped.neck}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Finger 1" item={this.props.playerEquipped.finger1}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Finger 2" item={this.props.playerEquipped.finger2}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Left back pocket" item={this.props.playerEquipped.lbPocket}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="backpack" item={this.props.playerEquipped.backpack}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Companion" item={this.props.playerEquipped.companion}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Main-hand" item={this.props.playerEquipped.weaponMain}
                    handleUnequipButton={this.handleUnequipButton} />
                <EquipmentSlot title="Off-hand" item={this.props.playerEquipped.weaponOff}
                    handleUnequipButton={this.handleUnequipButton} />
                <MountSlot title="Mount" mount={this.props.playerMount} 
                    handleUnequipButton={this.handleUnequipButton} />
            </section>
        );
    }
}

export default CharacterEquipped;