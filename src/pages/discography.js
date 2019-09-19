import React, { Component } from "react";
import firebase from "../firebase";
import { Accordion, Card, Button, Container } from "react-bootstrap";

export class discography extends Component {
  state = {
    discography: []
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
                        <div>
                          <Accordion key={index}>
                            <Card>
                              <div class='item' key={index}>
                                <div class='item-image'>
                                  <img src={disco.image} alt='' />
                                </div>

                                <div class='item-text'>
                                  <div class='item-text-wrap'>
                                    <Accordion.Toggle eventKey='1'>
                                      <h2 class='item-text-title'>
                                        {disco.title}
                                      </h2>
                                    </Accordion.Toggle>
                                  </div>
                                </div>
                              </div>
                            </Card>
                            <Accordion.Collapse eventKey='1'>
                              <Container>
                                <div className='information'>
                                  <p>{disco.title}</p>
                                  <p>{disco.details}</p>
                                  <img src={disco.image} />
                                </div>
                              </Container>
                            </Accordion.Collapse>
                          </Accordion>
                        </div>
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
