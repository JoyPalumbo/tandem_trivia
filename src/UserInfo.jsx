import React from "react";
import Axios from "axios";

class UserInfo extends React.Component {
  constructor() {
    super();

    this.state = { name: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.name);
    event.preventDefault();
    Axios.get("/user").then((response) => {
      // const top = response.data;
      console.log("checking response.data", response.data);

      this.setState({ name: response.data });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UserInfo;
