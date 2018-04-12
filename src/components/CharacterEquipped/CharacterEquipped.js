import React, { Component } from "react";
import MountSlot from "../MountSlot/MountSlot";
import EquipmentSlot from "../EquipmentSlot/EquipmentSlot";

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