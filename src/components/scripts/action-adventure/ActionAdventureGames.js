import React, { Component } from "react";
import MiniDrawer from "../../reuseable/Header";
import { Player } from "video-react";
import axios from "axios";
import Footer from "../../reuseable/Footer";
import { Card, CardContent, Typography } from "@material-ui/core";

class ActionAdventureGames extends Component {
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
          </button>          ) : (
            <div className="continer">
              {data === null ? null : (
                <React.Fragment>
                  {data.map((result) => (
                   <div class="row">
                   <div class="col-3" >
                   <img
                   style={{height:100,width:100}}
                     src={result.url}
                     class="rounded mx-auto d-block mt-5"
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
    );
  }
}

export default ActionAdventureGames;

{/*
<Card key={result.id}>
<CardContent>
<Typography variant="h6">{result.albumId}</Typography>
  <Typography variant="h6">{result.id}</Typography>
<Typography variant="h5">{result.title}</Typography>
  <img
  style={{height:100,width:100}}
    src={result.thumbnailUrl}
    class="rounded mx-auto d-block mt-5"
    alt="..."
  ></img>
</CardContent>
</Card>*/}