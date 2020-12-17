import React, { Component } from "react";
import MiniDrawer from "../../reuseable/Header";
import Footer from "../../reuseable/Footer";

class LogicGames extends Component {
  render() {
    return (
      <React.Fragment>
        <MiniDrawer>
          <h1> LogicGames</h1>
        </MiniDrawer>
        <Footer />
      </React.Fragment>
    );
  }
}
export default LogicGames;
