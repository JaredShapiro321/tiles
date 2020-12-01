import React, {Component} from "react";
import Tile from "./tile"

class Board extends Component {
    createKey = (row, column) => {
        return "" + (row * 10) + column;
    }

    render() {
        const nums = [0, 1, 2, 3];

        return (
            <div className="game">
                <table>
                    <tbody>
                        {nums.map((row) => (   
                            <tr key={row}>
                                {nums.map((column) => (
                                    <td key={column}>
                                        <Tile active={this.props.data[row][column]} 
                                            onMouseDown={() => this.props.onMouseDown(row, column)}>
                                        </Tile>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Board;
