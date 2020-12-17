import React, { Component } from 'react'
import MiniDrawer from "../../reuseable/Header";
import Footer from "../../reuseable/Footer";


 class PuzzleGames extends Component {
    render() {
        return (
            <React.Fragment>
           <MiniDrawer>
           <h1> PuzzleGames</h1>
           </MiniDrawer>
           <Footer/>
           </React.Fragment>
        )
    }
}
export default PuzzleGames

