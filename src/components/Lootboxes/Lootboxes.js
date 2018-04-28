import React, { Component } from "react";
import generateBoxes from "./lootboxLogic";


class Lootboxes extends Component {
    constructor(props){
        super(props);
        this.handleOpenBoxes = this.handleOpenBoxes.bind(this);
        // this.lootID = generateLootIDs();
        this.state = {
            "isLoaded" : false,
            "lootTable" : {}
        };
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/stubs/lootTable.json")
            .then(result => result.json())
            .then(
                (result)=>{
                    this.setState({"lootTable": result, "isLoaded": true});
                },
                (error) => {
                    this.setState({error});
                });
    }

    handleOpenBoxes() {
        const lootbox = generateBoxes();
        this.props.lootboxChangeHandler(lootbox);
    }

    render(){
        
        const boxToRender = this.props.lastBox,
            { error, isLoaded } = this.state;
        if(error){
            return <div> Error {error.message} </div>;
        }
        else if(!isLoaded){
            return <div> Loading loot tables...</div>;
        }
        else{
            return (
                <section className="lootboxes">
                    <div className="lootboxes-stats-group">
                        <table className="lootboxes-stats-table">
                            <tbody>
                                <tr className="lootboxes-stats-row">
                                    <td className="lootboxes-stats-label">Unopened boxes</td>
                                    <td className="lootboxes-stats-value">{this.props.playerUnopenedBoxes}</td>
                                </tr>
                                <tr className="lootboxes-stats-row">
                                    <td className="lootboxes-stats-label">Cash</td>
                                    <td className="lootboxes-stats-value">{this.props.playerCash}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="lootboxes-button-group">
                        <button className="open-boxes-btn" onClick={this.handleOpenBoxes}
                            disabled={this.props.playerUnopenedBoxes === 0} >
                            Open Boxes
                        </button>
                        <button className="buy-boxes-btn"
                            onClick={this.props.buyLootboxHandler}
                            disabled={this.props.playerCash < 3}>
                            Buy Box
                        </button>
                    </div>
                    <ul className="loot-list">
                        {boxToRender.map(function (item, index) {
                            return (
                                <li className="loot-item unopenedBox" key={`item_${index}`}>
                                    <h2 className="item-label">{`Item ${index + 1}`}</h2>
                                    <div className="item-card">
                                        <h3 className="item-name">{item.name}</h3>
                                        <p className="item-desc">{item.desc}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            );
        }
    }
}

export default Lootboxes;