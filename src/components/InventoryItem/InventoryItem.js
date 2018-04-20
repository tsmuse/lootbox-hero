import React from "react";

function InventoryItem(props) {
    const { loot } = props;
    const stats = loot.stats;
    return (
        <li className="inventory-item" >
            <div className="inventory-item-icon">
                <img src={loot.icon} alt={`${loot.name} icon`} />
            </div>
            <div className="inventory-item-text">
                <h3 className="inventory-item-name">
                    {loot.name}
                </h3>
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
                <div className="inventory-item-btn-bar">
                    <button className="inventory-equip-btn" onClick={props.handleEquipButton}
                        data-item-index={loot.id} disabled={props.equipDisabled}>
                        Equip
                </button>
                    <button className="inventory-junk-btn" onClick={props.handleJunkButton}
                        data-item-index={loot.id} >
                        Junk
                </button>
                </div>
            </div>
            
        </li>
    );
}

export default InventoryItem;