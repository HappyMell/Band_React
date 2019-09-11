import React, { Component } from "react";
import firebase from "firebase";
import firebaseConfig from "../firebase-config";

firebase.initializeApp(firebaseConfig);

class News extends Component {
  state = {
    img: null
  };

  componentDidMount() {
    /*
    const images = firebase
      .storage()
      .ref()
      .child("news/");
    const image = images.child("hearts.jpg");
    image.getDownloadURL().then(url => {
      this.setState({
        img: url
      });
    });
    console.log(image.getDownloadURL());
    */
  }

  render() {
    return (
      <div className='news'>
        <p>Hello</p>
        <img src={this.state.img} />
      </div>
    );
  }
}

export default News;
