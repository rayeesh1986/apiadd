import React, { Component } from "react";
import axios from "axios";

class Api extends Component {
  state = {
    count: 1
  };

  async componentDidMount() {
    try {
      const promise = await axios({
        url: "https://dog.ceo/api/breeds/list/all",
        method: "get"
      });

      console.log(promise);
      return promise;
    } catch (error) {
      console.log("error", error);
    }
  }

  render() {
    return <h1>Hello world {this.state.count}</h1>;
  }
}
export default Api;
