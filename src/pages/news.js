import React, { Component } from "react";
import firebase from "../firebase";
import { Accordion, Card, Button } from "react-bootstrap";
import scrollToComponent from "react-scroll-to-component";
import ScrollAnimation from "react-animate-on-scroll";
class News extends Component {
  state = {
    news: [],
    scrollNews: {}
  };

  componentDidMount() {
    const newsRef = firebase.database().ref("news");
    newsRef.on("value", snapshot => {
      let news = snapshot.val();

      let newState = [];
      for (let newie in news) {
        newState.push({
          id: newie,
          title: news[newie].title,
          image: news[newie].image,
          details: news[newie].details
        });
      }
      this.setState({
        news: newState
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
        {this.state.news.map((newbie, index) => {
          return (
            <div key={index} className='news_info' id={`news_info-${index}`}>
              <Accordion defaultActiveKey={index}>
                <Card>
                  <Card.Header>
                    <p>{newbie.title}</p>
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
                        <img src={newbie.image} />
                        <p>{newbie.details}</p>
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

export default News;
