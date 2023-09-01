import React, { Component } from "react";
import UserProfile from "./userProfile";
import { faker } from "@faker-js/faker";

export default class DemoProps extends Component {
  // Dua username vao state
  // viet 1 ham setState
  // state o dau => setState tai do
  state = { username: "Alice" };
  handleChangeName = () => {
    this.setState({ username: faker.animal.cat() });
  };
  render() {
    // let username = "alice";
    return (
      <div>
        <h2>DemoProps</h2>
        <UserProfile
          handleChange={this.handleChangeName}
          username={this.state.username}
          title="Thong tin nguoi dung"
        />
      </div>
    );
  }
}
