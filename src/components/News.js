import React, { Component } from "react";
import firebase from "../firebase";
import { Accordion, Card, Button } from "react-bootstrap";
import scrollToComponent from "react-scroll-to-component";
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

  scrollToTop = () => {
    let scroller = scrollToComponent(this.scrollNews, {
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
            <div
              key={index}
              className='news_info'
              ref={el => (this.scrollNews[el.id] = el)}
            >
              <Accordion defaultActiveKey={index}>
                <Card>
                  <Card.Header>
                    <p>{newbie.title}</p>
                    <Accordion.Toggle
                      as={Button}
                      variant='link'
                      eventKey={index}
                      onClick={this.scrollToTop}
                    >
                      +
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                      <img src={newbie.image} />
                      <p>{newbie.details}</p>
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
