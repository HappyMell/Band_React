import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import News from "./News";
import Side from "./Side";
export class App extends Component {
  render() {
    return (
      <div className='main'>
        <Navbar />
        <News />
        <Side />
      </div>
    );
  }
}

export default App;
