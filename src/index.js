import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "normalize.css";
import "./lootboxhero.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, 
    document.getElementById("reactRoot"));
registerServiceWorker();
