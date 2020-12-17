import React, { Component } from "react";
import Footer from "../../reuseable/Footer";
import MiniDrawer from "../../reuseable/Header";

class ActionGames extends Component {
  render() {
    return (
      <React.Fragment>
        <MiniDrawer>
          <div style={{backgroundColor:"lightgray"}}>
            
              <h1>Actiongames</h1>
           
            <div className="row">
              <div className="col-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/HoSkGuCAfkU"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="col-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/d74REG039Dk"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="col-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/mWQ_x2ltWD8"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="col-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/exwTDxaCHIM"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="col-4">
                <img
                  src="image/gamerlogo.jpg"
                  class="rounded mx-auto d-block mt-5"
                  alt="..."
                ></img>
              </div>

              <div className="col-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/v8pTMt6hhVE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </MiniDrawer>
        <Footer />
      </React.Fragment>
    );
  }
}
export default ActionGames;
