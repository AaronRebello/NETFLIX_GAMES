import React, { Component, Fragment } from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

class GetStarted extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-light bg-dark nav1">
          <div>
            <a class="navbar-brand" href="#">
              <img
                src="image/gamerlogo.jpg"
                alt=""
                width="170"
                height="60"
              ></img>
            </a>
            <a
              href="/login"
              class="btn btn-danger mt-2 "
              style={{ fontSize: 20, backgroundColor: "red", marginLeft: 1570 }}
              tabindex="-1"
              role="button"
            >
              Sing in
            </a>
          </div>
        </nav>

        {/************************************************************************/}

        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img
              src="image/img1.jpg"
              class="d-block w-100 img1"
              style={{}}
              alt="..."
            />
            <div
              class="carousel-caption d-none d-md-block"
              style={{ fontFamily: "cursive", marginBottom: 300 }}
            >
              <h1 class="display-2">
                Unlimited Games, Action, Sports, Racing and more.
              </h1>
              <h3>Play AnyWhere, Cancel anytime.</h3>
              <a
                href="#"
                class="btn btn-danger mt-4"
                style={{
                  fontSize: 50,
                  fontFamily: "-moz-initial",
                  backgroundColor: "red",
                }}
                tabindex="-1"
                role="button"
              >
                GET STARTED{" "}
                <KeyboardArrowRightIcon
                  style={{ fontSize: 50, marginBottom: 10 }}
                />
              </a>
            </div>
          </div>
        </div>

        {/************************************************************************/}

        <div class="row ">
          <div
            class="col-6"
            style={{ padding: 200, backgroundColor: "black", color: "white" }}
          >
            <h1 class="display-4">Enjoy on your TV.</h1>
            <h3>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h3>
          </div>

          <div class="col-6" style={{ backgroundColor: "black" }}>
            {" "}
            <img
              src="image/xcloud_art.0.jpg"
              class="rounded mx-auto d-block"
              alt="..."
              style={{height:400,marginTop:150}}
            ></img>{" "}
          </div>
        </div>

        {/************************************************************************/}

        <div class="row div1">
          <div class="col-6" style={{ backgroundColor: "black" }}>
            {" "}
            <img
              src="image/download-img.png"
              class="rounded mx-auto d-block"
              alt="..."
              style={{width:600,height:200,marginLeft:200,marginTop:200}}
            ></img>{" "}
          </div>

          <div
            class="col-6"
            style={{ padding: 200, backgroundColor: "black", color: "white" }}
          >
            <h1 class="display-4">Download your games to play offline.</h1>
            <h3>
              Save your favourites easily and always have something to play.
            </h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default GetStarted;
