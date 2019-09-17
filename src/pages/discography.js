import React, { Component } from "react";
import firebase from "../firebase";
import { Accordion, Card, Button } from "react-bootstrap";
import scrollToComponent from "react-scroll-to-component";
import ScrollAnimation from "react-animate-on-scroll";

export class discography extends Component {
  state = {
    discography: [],
    scrollNews: {}
  };

  componentDidMount() {
    const newsRef = firebase.database().ref("discography");
    newsRef.on("value", snapshot => {
      let discography = snapshot.val();

      let newState = [];
      for (let disco in discography) {
        newState.push({
          id: disco,
          title: discography[disco].title,
          image: discography[disco].image,
          details: discography[disco].details
        });
      }
      this.setState({
        discography: newState
      });
    });
  }

  render() {
    return (
      <div className='news'>
        <div className='news_info'>
          <Accordion defaultActiveKey='0'>
            <Card>
              <Card.Header>
                <p>Albums</p>
                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                  +
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                  <div class='items'>
                    {this.state.discography.map((disco, index) => {
                      return (
                        <ScrollAnimation animateIn='fadeIn'>
                          <div class='item'>
                            <div class='item-image'>
                              <img src={disco.image} alt='' />
                            </div>
                            <div class='item-text'>
                              <div class='item-text-wrap'>
                                <h2 class='item-text-title'>{disco.title}</h2>
                              </div>
                            </div>
                          </div>
                        </ScrollAnimation>
                      );
                    })}
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default discography;
