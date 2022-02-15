import React, { Component } from 'react'


export default class StudyCards extends Component {
  constructor(props) {
    super(props)
  }

  <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown">
        {props.title}
      </button>
      {<div className="dropdown-menu">
        {props.list.map((item, i) => {
          <a className="dropdown-item" key={item.id} href="/">{item.category[i]}</a>
        })}
      </div>}
    </div>

  render (){
    return (
      <h1> StudyCards </h1>
    )
  }
}
