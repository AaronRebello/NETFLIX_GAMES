import React, { Component } from "react";
import MiniDrawer from "../../reuseable/Header";
import Footer from "../../reuseable/Footer";

class RacingGames extends Component {
  render() {
    return (
      <React.Fragment>
        <MiniDrawer>
          <h1> RacingGames</h1>
        </MiniDrawer>
        <Footer />
      </React.Fragment>
    );
  }
}
export default RacingGames;
