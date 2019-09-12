import React, { Component } from "react";
import firebase from "../firebase";
import Fade from "react-reveal/Fade";
import { Accordion, Card, Button } from "react-bootstrap";

class News extends Component {
  state = {
    news: []
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

  render() {
    return (
      <div className='news'>
        {this.state.news.map((newbie, index) => {
          return (
            <div key={index} className='news_info'>
              <Accordion defaultActiveKey='0'>
                <Card>
                  <Fade bottom>
                    <Card.Header>
                      <p>{newbie.title}</p>
                      <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                        +
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='0'>
                      <Card.Body>
                        <img src={newbie.image} />
                        <p>{newbie.details}</p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Fade>
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
