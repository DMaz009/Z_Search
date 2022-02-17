import React, { Component } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import StudyContainer from './StudyContainer'
import NavBar from './Nav'
import Create from './components/Create'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const baseUrl = "http://localhost:3003"
class App extends Component {
  constructor() {
    super()
//add a method that is called after you fetch to the backend will call this method and add that studycard to the studyCard array.
    this.state = {
      studyCards: [],
      studies: [],
      studiesToBeEdited: {},
      title: "",
      category: "",
      link: "",
      summary: "",
      rating: 0,
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

  addStudy = (studyCard) => {

    const copyStudies = [...this.state.studyCards]
    copyStudies.push(studyCard)
    this.setState({
      studyCards: copyStudies
    })
  }

  addName = (name) => {
    this.setState({
      name: [name]
    })
  }

  render(){
    console.log(this.state.studyCards);
    return (
      <div className="App">
        {this.state.name.map((n) => {
          return <p>{JSON.stringify(n)}</p>
        })}
        <Navbar id="nav" fixed= "top" bg="dark" expand='lg'>
          <NavBar title="Category" list={this.state.name}/>
          <Create title="Category" studyCards={this.state.studyCards} addStudy={this.addStudy} list={this.state.name} setname={this.addName}/>

        </Navbar>


        <StudyContainer baseUrl={baseUrl} addStudy={this.addStudy} studyCards={this.state.studyCards} />

      </div>
    )
  }
}

export default App;
