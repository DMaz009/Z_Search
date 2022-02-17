import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';
import './studyCard.css';


export default class Cards extends Component {
  constructor(props) {
    super(props)
  }



  render (){
    return (
      <Container id="container" xs="auto" fluid="sm" fixed="bottom" >
        <Card fixed="bottom" style={{ width: '18rem'}}>
          <Card.Body>
            <Card.Title>{this.props.studyCard.title}</Card.Title>
            <Card.Text>
              {this.props.studyCard.summary}Summary
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{this.props.studyCard.category}</ListGroupItem>
            <ListGroupItem>{this.props.studyCard.variable}</ListGroupItem>
            <ListGroupItem>{this.props.studyCard.rating}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">{this.props.studyCard.link}</Card.Link>
            <Card.Link href="#">Edit</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
        </Card>
      </Container>

    )
  }
}
