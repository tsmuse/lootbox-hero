import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "normalize.css";
import Player from "./Player";


function Home(props){
    return(
        <div>
            <h1>Welcome to the Lootbox Hero Homepage!</h1>
            <p> 
                It's not finished...in fact it's not even started! But here are a few places you can
                go right now!
            </p>
            <Link to="/player">Player Page</Link>
        </div>
    );
}
class App extends Component {
    render(){
        return(
            // <React.Fragment>
            //     <Player player={this.props.player} baseAbilities={this.props.baseAbilities}/>
            // </React.Fragment>
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/player" render={props => (
                        <Player player={this.props.player} baseAbilities={this.props.baseAbilities}/>
                    )} />
                </React.Fragment>
            </Router>
        );
        
    }
}

export default App;
