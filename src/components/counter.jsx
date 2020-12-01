import React, { Component } from "react";

class Counter extends Component {
    render() {
        return (
            <p style={{margin: "auto", fontSize: "50px"}}>
                {this.props.score}
            </p>
        );
    }
}

export default Counter;
