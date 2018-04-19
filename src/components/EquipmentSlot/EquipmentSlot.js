import React from "react";

function EquipmentSlot(props) {
    const { item, title } = props;
    if (item !== "naked") {
        const stats = item.stats;
        return (
            <div className="equipment-slot">
                <h2 className="slot-title">{title}</h2>
                <div className="slot-icon">
                    <img src={item.icon} alt={`${item.name} icon`} />
                </div>
                <div className="slot-text">
                    <p className="equipped-item">{item.name}</p>
                    <p className="equipped-item-stats">
                        {stats.str ? `Str: +${stats.str} ` : "" }
                        {stats.dex ? `Dex: +${stats.dex} ` : ""}
                        {stats.int ? `Int: +${stats.int} ` : ""} 
                        {stats.wis ? `Wis: +${stats.wis} ` : ""}
                        {stats.sex ? `Sex: +${stats.sex} ` : ""} 
                        {stats.brand ? `Brand: +${stats.brand} ` : ""}
                        {stats.luck ? `Luck: +${stats.luck} ` : ""}
                        {stats.credit ? `Credit: +${stats.credit} ` : ""}
                    </p>
                    <button className="equipped-uneqp-btn" onClick={props.handleUnequipButton}
                        data-item-index={props.item.id} >
                        Unequip
                    </button>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="equipment-slot">
                <h2 className="slot-title empty-title">{title}</h2>
                <p className="equipped-item"><span className="naked">{`${item}`}</span></p>
            </div>
        );
    }
}

export default EquipmentSlot;