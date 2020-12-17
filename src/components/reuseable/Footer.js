import React, { Component } from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import GetAppSharpIcon from '@material-ui/icons/GetAppSharp';
import DehazeSharpIcon from '@material-ui/icons/DehazeSharp';

 class Footer extends Component {
    render() {
        return (
            <div>
            <nav class="navbar fixed-bottom navbar-light" style={{backgroundColor:"black",color:"white",height:50,}}>
            <div class="container-fluid">
             {/* <a class="navbar-brand ml-5" href="#" style={{color:"white"}}>Game</a> */}
              <a href="/"><HomeOutlinedIcon className="ml-5"/></a>
              <SearchIcon/>
              <SportsEsportsOutlinedIcon/>
              <GetAppSharpIcon/>
              <DehazeSharpIcon/>
            </div>
          </nav>
            </div>
        )
    }
}
export default Footer