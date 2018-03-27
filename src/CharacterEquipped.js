import React, { Component } from "react";

function MountEquipment(props) {
    return (
        <React.Fragment>
            <h3 className="mount-slot">Type</h3>
            <p className="equipped-item">{props.playerMount.type}</p>
            <h3 className="mount-slot">Head</h3>
            <p className="equipped-item">{props.playerMount.mountHead.name}</p>
            <h3 className="mount-slot">Body</h3>
            <p className="equipped-item">{props.playerMount.mountBody.name}</p>
            <h3 className="mount-slot">Feet</h3>
            <p className="equipped-item">{props.playerMount.mountFeet.name}</p>
            <h3 className="mount-slot">Pet</h3>
            <p className="equipped-item">{props.playerMount.mountPet.name}</p>
        </React.Fragment>
    );
}

class CharacterEquipped extends Component{

    render(){
        return (
            <section className="equipped-items">
                <div className="equipment-slot">
                    <h2 className="slot-title">Head</h2>
                    <p className="equipped-item">{this.props.playerEquipped.head.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Hands</h2>
                    <p className="equipped-item">{this.props.playerEquipped.hands.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Shoulders</h2>
                    <p className="equipped-item">{this.props.playerEquipped.shoulders.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Chest</h2>
                    <p className="equipped-item">{this.props.playerEquipped.chest.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Legs</h2>
                    <p className="equipped-item">{this.props.playerEquipped.legs.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Knees</h2>
                    <p className="equipped-item">{this.props.playerEquipped.knees.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Feet</h2>
                    <p className="equipped-item">{this.props.playerEquipped.feet.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Neck</h2>
                    <p className="equipped-item">{this.props.playerEquipped.neck.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Finger 1</h2>
                    <p className="equipped-item">{this.props.playerEquipped.finger1.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Finger 2</h2>
                    <p className="equipped-item">{this.props.playerEquipped.finger2.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Left back pocket </h2>
                    <p className="equipped-item">{this.props.playerEquipped.lbPocket.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Backpack</h2>
                    <p className="equipped-item">{this.props.playerEquipped.backpack.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Companion pet</h2>
                    <p className="equipped-item">{this.props.playerEquipped.companion.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Main-hand</h2>
                    <p className="equipped-item">{this.props.playerEquipped.weaponMain.name}</p>
                </div>
                <div className="equipment-slot">
                    <h2 className="slot-title">Off-hand</h2>
                    <p className="equipped-item">{this.props.playerEquipped.weaponOff.name}</p>
                </div>
                <div className="equipment-slot mount">
                    <h2 className="slot-title">Mount</h2>
                    {
                        this.props.playerMount.equipped
                            ? <MountEquipment playerMount={this.props.playerMount} /> 
                            : <p className="equipped-itme">None</p>
                    }
                </div>
            </section>
        );
    }
}

export default CharacterEquipped;