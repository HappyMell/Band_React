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

  scrollToTop = index => {
    let scroller = scrollToComponent(this["section-" + index], {
      offset: 0,
      align: "top",
      duration: 1000,
      ease: "inExpo"
    });

    scroller.on("end", () => console.log("Scrolling End!"));
  };
  render() {
    return (
      <div className='news'>
        {this.state.discography.map((disco, index) => {
          return (
            <div key={index} className='news_info'>
              <Accordion defaultActiveKey={index}>
                <Card>
                  <Card.Header>
                    <p>Albums</p>
                    <Accordion.Toggle
                      as={Button}
                      variant='link'
                      eventKey={index}
                      onClick={() => this.scrollToTop(index)}
                    >
                      +
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey={index}
                    ref={section => {
                      this["section-" + index] = section;
                    }}
                  >
                    <Card.Body>
                      <ScrollAnimation animateIn='fadeIn'>
                        <img src={disco.image} />
                        <p>{disco.details}</p>
                      </ScrollAnimation>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          );
        })}
      </div>
    );
  }
}

export default discography;
