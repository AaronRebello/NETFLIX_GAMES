import { Card } from "@material-ui/core";
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    this.state = {
      email: "",
      password: "",
      loggedIn,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // };
  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email === "rebelloaaron4@gmail.com" && password === "12345") {
      localStorage.setItem("token", "Aaron");
      this.setState({
        loggedIn: true,
      });
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/actiongames" />;
    }
    return (
      <React.Fragment>
        <nav class="navbar navbar-light bg-dark">
          <div>
            <a class="navbar-brand" href="#">
              <img
                src="image/gamerlogo.jpg"
                alt=""
                width="170"
                height="60"
              ></img>
            </a>
          </div>
        </nav>
        <form className="" onSubmit={this.submitForm}>
          <Card
            style={{
              height: 900,
              width: 1900,
              backgroundColor: "black",
            }}
          >
            <center>
              <h4 style={{ marginTop: 200, color: "white" }}>Sign in</h4>
              <input
                type="text"
                placeholder="Email"
                style={{
                  width: 500,
                  marginTop: 70,
                  height: 50,
                  border: "3px solid grey",
                  backgroundColor: "black",
                  color:"white"
                }}
                name="email"
                value={this.state.email}
                onChange={this.onHandleChange}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: 500,
                  marginTop: 20,
                  height: 50,
                  border: "3px solid grey",
                  backgroundColor: "black",
                  color:"white"
                }}
                name="password"
                value={this.state.password}
                onChange={this.onHandleChange}
              />
              <br />
              <input
                style={{
                  marginTop: 30,
                  color: "white",
                  backgroundColor: "black",
                  width: 300,
                  height: 35,
                }}
                type="submit"
                value="Sign up"
              />
            </center>
          </Card>
        </form>
      </React.Fragment>
    );
  }
}
