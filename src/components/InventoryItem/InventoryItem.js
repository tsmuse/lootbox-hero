import React from "react";

function InventoryItem(props) {
    const { lootStats: stats } = props;
    return (
        <li className="intentory-item" >
            <p className="inventory-item-name">
                {props.lootName}
            </p>
            <p className="inventory-item-stats">
                {stats.str ? `Str: +${stats.str} ` : ""}
                {stats.dex ? `Dex: +${stats.dex} ` : ""}
                {stats.int ? `Int: +${stats.int} ` : ""}
                {stats.wis ? `Wis: +${stats.wis} ` : ""}
                {stats.sex ? `Sex: +${stats.sex} ` : ""}
                {stats.brand ? `Brand: +${stats.brand} ` : ""}
                {stats.luck ? `Luck: +${stats.luck} ` : ""}
                {stats.credit ? `Credit: +${stats.credit} ` : ""}
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