import React, { Component } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import StudyContainer from './StudyContainer'
import NavBar from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const baseUrl = "http://localhost:3003"
class App extends Component {
  constructor() {
    super()

    this.state = {
      name: [
        {
          id: 0,
          category: 'Cellular',
          selected: false,
          key: 'name'
        },
        {
          id: 1,
          category: 'Genetics',
          selected: false,
          key: 'name'
        },
        {
          id: 2,
          category: 'Biochemistry',
          selected: false,
          key: 'name'
        },
        {
          id: 3,
          category: 'Endocriniology',
          selected: false,
          key: 'name'
        },
        {
          id: 4,
          category: 'Microbiology',
          selected: false,
          key: 'name'
        },
        {
          id: 5,
          category: 'Immunology',
          selected: false,
          key: 'name'
        },
        {
          id: 6,
          category: 'Cognitive',
          selected: false,
          key: 'name'
        },
        {
          id: 7,
          category: 'Gerontology',
          selected: false,
          key: 'name'
        },
        {
          id: 8,
          category: 'Nutrition',
          selected: false,
          key: 'name'
        }
      ]
    }

  }


  render(){
    return (
      <div className="App">
        <NavBar title="Category" list={this.state.name}/>
        <StudyContainer baseUrl={baseUrl} addStudy={this.addStudy}/>

      </div>
    )
  }
}

export default App;
