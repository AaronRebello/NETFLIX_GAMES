import React, { Component } from "react";
import MiniDrawer from "../../reuseable/Header";
import Footer from "../../reuseable/Footer";

import axios from "axios";
import { Card, CardContent, Typography } from "@material-ui/core";

class Adventuregames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        this.setState({
          data: res.data,
          loading: false,
        });
        console.log(res.data);
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
        console.log(err);
      });
  }

  render() {
    const { loading, data } = this.state;
    return (
      <React.Fragment>
        <React.Fragment>
          <MiniDrawer>
            <h1>ActionAdventureGames</h1>
            {loading ? (
              <button class="btn btn-primary" type="button" disabled>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            ) : (
              <div className="continer">
                {data === null ? null : (
                  <React.Fragment>
                    {data.map((result) => (
                      <div class="row-12">
                        <div class="col-4">
                          <img
                            src={result.url}
                            class="rounded mx-auto d-block mt-5"
                            style={{ height: 200, width: 200 }}
                            alt="..."
                          ></img>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                )}
              </div>
            )}
          </MiniDrawer>
          <Footer />
        </React.Fragment>
      </React.Fragment>
    );
  }
}
export default Adventuregames;
