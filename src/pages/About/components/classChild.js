import React, { Component } from "react";

export default class ClassChild extends Component {
  render() {
    return (
      <div>
        {this.props.data}
        <button onClick={() => this.props.handleData("子元件 ")}>change</button>
      </div>
    );
  }
}
