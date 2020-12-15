import React, { Component } from "react";
import Footer from "../../reuseable/Footer";
import MiniDrawer from "../../reuseable/Header";


class ActionGames extends Component {
  render() {
    return (
      <React.Fragment>
        <MiniDrawer>
          <div>
            <h1>Actiongames</h1>
          </div>
        </MiniDrawer>
       <Footer/>
      </React.Fragment>
    );
  }
}
export default ActionGames;
