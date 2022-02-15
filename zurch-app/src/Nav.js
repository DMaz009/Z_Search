import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'


export default class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: this.props.categories
    }
  }


  render (){
    return (
      <div>
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            Research Categories
          </Dropdown.Toggle>

          { this.props.categories.map((category, i) => (
          <Dropdown.Menu key={category._id}>
          <Dropdown.Item href="#">{this.category}</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
          ))}
        </Dropdown>

      </div>
    )
  }
}
