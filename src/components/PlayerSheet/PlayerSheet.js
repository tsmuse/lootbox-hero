import React, { Component } from "react";
import CharacterStats from "../CharacterStats/CharacterStats";
import CharacterInventory from "../CharacterInventory/CharacterInventory";
import CharacterEquipped from "../CharacterEquipped/CharacterEquipped";
import CharacterSprites from "../CharacterSprites/CharacterSprites";

class PlayerSheet extends Component{
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
                        playerName={player.name}
                        playerCurrency={player.currency}
                    />
                    <CharacterEquipped playerEquipped={player.equipped}
                        playerMount={player.mount}
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
}

export default PlayerSheet;