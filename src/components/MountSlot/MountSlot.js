import React from "react";
import EquipmentSlot from "../EquipmentSlot/EquipmentSlot";

function MountSlot(props) {
    if (props.mount.equipped) {
        return (
            <div className="equipment-slot mount">
                <h2 className="slot-title">{props.title}</h2>
                <EquipmentSlot title="Head" item={props.mount.mountHead}
                    handleUnequipButton={props.handleUnequipButton} />
                <EquipmentSlot title="Body" item={props.mount.mountBody}
                    handleUnequipButton={props.handleUnequipButton} />
                <EquipmentSlot title="Feet" item={props.mount.mountFeet}
                    handleUnequipButton={props.handleUnequipButton} />
                <EquipmentSlot title="Pet" item={props.mount.mountPet}
                    handleUnequipButton={props.handleUnequipButton} />
            </div>
        );
    }
    else {
        return (
            <div className="equipment-slot mount">
                <h2 className="slot-title">{props.title}</h2>
                <p className="equipped-item">No mount equipped</p>
            </div>
        );
    }
}

export default MountSlot;