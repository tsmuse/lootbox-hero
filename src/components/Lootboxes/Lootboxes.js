import React, { Component } from "react";
import generateBoxes from "./lootboxLogic";


class Lootboxes extends Component {
    constructor(props){
        super(props);
        this.handleOpenBoxes = this.handleOpenBoxes.bind(this);
        this.handleOpenBox = this.handleOpenBox.bind(this);
        // this.lootID = generateLootIDs();
        this.state = {
            isLoaded : false,
            lootTable : {},
            boxesOpened : []
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

    handleOpenBox(evt) {
        console.log(evt);
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
                    {/* 
                        TODO: give each box an id that is the index representing the box in the
                        boxeOpened array in state, set the unopened-box class conditional to 
                        the value in state, pass in random values for animation-iteration-count
                        and background-position-y here, so they will be regenerated each time instead
                        of when the Sass is compiled like they are right now.    
                    */}
                    <ul className="loot-list">
                        {boxToRender.map(function (item, index) {
                            return (
                                <li className={`loot-item unopenedBox-${index}`} key={`item_${index}`}>
                                    <a className="loot-item-button" onClick={this.handleOpenBox}>
                                        <h2 className="item-label">{`Item ${index + 1}`}</h2>
                                        <div className="item-card">
                                            <h3 className="item-name">{item.name}</h3>
                                            <p className="item-desc">{item.desc}</p>
                                        </div>
                                    </a>
                                </li>
                            );
                        }, this)}
                    </ul>
                </section>
            );
        }
    }

    
}

export default Lootboxes;