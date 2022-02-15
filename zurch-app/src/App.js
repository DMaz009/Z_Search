import React, { Component } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import StudyContainer from './StudyContainer'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: 'http://localhost:3003',
      categories: ['Cellular', 'Genetics', 'Biochemistry', 'Biophysics', 'Biotechnology', 'Nutrition', 'Microbiology', 'Immunology', 'Cognitive', 'Endocriniology', 'Gerontology']
    }
  }

  render() {
    return (
      <div className="App">
        <Nav categories={this.state.catgories}/>
        <StudyContainer />
        <Routes>


        </Routes>
      </div>
    );
  }
}

export default App;
