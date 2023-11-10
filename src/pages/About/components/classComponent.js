import React, { Component } from "react";
import ClassChild from "./classChild";

class componentName extends Component {
  state = {
    num: 0,
    data: "父元件資料",
  };

  handleNum(type) {
    if (type === "minus") {
      this.setState({
        ...this.state,
        num: this.state.num - 1,
      });
    } else {
      this.setState({
        ...this.state,
        num: this.state.num + 1,
      });
    }
  }
  handleData(childData) {
    this.setState({
      ...this.state,
      data: childData,
    });
  }
  change(params) {
    this.setState({
      ...this.state,
      data: params,
    });
  }
  componentDidMount() {
    console.log("componentDidMount"); // 調用兩次，虛擬DOM => 實際DOM
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <p>計算人數</p>
        <button onClick={() => this.handleNum("minus")}>+</button>
        {this.state.num}
        <button onClick={() => this.handleNum("")}>-</button>
        <div>
          ClassChild:
          <ClassChild
            data={this.state.data}
            handleData={this.handleData.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default componentName;
