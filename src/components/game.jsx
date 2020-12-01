import React, {Component} from "react";
import Board from "./board"
import Counter from "./counter";

class Game extends Component {
    state = {
        blackTiles: [[0, 0], [1, 1], [2, 1]],
        data: [[1, 0, 0, 0], 
               [0, 1, 0, 0], 
               [0, 1, 0, 0], 
               [0, 0, 0, 0]],  
        score: 5
    };

    handleMouseDown = (row, column) => {
        let blackTiles = this.state.blackTiles;
        let data = this.state.data;
        let score = this.state.score;

        // Check if tile is black or white
        if (data[row][column] === 1) {
            data[row][column] = !data[row][column];
            score++;

            // Generate a random integer (index) 0 - 12
            var index = Math.floor(Math.random() * 13) | 0;

            // If there is black tiles in spaces before #12, then add that number to the random int.
            while (index === (blackTiles[0][0] * 4) + blackTiles[0][1] || 
                   index === (blackTiles[1][0] * 4) + blackTiles[1][1] ||
                   index === (blackTiles[2][0] * 4) + blackTiles[2][1]) {
                       index++;
            }

            let newRow = index / 4 | 0;
            let newColumn = index % 4 | 0;

            // Set board data on new Index to 1
            data[newRow][newColumn] = 1;

            // Find index in blackTiles and set it to new Row and new Column
            for (var i = 0; i < blackTiles.length; i++) {
                if(blackTiles[i][0] === row && blackTiles[i][1] === column) {
                    blackTiles[i][0] = newRow;
                    blackTiles[i][1] = newColumn;
                }
            }
        }
        this.setState({blackTiles, data, score});
    }

    render() {
        return (
            <div>
                <Counter score={this.state.score}></Counter>
                <Board data={this.state.data}
                       onMouseDown={this.handleMouseDown}>
                </Board>
            </div>       
        );
    }
}

export default Game;
