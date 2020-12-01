import React, { Component } from "react";
import Game from "./components/game";
import "./App.css";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <main className="container">
                  <Game></Game>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
