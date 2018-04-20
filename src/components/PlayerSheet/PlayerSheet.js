import React, { Component } from "react";
import CharacterStats from "../CharacterStats/CharacterStats";
import CharacterInventory from "../CharacterInventory/CharacterInventory";
import CharacterEquipped from "../CharacterEquipped/CharacterEquipped";
import CharacterSprites from "../CharacterSprites/CharacterSprites";

class PlayerSheet extends Component{
    constructor(props){
        super(props);
        this.state = {
            visibleEquipment: "player"
        };
        this.handleEquippedSwitch = this.handleEquippedSwitch.bind(this);
    }
    render() {
        const player = this.props.player;
        return (
            <section className="character-sheet">
                <section className="player-stats-equipped-gCol">
                    <CharacterStats playerAbilities={player.abilities}
                    />
                    <CharacterSprites 
                        playerSprite={player.sprite}
                        mountSprite={player.mount.sprite}
                        mountEquipped={player.mount.equipped}
                        playerName={player.name}
                        playerCurrency={player.currency}
                        switchEquippedHandler={this.handleEquippedSwitch}
                    />
                    <CharacterEquipped playerEquipped={player.equipped}
                        playerMount={player.mount}
                        equippedToShow={this.state.visibleEquipment}
                        unequipItemHandler={this.props.unequipItemHandler} 
                    />
                </section>
                <section className="inventory-gCol">
                    <CharacterInventory loot={player.loot}
                        mountEquipped={player.mount.equipped}
                        equipItemHandler={this.props.equipItemHandler}
                        junkItemHandler={this.props.junkItemHandler} 
                    />
                </section>
            </section>
        );
    }

    handleEquippedSwitch(activeEquipped){
        this.setState({visibleEquipment: activeEquipped});
    }
}

export default PlayerSheet;