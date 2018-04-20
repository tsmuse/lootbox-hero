import React, { Component } from "react";
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
        const {playerEquipped, playerMount, equippedToShow} = this.props;
        if(equippedToShow === "player"){
            return (
                <React.Fragment>
                    <div className="equipped-items-col1">
                        <EquipmentSlot title="Head" item={playerEquipped.head}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="Hands" item={playerEquipped.hands}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="Shoulders" item={playerEquipped.shoulders}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="Chest" item={playerEquipped.chest}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="Legs" item={playerEquipped.legs}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="Knees" item={playerEquipped.knees}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="Feet" item={playerEquipped.feet}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="Neck" item={playerEquipped.neck}
                            handleUnequipButton={this.handleUnequipButton} />
                    </div>
                    <div className="equipped-items-col2">
                        <EquipmentSlot title="Finger 1" item={playerEquipped.finger1}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="Finger 2" item={playerEquipped.finger2}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="Left back pocket" item={playerEquipped.lbPocket}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="backpack" item={playerEquipped.backpack}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="Companion" item={playerEquipped.companion}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="Main-hand" item={playerEquipped.weaponMain}
                            handleUnequipButton={this.handleUnequipButton} />
                        <EquipmentSlot title="Off-hand" item={playerEquipped.weaponOff}
                            handleUnequipButton={this.handleUnequipButton} />
                        {/* This is going to be handled as a tab, which isn't build yet, just hanging
                        on to it for easier copy/paste */}
                       
                    </div>
                </React.Fragment>
            );
        }
        else {
            return (
                <div className="equipped-items-col1">
                    <EquipmentSlot title="Mount Head" item={playerMount.mountHead}
                        handleUnequipButton={this.handleUnequipButton} />
                    <EquipmentSlot title="Mount Body" item={playerMount.mountBody}
                        handleUnequipButton={this.handleUnequipButton} />
                    <EquipmentSlot title="Mount Feet" item={playerMount.mountFeet}
                        handleUnequipButton={this.handleUnequipButton} />
                    <EquipmentSlot title="Mount Pet" item={playerMount.mountPet}
                        handleUnequipButton={this.handleUnequipButton} />
                </div>
            );
        }
        
    }
}

export default CharacterEquipped;