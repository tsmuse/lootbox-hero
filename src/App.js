import React, { Component } from "react";
import "normalize.css";
import Player from "./Player";



class App extends Component {
    render(){
        return(
            <React.Fragment>
                <Player player={this.props.player} baseAbilities={this.props.baseAbilities}/>
            </React.Fragment>
        );
        
    }
}

export default App;
