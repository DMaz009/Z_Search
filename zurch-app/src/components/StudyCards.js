import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';
import './studyCard.css';


export default class StudyCards extends Component {
  constructor(props) {
    super(props)
  }



  render (){
    return (
      <Container id="container" xs="auto" fluid="sm" fixed="bottom" >
        <Card fixed="bottom" style={{ width: '18rem'}}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              Summary of study ..Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Category</ListGroupItem>
            <ListGroupItem>Variable Tested</ListGroupItem>
            <ListGroupItem>Rating</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Study Link</Card.Link>
            <Card.Link href="#">Edit</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
        </Card>
      </Container>

    )
  }
}
