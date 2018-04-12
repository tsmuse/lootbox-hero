import React from "react";

function InventoryItem(props) {
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

export default InventoryItem;