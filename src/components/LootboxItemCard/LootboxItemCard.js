import React, { Component } from "react";

class LootboxItemCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            details: false
        };
        this.handleDetailsControl = this.handleDetailsControl.bind(this);
    }

    render(){
        const { randomBackground, handleCardClick, lootId, lootItem, lootOpened } = this.props;
        const itemClasses = lootOpened ? "loot-item" : "loot-item unopenedBox";
        const detailsClasses = this.state.details ? "item-desc open" : "item-desc closed";
        return(
            <li className={itemClasses}
                key={`item_${lootId}`}
                style={randomBackground}
                onClick={handleCardClick}
                data-loot-id={lootId}
            >
                
                    <img className="item-image"
                        src={lootItem.lootCardIcon} alt={`${lootItem.name} sprite`}
                    />
                    <div className="item-card">
                        <h3 className="item-name">{lootItem.name}</h3>
                        <a className="details-control" onClick={this.handleDetailsControl}>show details</a>
                        <p className={detailsClasses} >{lootItem.desc}</p>
                    </div>
                
            </li>
        );
    }

    handleDetailsControl(){
        const detailsNewState = !this.state.details;
        this.setState({details: detailsNewState});
    }
}

export default LootboxItemCard;