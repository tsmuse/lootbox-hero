import React, { Component } from "react";
import generateBoxes from "./lootboxLogic";
import { rolldice } from "../../Helpers";

class Lootboxes extends Component {
    constructor(props){
        super(props);
        this.handleOpenBoxes = this.handleOpenBoxes.bind(this);
        this.handleOpenBox = this.handleOpenBox.bind(this);
        // this.lootID = generateLootIDs();
        this.state = {
            isLoaded : false,
            lootTable : {},
            boxItems : []
        };
    }
    
    componentDidMount(){
        // mark the lootboxes as opened since we are rendering the lastbox on load
        let initalBoxItems = [];
        for(let loot of this.props.lastBox){
            let item = { spinning: false, opened: true };
            initalBoxItems.push(item);
        }
        // this probably should be in a middleware somewhere
        fetch("http://localhost:3000/stubs/lootTable.json")
            .then(result => result.json())
            .then(
                (result)=>{
                    this.setState({
                        boxItems: initalBoxItems,
                        "lootTable": result,
                        "isLoaded": true
                    });
                },
                (error) => {
                    this.setState({error});
        });
    }

    handleOpenBoxes() {
        const lootbox = generateBoxes();
        this.handleNewBoxes(lootbox.length);
        this.props.lootboxChangeHandler(lootbox);
    }
    handleOpenBox(e) {
        console.log(e.currentTarget.dataset.lootId);
        let openedIndex = e.currentTarget.dataset.lootId;
        this.setState((prevState, props) => {
            let newState = prevState;
            newState.boxItems[openedIndex].opened = true;

            return newState;
        });
    }
    handleNewBoxes(boxCount){
        let newOpenBoxes = [];
        for(let i = 0; i < boxCount; i++){
            newOpenBoxes[i] = { spinning: true, opened: false};
        }
        this.setState({ boxItems : newOpenBoxes });
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
                            const randomCSS = {
                                backgroundPositionY: `${(rolldice(6) - 1) * -512}px` 
                            },
                                itemClickHandler = this.state.boxItems[index].opened 
                                    ? ()=>{} 
                                    : this.handleOpenBox;
                            let classes = "loot-item";
                            if (this.state.boxItems[index].spinning){
                                classes += " spinning";
                                setTimeout(()=>{
                                    this.setState((prevState, props)=>{
                                        let newState = prevState;
                                        newState.boxItems[index].spinning = false;
                                        return newState;
                                    });
                                }, rolldice(8) * 500);
                            }
                            if (!this.state.boxItems[index].opened)
                                classes += " unopenedBox";
                            return (
                                <li className={classes} 
                                    key={`item_${index}`} 
                                    style={randomCSS}
                                    onAnimationStart={()=>{}}
                                >
                                    <a className="loot-item-button" 
                                        onClick={itemClickHandler}
                                        data-loot-id={index}
                                    >
                                        <img className="item-image" 
                                            src={item.icon} alt={`${item.name} sprite image`} 
                                        />
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