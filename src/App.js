import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Navbar from "./components/Navbar";

//Pages
import News from "./pages/news";
import Discography from "./pages/discography";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className='main'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={News} />
            <Route exact path='/discography' component={Discography} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
