import React from "react";

function EquipmentSlot(props) {
    if (props.item !== "naked") {
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

export default EquipmentSlot;